const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'administrador';
const DB_PASSWORD = process.env.DB_PASSWORD || 'administrador';
const DB_NAME = process.env.DB_NAME || 'db_mtb_administracion';


module.exports = {
    
    //Local
    HOST: DB_HOST ,
    USER: DB_USER  ,
    PASSWORD:DB_PASSWORD  ,
    DB: DB_NAME  ,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //tiempo máximo, en milisegundos, que el grupo intentará conectarse antes de lanzar el error
        idle: 10000 //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }    
};
