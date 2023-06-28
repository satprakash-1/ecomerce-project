class Errorhander extends error{
    constructor (message,statusCode){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);

    }
}

Module.exports = Errorhander