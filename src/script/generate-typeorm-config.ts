import {ConfigService} from "@nestjs/config";
import {TYPEORM_CONFIG} from "../config";
import * as fs from "fs";

/**
 * Genera un archivo .json con la configuracion de typeorm
 * esto sirver para poder utilizar el CLI de typeorm
 * para correr los script desde consola
 * @param config configuracion del typeorm
 */


const generateTypeormConfigFile = (config: ConfigService) => {
    const typeOrmConfig = config.get(TYPEORM_CONFIG)
    fs.writeFileSync('ormconfig.json',
        JSON.stringify(typeOrmConfig,null,2)
    )
}

export default generateTypeormConfigFile