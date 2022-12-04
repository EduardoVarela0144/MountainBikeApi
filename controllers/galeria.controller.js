const db = require("../models");
const Galeria = db.galeria;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Galeria
exports.create = (req, res) => {
    // Validar request
    if (!req.body.src) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio"
        });
        return;
    }

    // Crear un Galeria
    const galeria = {
        src: req.body.src
    };

    // Guardar Galeria en la base de datos
    Galeria.create(galeria)
        .then(galeria => {
            res.status(200).send(galeria);
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Ocurrio un error al crear Galeria."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los Comentarios de la base de datos
exports.findAll = (req, res) => {
    Galeria.findAll()
        .then(galeria => {
            res.status(200).send(galeria);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Comentarios."
            });
        });
};

// Encontrar Galeria por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Galeria.findByPk(id)
        .then(galeria => {
            res.status(200).send(galeria);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Galeria por id=" + id
            });
        });
};
// Actualizar Galeria por id
exports.update = (req, res) => {
    const id = req.params.id;
    Galeria.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Galeria se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar Galeria con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar Galeria con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un Galeria por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Galeria.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Galeria eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar Galeria con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar Galeria con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los Galeria de la base de datos
exports.deleteAll = (req, res) => {
    Galeria.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Comentarios fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar Comentarios."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
