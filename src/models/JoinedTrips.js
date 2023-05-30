module.exports = (sequelize, DataTypes) =>
    sequelize.define('JoinedTrips', {
        userID: DataTypes.STRING,
        tripID: DataTypes.STRING
    })