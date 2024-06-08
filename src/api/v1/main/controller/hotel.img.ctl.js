const RES = require("../payload/RES");
const HotelIMGSV = require("../service/hotel.img.sv");
const ImageSV = require("../service/img.sv");

class HotelCTL {
  static getHotelAvatar = [
    async (req, res, next) => {
      try {
        const idHotel = req.params.idHotel;
        const type = req.query.type;

        const image = await HotelIMGSV.getAvatarImage(idHotel);
        if (!image) {
          throw RES.NotFound.setMessage("not found hotel avatar");
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
  static setAvatar = [
    async (req, res, next) => {
      try {
        const idHotel = req.params.idHotel;
        const idImage = req.params.idImage;
        const result = await HotelIMGSV.setAvatar(idHotel, idImage);
        res.json(RES.Oke.setData(result));
      } catch (error) {
        next(error);
      }
    },
  ];
  static deleteImage = [
    async (req, res, next) => {
      try {
        const idHotel = req.params.idHotel;
        const idImage = req.params.idImage;
        const result = await HotelIMGSV.deleteHotelImage(idHotel, idImage);
        res.json(RES.Oke.setData(result));
      } catch (error) {
        next(error);
      }
    },
  ];
  static addImage = [
    async (req, res, next) => {
      try {
        const idHotel = req.params.idHotel;
        const imageBuffer = req.file.buffer;
        const image = await ImageSV.createImage(imageBuffer);
        const htimg = await HotelIMGSV.addHotelImage(idHotel, image.id);
        res.json(RES.Created.setData({ id: image.id }));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getImagesId = [
    async (req, res, next) => {
      try {
        const idHotel = req.params.idHotel;
        const imagesId = await HotelIMGSV.getImagesId(idHotel);
        res.json(RES.Oke.setData(imagesId));
      } catch (error) {
        next(error);
      }
    },
  ];
}

module.exports = HotelCTL;
