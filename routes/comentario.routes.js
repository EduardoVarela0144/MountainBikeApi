module.exports = app => {
    const comentario = require("../controllers/comentario.controller");

    var router = require("express").Router();
    // Crear un nuevo comentario
    router.post("/comentario", comentario.create); //http://localhost:9595/administrador/comentario

    // Recuperar todos los comentario
    router.get("/comentarios", comentario.findAll); //http://localhost:9595/administrador/comentarios/

    // Encontrar comentario por id
    router.get("/comentario/:id", comentario.findOne); //http://localhost:9595/administrador/comentario/[id]

    // Actualizar comentario por id
    router.put("/comentario/:id", comentario.update); //http://localhost:9595/administrador/comentario/[id]

    // Eliminar un comentario por id
    router.delete("/comentario/:id", comentario.delete); //http://localhost:9595/administrador/comentario/[id]

    // Eliminar todos los comnetarios de la base de datos
    router.delete("/comentariosALL", comentario.deleteAll); //http://localhost:9595/administrador/comentariosALL/

    app.use('/administrador', router);
};
