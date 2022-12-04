module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        //Permisos para crear usuarios
        userCrear: {
            type: Sequelize.BOOLEAN
        },
        userActualizar: {
            type: Sequelize.BOOLEAN
        },
        userBorrar: {
            type: Sequelize.BOOLEAN
        },
        //Permisos para administrar imagenes
        imageCrear: {
            type: Sequelize.BOOLEAN
        },
        imageActualizar: {
            type: Sequelize.BOOLEAN
        },
        imageBorrar: {
            type: Sequelize.BOOLEAN
        },
        //Permisospara administrar rutas
        rutasCrear: {
            type: Sequelize.BOOLEAN
        },
        rutasActualizar: {
            type: Sequelize.BOOLEAN
        },
        rutasBorrar: {
            type: Sequelize.BOOLEAN
        },
        //Permisos para administrar comentarios
        comCrear: {
            type: Sequelize.BOOLEAN
        },
        comActualizar: {
            type: Sequelize.BOOLEAN
        },
        comBorrar: {
            type: Sequelize.BOOLEAN
        }
    });

    return Rol;
};
