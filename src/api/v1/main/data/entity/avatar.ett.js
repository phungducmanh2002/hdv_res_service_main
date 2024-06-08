const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");
const DataHelper = require("../../../helper/data.helper");

class AVTEtt extends Model {}

AVTEtt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idImage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "user_avatar",
    indexes: [
      {
        unique: true,
        fields: ["idUser"],
      },
      {
        unique: true,
        fields: ["idImage"],
      },
    ],
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = AVTEtt;
