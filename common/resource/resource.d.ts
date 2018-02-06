/**
 * Resource Interface
 */
export interface IResource {

    readonly method: string;
    readonly event: any;
    readonly context: Function;
    readonly callback: Function;

    body: Object;
    methodInternal: string;
    methodPromise: Promise<any>;

    beforeReturn(response: object | string): object | string | any;
    generateSimpleResponseObject(statusCode: number, response: object): object;

}