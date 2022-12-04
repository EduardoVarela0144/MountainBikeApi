module.exports = (sequelize, Sequelize) => {
    const Galeria = sequelize.define("galeria", {
        src: {
            type: Sequelize.STRING
        }
    });

    return Galeria;
};