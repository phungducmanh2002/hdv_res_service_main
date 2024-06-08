const { Router } = require("express");
const AvatarCTL = require("../controller/avatar.ctl");
const RequestHelper = require("../../helper/request.hepler");
const router = Router();

router.post(
  "/:idUser/images",
  RequestHelper.uploadFile.single("image"),
  AvatarCTL.updateAvatar
);
router.get("/:idUser/images", AvatarCTL.getAvatar);

class AVTRouter {
  static router = router;
}

module.exports = AVTRouter;
