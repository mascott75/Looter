module.exports = function (sequelize, DataTypes) {
    var Gear = sequelize.define("Gear", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        type: {
            type: DataTypes.STRING,
            allowNull: false
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
    return User;
};