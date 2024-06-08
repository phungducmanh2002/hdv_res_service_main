const { Router } = require("express");
const ImageCTL = require("../controller/image.ctl");
const RequestHelper = require("../../helper/request.hepler");
const router = Router();

router.get("/:idImage", ImageCTL.getImageById);
router.post("", RequestHelper.uploadFile.single("image"), ImageCTL.createImage);

class ImageRouter {
  static router = router;
}

module.exports = ImageRouter;
