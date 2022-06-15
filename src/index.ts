import {createConnection, dataSourceDocker, dataSourceHeroku, dataSourceTaller} from "./data-source"

createConnection(dataSourceHeroku)
