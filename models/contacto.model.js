module.exports = (sequelize, Sequelize) => {
    const Contacto = sequelize.define("contacto", {
        nombre: {
            type: Sequelize.STRING
        },
        apellidos: {
            type: Sequelize.STRING
        },
        pais: {
            type: Sequelize.STRING
        },
        comentarios: {
            type: Sequelize.STRING
        }
    });

    return Contacto;
};
