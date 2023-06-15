module.exports = (sequelize, DataTypes) =>
    sequelize.define('Trip', {
        tripTitle: DataTypes.STRING,
        location: DataTypes.STRING,
        days: DataTypes.INTEGER,
        nights: DataTypes.INTEGER,
        costperperson: DataTypes.INTEGER,
        fromdate: DataTypes.DATEONLY,
        todate: DataTypes.DATEONLY,
        description: DataTypes.STRING,
    })
    //vishals