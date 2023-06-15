module.exports = (sequelize, DataTypes) =>
    sequelize.define('Location', {
        Address: DataTypes.STRING,
        Description: DataTypes.STRING(5000),
        ImageURL: DataTypes.STRING
    })