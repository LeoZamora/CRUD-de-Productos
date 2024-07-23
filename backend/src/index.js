import app from "./app.js";
import { getMysqlConnection } from "./db/connection_sql.js";
// import { getConnection } from "./db/connection.js";

// getConnection();
getMysqlConnection()

app.listen(app.get('port'));

console.log('servidor iniciado en el puerto ', app.get('port'));