module.exports = (sequelize, DataTypes) =>
    sequelize.define('Itinerary', {
        tripID: DataTypes.STRING,
        location: DataTypes.STRING,
        day: DataTypes.INTEGER
    })