module.exports = function(sequelize, DataTypes){
  var UserLogin = sequelize.define("UserLogin", {
   username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[8]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[3]
      }
    }
  })
  return UserLogin
}