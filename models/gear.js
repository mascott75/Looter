module.exports = function (sequelize, DataTypes) {
    var Gears = sequelize.define("Gears", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        varient: {
            type: DataTypes.STRING,
        },
        dps: {
            type: DataTypes.DECIMAL
        },
        accuracy: {
            type: DataTypes.DECIMAL
        },
        element : {
            type: DataTypes.STRING
        }
    });
    return Gears;
};