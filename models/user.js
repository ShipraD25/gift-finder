module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        
                // The email cannot be null, and must be a proper email before creation
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: true
                    }
                },
                // The password cannot be null
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            });
            
    return User;
};
