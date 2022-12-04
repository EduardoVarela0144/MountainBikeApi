const db = require("../models");
const Rutas = db.rutas;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Rutas
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio, nombre="
        });
        return;
    }

    // Crear un Rutas
    const rutas = {
        nombre: req.body.nombre,
        url:req.body.url,
        dificultad:req.body.dificultad,
        x:req.body.x,
        y:req.body.y
    };

    // Guardar Rutas en la base de datos
    Rutas.create(rutas)
        .then(rutas => {
            res.status(200).send(rutas);
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Ocurrio un error al crear Rutas."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los Roles de la base de datos
exports.findAll = (req, res) => {
    Rutas.findAll()
        .then(rutas => {
            res.status(200).send(rutas);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos las rutas."
            });
        });
};

// Encontrar Rutas por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Rutas.findByPk(id)
        .then(rutas => {
            res.status(200).send(rutas);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Rutas por id=" + id
            });
        });
};
// Actualizar Rutas por id
exports.update = (req, res) => {
    const id = req.params.id;
    Rutas.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Rutas se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar Rutas con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar Rutas con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un Rutas por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Rutas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Rutas eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar Rutas con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar Rutas con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los Rutas de la base de datos
exports.deleteAll = (req, res) => {
    Rutas.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Rutas fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar Roles."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
