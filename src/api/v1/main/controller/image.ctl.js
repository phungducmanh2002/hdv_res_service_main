const RES = require("../payload/RES");
const ImageSV = require("../service/img.sv");

class ImageCTL {
  static getImageById = [
    async (req, res, next) => {
      try {
        const idImage = req.params.idImage;
        const image = await ImageSV.getImageById(idImage);
        if (!image) {
          throw RES.NotFound.setMessage("image not found");
        }
        res.header("Content-Type", "image/png");
        res.send(image.data);
        res.end();
      } catch (error) {
        next(error);
      }
    },
  ];
  static createImage = [
    async (req, res, next) => {
      try {
        const imageBuffer = req.file.buffer;
        const image = await ImageSV.createImage(imageBuffer);
        res.json(RES.Created.setData({ id: image.id }));
      } catch (error) {
        next(error);
      }
    },
  ];
}

module.exports = ImageCTL;
