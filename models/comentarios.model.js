module.exports = (sequelize, Sequelize) => {
    const comentario = sequelize.define("comentario", {
        nombre: {
            type: Sequelize.STRING
        },
        pista: {
            type: Sequelize.STRING
        },
        comentario: {
            type: Sequelize.STRING
        },
        edad: {
            type: Sequelize.INTEGER
        },
        pais: {
            type: Sequelize.STRING
        },
        url_imagen: {
            type: Sequelize.STRING
        }
    });

    return comentario;
};
