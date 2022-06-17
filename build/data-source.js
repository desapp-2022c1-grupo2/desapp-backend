"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var Client = require('pg').Client;
var dotenv = require('dotenv').config();
exports.client = new Client({
    connectionString: process.env.URI,
    ssl: {
        rejectUnauthorized: false
    }
});
//# sourceMappingURL=data-source.js.map