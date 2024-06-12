const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");

class HotelIMGEtt extends Model {}

HotelIMGEtt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idHotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idImage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isAvatar: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "hotel_image",
    indexes: [
      {
        unique: true,
        fields: ["idHotel", "idImage"],
      },
    ],    
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = HotelIMGEtt;
