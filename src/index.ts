import {dataSourceTaller} from "./data-source"
import {User} from "./entity/User"

const validateConnection = () => {
  dataSourceTaller.initialize()
    .then(() => {
      dataSourceTaller.query("SELECT * FROM estudiante where 'estudiante_id'=1").then(r => {
        console.log(r)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

validateConnection()