const {Signup,Login} = require("../controller/AuthController.js")
const {userVerification} = require("../middlewares/AuthMiddleware.js")
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

module.exports = router;