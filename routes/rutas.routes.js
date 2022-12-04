module.exports = app => {
    const Ruta = require("../controllers/rutas.controller.js");

    var router = require("express").Router();
    // Crear un nuevo Rutas 
    router.post("/Ruta", Ruta.create); //http://localhost:9595/administrador/Ruta

    // Recuperar todos los Rutas
    router.get("/rutas", Ruta.findAll); //http://localhost:9595/administrador/rutas/

    // Encontrar Rutas por id
    router.get("/Ruta/:id", Ruta.findOne); //http://localhost:9595/administrador/Ruta/[id]

    // Actualizar Rutas por id
    router.put("/Ruta/:id", Ruta.update); //http://localhost:9595/administrador/Ruta/[id]

    // Eliminar un Rutas por id
    router.delete("/Ruta/:id", Ruta.delete); //http://localhost:9595/administrador/Ruta/[id]

    // Eliminar todos los Rutas de la base de datos
    router.delete("/rutasALL", Ruta.deleteAll); //http://localhost:9595/administrador/rutasALL/

    app.use('/administrador', router);
};
