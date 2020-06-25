var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
   
    Users.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });
    return Users;
};


