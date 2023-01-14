const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'administrador';
const DB_PASSWORD = process.env.DB_PASSWORD || 'administrador';
const DB_NAME = process.env.DB_NAME || 'db_mtb_administracion';
const DB_URI = process.env.DB_URI ;


module.exports = {
    
    //Local
    /*HOST: 'containers-us-west-121.railway.app' ,
    USER: 'postgres',
    PASSWORD:'FnCGa4a8UNnWgQsqdYp6',
    DB: 'railway',
    PORT:6399,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //tiempo máximo, en milisegundos, que el grupo intentará conectarse antes de lanzar el error
        idle: 10000 //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }*/
    
    URI:'postgresql://postgres:FnCGa4a8UNnWgQsqdYp6@containers-us-west-121.railway.app:6399/railway'
};
