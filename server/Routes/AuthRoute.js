const {Signup,Login} = require("../controller/AuthController.js")
const {userVerification} = require("../middlewares/AuthMiddleware.js")
// const {uploadImage}  = require("../controller/ImageController.js")
// const upload  = require("../utils/upload.js")
const router = require("express").Router();


router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
// router.post("/file/upload", upload.single("file"),uploadImage)


module.exports = router;