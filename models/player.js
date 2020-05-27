module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
    return User;
};