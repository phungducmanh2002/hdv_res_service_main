const DBConfig = require("../../../config/db.config");
const SQLZConfig = require("../../../config/sequelize.config");
const FileHelper = require("../../../helper/file.helper");
const AVTEtt = require("./avatar.ett");
const HotelIMGEtt = require("./hotel.img.ett");
const IMGEtt = require("./image.ett");

IMGEtt.hasOne(AVTEtt, { foreignKey: "idImage" });
AVTEtt.belongsTo(IMGEtt, { foreignKey: "idImage" });

IMGEtt.hasOne(HotelIMGEtt, { foreignKey: "idImage" });
HotelIMGEtt.belongsTo(IMGEtt, { foreignKey: "idImage" });

const DB_GEN = FileHelper.getEnv("DB_GEN");
class IDXEtt {
  static async do() {
    if (DB_GEN == 1) {
      console.log("create table ...");
      await SQLZConfig.SQLZInstance.sync({ force: true });
      console.log("create table finish!");
    }
  }
}

module.exports = IDXEtt;
