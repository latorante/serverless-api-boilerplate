// Libs
import * as _ from "lodash";
import * as Sequelize from 'sequelize';
import * as Promise from "bluebird";
import * as ResponseCode from "http-status-codes";
import { IResource } from "./resource";

/**
 * Endpoint (resource) base class
 * Resource:
 *
 * Extending Class should have methods defined as such
 * /handle%HTTP_METHOD%
 */
export default class Resource implements IResource {

    // Read-only properties
    readonly method;
    readonly event;
    readonly context;
    readonly callback;

    // Public properties
    // Request body
    public body;
    // internal method name
    public methodInternal;
    // Promise returned
    public methodPromise;


    /**
     * This gets initiated from handler.ts,
     * which passes the event, context and callback
     *
     * @param event
     * @param context
     * @param cb
     * @returns {any}
     */
    constructor(event: any, context: any, cb: Function) {
        // Without method, don't bother running
        if(event.hasOwnProperty('method')){
            // Define vars
            this.method = event.method;
            this.event = event;
            this.context = context;
            this.callback = cb;
            // Body object that will be filtered later on
            this.body = null;
            // HTTP Method inside
            this.methodInternal = 'handle' + this.method;
            // Run Setup method if present in class
            if(this['init']){
                this['init']();
            }
            // Run HTTP method if present in class
            if(this[this.methodInternal]){
                // Create a new Bluebird promise, with handeling
                // of the innner Request Method
                this.methodPromise = new Promise((resolve, reject) => {
                    this[this.methodInternal](resolve, reject);
                });
                return this.resolveMethodRequest();
            }
        }
    }

    /**
     *
     * @see Sequelize/errors/index.js
     *
     * @returns {Bluebird<any>}
     */
    resolveMethodRequest(): any {
        return this.methodPromise
            .then((object) => {
                // Resolved data
                this.resolveResponse(object);
            }).catch(TypeError, ReferenceError, (e) => {
                // If it is a TypeError, will end up here because
                // it is a type error to reference property of undefined
                // TODO: handleRegularError
            }).catch(Sequelize.ValidationError, (e) => {
                // TODO: handleDatabaseValidationError
            }).catch(Sequelize.DatabaseError, (e) => {
                // TODO: handleDatabaseError
            }).catch(Sequelize.TimeoutError, (e) => {
                // TODO: handleDatabaseTimemout
            }).catch(Sequelize.Error, (e) => {
                // Regular error
                // TODO: handleDatabaseBaseError
            }).catch((e) => {
                // Generic Error
                // TODO: handleError
            }).finally(() => {
                // If all fails, run this
                this.resolveResponse(
                    this.generateSimpleResponseObject(ResponseCode.NO_CONTENT, {})
                );
            });
    }

    /**
     * Self-explanatory
     */
    getRequestQueryParams(): object | null | Array<any> {
        return this.event.query;
    }

    /**
     * Self-explanatory
     */
    getRequestBody(): object | null | Array<any> {
        return this.event.body;
    }

    /**
     * Get query param
     * - fallbacks to undefined as default
     *
     * @param param
     * @returns {null}
     */
    getRequestQueryParam(param = ''): string | null {
        if(this.hasRequestQueryParam(param)){
            return this.event.query[param];
        }
        return null;
    }

    /**
     * Self-explanatory
     * @param param
     */
    hasRequestQueryParam(param = ''): boolean {
        return _.has(this.event.query, param);
    }

    /**
     * Self-explanatory
     * @param param
     */
    hasRequestBodyParam(param = ''): boolean {
        return _.has(this.body, param);
    }

    // Basic error handler (should be overwritten if needed)

    /**
     * Resolve Response
     *
     * @param responseObject
     */
    resolveResponse(responseObject: object): void {
        this.callback(
            null,
            <object>responseObject
        );
    }

    /**
     * Generates simple response object, with status code, and response body.
     *
     * @param statusCode
     * @param response
     * @returns {{statusCode: number, body: (Object|string|any)}}
     */
    generateSimpleResponseObject(statusCode = 200, response = {}): object {
        return {
            statusCode: statusCode,
            body: this.beforeReturn(response),
        };
    }

    /**
     * Before return, runs on body object,
     * any extra logic can be here in individual resource classes.
     *
     * @param response
     * @returns {string}
     */
    beforeReturn(response: object | string): object | string | any {
        // Convert JSON object into string
        // Preform actions needed in resource class.
        return JSON.stringify(response);
    }

}