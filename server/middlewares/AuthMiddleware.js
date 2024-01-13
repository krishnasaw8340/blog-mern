const User = require("../models/UserModels.js")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken");
dotenv.config();


module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  // console.log("Token from cookie:", token);
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.SECRET_TOKEN, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        try {
          const user = await User.findById(data.id);
          if (user) return res.json({ status: true, user: user.username });
          else return res.json({ status: false });
        } catch (error) {
          console.error("Error parsing JSON data:", error);
          return res.status(400).json({ error: "Invalid token data" });
        }
      }
    });
  }  