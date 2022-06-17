"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("./data-source");
// import {User} from "./entity/User"
var validateConnection = function () {
    data_source_1.client.connect();
    data_source_1.client.query('SELECT table_schema,table_name FROM information_schema.tables;', function (err, res) {
        if (err)
            throw err;
        console.log(res.rows);
        if (res.rows.size > 0)
            console.log("Connection successful");
        data_source_1.client.end();
    });
};
validateConnection();
//# sourceMappingURL=index.js.map