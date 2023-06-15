module.exports = (sequelize, DataTypes) =>
    sequelize.define('Location', {
        Address1: DataTypes.STRING,
        Address2: DataTypes.STRING,
        ImageURL: DataTypes.STRING
    })