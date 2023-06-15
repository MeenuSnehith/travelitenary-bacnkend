module.exports = (sequelize, DataTypes) =>
    sequelize.define('Itinerary', {
        tripID: DataTypes.STRING,
        day: DataTypes.INTEGER,
        activity: DataTypes.STRING,
        location: DataTypes.STRING,
        locationIMG: DataTypes.STRING,
        hotelName: DataTypes.STRING,
        hotelIMG: DataTypes.STRING
    })