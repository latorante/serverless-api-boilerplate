// Set of default decorators for Resources in API calls
// Pleaes note, custom decorators foor each module (Resource) should be in their respective folders
// Good starting point: https://gist.github.com/remojansen/16c661a7afd68e22ac6e

// 1. Class decorators
// -

// 2. Method decorators

/**
 * Decorator, that allows to define which paramaters are
 * required in query string of the API call.
 *
 * @param requiredParams
 * @returns {(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>)=>(TypedPropertyDescriptor<any>|void)}
 */
export function methodRequiresInQuery<MethodDecorator>(requiredParams: Array<Object | String>): any {

    return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {

        // Save a reference to the original method this way we keep the values currently in the
        // descriptor and don't overwrite what another decorator might have done to the descriptor.
        if(descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        let originalMethod = descriptor.value;

        // NOTE: Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method. (see below)
        // Arguments for all methods are described in "./common/resource/index.ts"
        // Having said that, each method should receive "resolve" and "reject" callbacks as
        // arguments.
        descriptor.value = function(...args: any[]): any {

            // Get resolve reject
            let promiseResolve = args[0];
            let promiseReject = args[1];

            console.log('Requires');
            console.log(requiredParams);

            // run and store result
            // const result = originalMethod.apply(this, args);

            return originalMethod.apply(this, args);
        };

        // Return edited descriptor as opposed to overwriting the descriptor
        return descriptor;

    };
}

/**
 * Decorator, that allows to define which paramaters are
 * required in body (Json) of the API call.
 *
 * @param requiredParams
 * @returns {(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>)=>(TypedPropertyDescriptor<any>|void)}
 */
export function methodRequiresInBody<MethodDecorator>(requiredParams: Array<Object | String>): any  {

    return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
        return descriptor;
    };
}

/**
 * Decorator, that allows to define which paramaters are
 * forbidden in query string.
 *
 * @param forbiddenParams
 * @returns {(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>)=>(TypedPropertyDescriptor<any>|void)}
 */
export function methodForbidsInQuery<MethodDecorator>(forbiddenParams: Array<Object | String>): any {

    return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
        return descriptor;

    };
}


/**
 * Decorator, that allows to define which paramaters are
 * forbidden in body of the request. This might be helpfull if you're trying
 * to forbid patching "email" field for example in a POST request to your resource.
 *
 * @param forbiddenParams
 * @returns {(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>)=>(TypedPropertyDescriptor<any>|void)}
 */
export function methodForbidsInBody<MethodDecorator>(forbiddenParams: Array<Object | String>): any {

    return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
        return descriptor;
    };
}

/**
 * This decorator helps to elminate data from the object before returning it in a Response object.
 * Particulary useful if you want to for example hide "user_id" field, that might have gotten in the query
 * from Sequalize.
 *
 * You can use this decorator with values like "user_id" or (sincei it uses loadash) target values like so "user.meta.key"
 * @param omittedParams
 * @returns {(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>)=>(TypedPropertyDescriptor<any>|void)}
 */
export function methodOmmitsOnReturn<MethodDecorator>(omittedParams: Array<String>): any {

    return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {

        // Save a reference to the original method this way we keep the values currently in the
        // descriptor and don't overwrite what another decorator might have done to the descriptor.
        if(descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        let originalMethod = descriptor.value;

        // NOTE: Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method. (see below)
        // Arguments for all methods are described in "./common/resource/index.ts"
        // Having said that, each method should receive "resolve" and "reject" callbacks as
        // arguments.
        descriptor.value = function(...args: any[]): any {

            // Get resolve reject
            let promiseResolve = args[0];
            let promiseReject = args[1];

            console.log('Omitted Params:');
            console.log(omittedParams);

            // run and store result
            // const result = originalMethod.apply(this, args);

            return originalMethod.apply(this, args);
        };

        // Return edited descriptor as opposed to overwriting the descriptor
        return descriptor;

    };
}

// 3. Paramater decorators
// -

// 4. Property decorators
// -

