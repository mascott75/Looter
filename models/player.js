module.exports = function (sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },

        health: {
            type: DataTypes.INTEGER,
        },
        damage: {
            type: DataTypes.DECIMAL
        },
        ability: {
            type: DataTypes.STRING
        }
    });
    return Players;
};