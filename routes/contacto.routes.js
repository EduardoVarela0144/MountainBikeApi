module.exports = app => {
    const contacto = require("../controllers/contacto.controller.js");

    var router = require("express").Router();
    // Crear un nuevo Contacto 
    router.post("/contacto", contacto.create); //http://localhost:9595/administrador/contacto

    // Recuperar todos los Contactos
    router.get("/contactos", contacto.findAll); //http://localhost:9595/administrador/contactos

    // Encontrar Contacto por id
    router.get("/contacto/:id", contacto.findOne); //http://localhost:9595/administrador/contacto/[id]

    // Actualizar Contacto por id
    router.put("/contacto/:id", contacto.update); //http://localhost:9595/administrador/contacto/[id]

    // Eliminar un Contacto por id
    router.delete("/contacto/:id", contacto.delete); //http://localhost:9595/administrador/contacto/[id]

    // Eliminar todos los Contactos de la base de datos
    router.delete("/contactosALL", contacto.deleteAll); //http://localhost:9595/administrador/contactosALL

    app.use('/administrador', router);
};
