module.exports = (sequelize, DataTypes) =>
    sequelize.define('Notifications', {
        userID: DataTypes.STRING,
        tripID: DataTypes.STRING,
        tripName: DataTypes.STRING,
        action: DataTypes.STRING
    })