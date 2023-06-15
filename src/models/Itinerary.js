module.exports = (sequelize, DataTypes) =>
    sequelize.define('Itinerary', {
        tripID: DataTypes.STRING,
        day: DataTypes.INTEGER,
        activity: DataTypes.STRING,
        locationID: DataTypes.STRING,
        hotelID: DataTypes.STRING
    })