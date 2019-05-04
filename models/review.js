module.exports = function(sequelize, DataTypes){
  var Review = sequelize.define("Review", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len:[3]
      }
    }
  })
  return Review
}