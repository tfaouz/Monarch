module.exports = function(sequelize, DataTypes){
  var UserWatchedVid = sequelize.define("UserWatchedVid", {
     watched: {
      type: DataTypes.STRING,
      allowNull: false

    }
  })
  return UserWatchedVid
}