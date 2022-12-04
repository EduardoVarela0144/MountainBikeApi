

module.exports = {
    
    //Local
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'administrador',
    PASSWORD:process.env.DB_PASSWORD || 'administrador',
    DB: process.env.DB_NAME || 'db_mtb_administracion',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //tiempo máximo, en milisegundos, que el grupo intentará conectarse antes de lanzar el error
        idle: 10000 //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }    
};
