const { Router } = require("express");
const HotelCTL = require("../controller/hotel.img.ctl");
const RequestHelper = require("../../helper/request.hepler");
const router = Router();

router.post(
  "/:idHotel/images",
  RequestHelper.uploadFile.single("image"),
  HotelCTL.addImage
);
router.get("/:idHotel/images", HotelCTL.getImagesId);
router.get("/:idHotel/avatar", HotelCTL.getHotelAvatar);

router.delete("/:idHotel/images/:idImage", HotelCTL.deleteImage);
router.put("/:idHotel/images/:idImage/set-avatar", HotelCTL.setAvatar);

class HotelIMGRouter {
  static router = router;
}

module.exports = HotelIMGRouter;
