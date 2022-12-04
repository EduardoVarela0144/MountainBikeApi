const db = require("../models");
const Contacto = db.contacto;
const Op = db.Sequelize.Op;
var path = require('path');

// Crear y Guardar un nuevo Contacto
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El contenido no puede ser vacio, nombre=" + req.body.nombre + " descripcion=" + req.body.descripcion
        });
        return;
    }

    // Crear un Contacto
    const contacto = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        pais: req.body.pais,
        comentarios: req.body.comentarios,
    };

    // Guardar Contacto en la base de datos
    Contacto.create(contacto)
        .then(contacto => {
            res.status(200).send(contacto);
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Ocurrio un error al crear Contacto."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Recuperar todos los Contactoes de la base de datos
exports.findAll = (req, res) => {
    Contacto.findAll()
        .then(contacto => {
            res.status(200).send(contacto);
        })
        .catch(err => {
            res.status(500).send({
                mensaje:
                    err.message || "Ocurrio un error al recuperar todos los Contactoes."
            });
        });
};

// Encontrar Contacto por id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Contacto.findByPk(id)
        .then(contacto => {
            res.status(200).send(contacto);
        })
        .catch(err => {
            res.status(500).send({
                mensaje: "Error al recuperar Contacto por id=" + id
            });
        });
};
// Actualizar Contacto por id
exports.update = (req, res) => {
    const id = req.params.id;
    Contacto.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Contacto se actualizo con exito."
                });
            } else {
                // res.send({
                //     mensaje: `Error al actualizar Contacto con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al actualizar Contacto con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar un Contacto por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Contacto.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    mensaje: "Contacto eliminado con exito!"
                });
            } else {
                // res.send({
                //     mensaje: `Error al eliminar Contacto con id=${id}!`
                // });
                res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
            }
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje: "Error al eliminar Contacto con id=" + id
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};

// Eliminar todos los Contacto de la base de datos
exports.deleteAll = (req, res) => {
    Contacto.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.status(200).send({ mensaje: `${nums} Contactoes fueron eliminados con exito!` });
        })
        .catch(err => {
            // res.status(500).send({
            //     mensaje:
            //         err.message || "Error al eliminar Contactoes."
            // });
            res.status(500).sendFile(path.join(__dirname, '../source/img', 'error.png'));
        });
};
