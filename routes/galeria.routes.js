module.exports = app => {
    const galeria = require("../controllers/galeria.controller.js");

    var router = require("express").Router();
    // Crear un nuevo Galeria 
    router.post("/galeria", galeria.create); //http://localhost:9595/administrador/galeria

    // Recuperar todas los Fotos
    router.get("/fotos", galeria.findAll); //http://localhost:9595/administrador/fotos/

    // Encontrar Galeria por id
    router.get("/galeria/:id", galeria.findOne); //http://localhost:9595/administrador/galeria/[id]

    // Actualizar Galeria por id
    router.put("/galeria/:id", galeria.update); //http://localhost:9595/administrador/galeria/[id]

    // Eliminar un Galeria por id
    router.delete("/galeria/:id", galeria.delete); //http://localhost:9595/administrador/galeria/[id]

    // Eliminar todas las Fotos de la base de datos
    router.delete("/fotosALL", galeria.deleteAll); //http://localhost:9595/administrador/fotosALL/

    app.use('/administrador', router);
};
