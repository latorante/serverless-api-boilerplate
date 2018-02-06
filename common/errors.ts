/**
 * BaseError, that adds in __proto__
 */
class BaseError extends Error implements Error {
    public __proto__;
    constructor(message?: string) {
        super(message);
        this.__proto__ = new.target.prototype;
    }
}


export class MissingPramError extends BaseError implements Error {
    constructor(message?: string) {
        super(message);
        this.__proto__ = new.target.prototype;
    }
}

export class InvalidParamError extends BaseError implements Error {
    constructor(message?: string) {
        super(message);
        this.__proto__ = new.target.prototype;
    }
}

