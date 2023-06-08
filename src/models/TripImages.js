module.exports = (sequelize, DataTypes) =>
    sequelize.define('TripImages', {
        tripID: DataTypes.STRING,
        ImageURL: DataTypes.STRING
    })