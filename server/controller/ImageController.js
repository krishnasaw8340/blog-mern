const { response } = require("express");

const url = "http://localhost:4000"
module.exports.uploadImage = (req,res) =>{
    if(!req.file)
    {
        return res.status(404).json({msg:"file not found"});
    }
    const Imageurl = `${url}/file/${req.file.filename}`;
    return response.status(200).json(Imageurl)

}