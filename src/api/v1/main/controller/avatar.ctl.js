const RES = require("../payload/RES");
const AvatarSV = require("../service/avatar.sv");
const ImageSV = require("../service/img.sv");

class AvatarCTL {
  static updateAvatar = [
    async (req, res, next) => {
      try {
        const idUser = parseInt(req.params.idUser);
        const imageBuffer = req.file.buffer;
        const image = await ImageSV.createImage(imageBuffer);
        const avt = await AvatarSV.updateAvatar(idUser, image.id);
        res.json(RES.Created.setData({ id: image.id }));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getAvatar = [
    async (req, res, next) => {
      try {
        const idUser = parseInt(req.params.idUser);
        const type = req.query.type;
        const image = await AvatarSV.getImage(idUser);
        if (!image) {
          throw RES.NotFound.setMessage("user avatar not found");
        }
        if (type == 0) {
          res.json(RES.Oke.setData({ id: image.id }));
        } else {
          res.header("Content-Type", "image/png");
          res.send(image.data);
          res.end();
        }
      } catch (error) {
        next(error);
      }
    },
  ];
}

module.exports = AvatarCTL;
