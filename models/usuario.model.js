module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        correo: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        contrasenia: {
            type: Sequelize.STRING
        }
    });

    return Usuario;
};