module.exports = (sequelize, Sequelize) => {
    const Rutas = sequelize.define("rutas", {
        nombre: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        dificultad: {
            type: Sequelize.INTEGER
        },
        x: {
            type: Sequelize.FLOAT
        },
        y: {
            type: Sequelize.FLOAT
        }
        
    });

    return Rutas;
};