const { Router } = require("express");
const RES = require("../payload/RES");
const EXMDW = require("../../middleware/ex.mdw");
const HotelIMGRouter = require("./hotel.img.routes");
const AVTRouter = require("./avatar.routes");
const ImageRouter = require("./image.routes");
const router = Router();

router.use("/hotels", HotelIMGRouter.router);
router.use("/avatar", AVTRouter.router);
router.use("/images", ImageRouter.router);
router.use(EXMDW.handleErr);

class IDXRouter {
  static router = router;
}

module.exports = IDXRouter;
