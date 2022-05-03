const { Client } = require('pg');
const dotenv = require('dotenv').config();


export const client = new Client({
    connectionString: process.env.URI,
    ssl: {
        rejectUnauthorized: false
    }
});