import pg, { Pool } from "pg";
const validateEnviroments = ["DB_HOST","DB_PORT","DB_NAME","DB_USER","DB_PASSWORD"];

for(const validate of validateEnviroments ){
    if(!process.env[validate]){
        throw new Error ( `Environment not fount ${validate}` );
    }
}

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT ) : undefined,
    max:20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis:2000,

});

pool.connect((err) => {
    if(err){
        throw new Error('Error connecting to the database ');
    }
    console.log('connected to postgreQl database in port', process.env.DB_PORT);
});

export default pool;