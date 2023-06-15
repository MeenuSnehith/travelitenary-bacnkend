module.exports = (sequelize, DataTypes) =>
    sequelize.define('Hotel', {
        HotelName: DataTypes.STRING,
        ImageURL: DataTypes.STRING
    })