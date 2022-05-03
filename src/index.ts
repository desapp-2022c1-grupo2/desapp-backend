import {client} from "./data-source"
// import {User} from "./entity/User"

const validateConnection = () => {
    client.connect();
    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        if (err) throw err;
        if (res.rows != null) console.log("Connection successful");
        client.end();
    });
}

validateConnection()
