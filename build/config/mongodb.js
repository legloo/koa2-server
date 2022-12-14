"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
// MongoDB connection options
exports.mongo = {
    options: {
        dbName: 'server',
        autoIndex: true,
        autoCreate: true
        // useMongoClient: true
        // useNewUrlParser:true,
        // useUnifiedTopology: true
    },
    uri: 'mongodb://127.0.0.1:27017'
};
