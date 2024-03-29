const cloudinary = require("cloudinary");
const fs = require("fs");
const User = require("../models/User");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  uploadImage: async (req, res) => {
    const file = req.files.file;
    try {
      console.log(req.user._id);
      const user = await User.findById(req.user._id);
      if (!user) {
        removeTmp(file.tempFilePath);
        return res.status(400).json("El usuario no existe");
      }
      const { folder } = req.body;
      if (folder !== "users" && user.role === "user") {
        removeTmp(file.tempFilePath);
        return res
          .status(403)
          .json({ error: "No puede acceder a este contenido" });
      }
      if (!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({
          error: "No ha cargado ningun archivo",
        });

      if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({
          error:
            "El tamaño de la imagen es demaciado grande, solo se admiten del tamaño de 1mb",
        });
      }
      if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
        removeTmp(file.tempFilePath);
        return res
          .status(400)
          .json({ error: "El formato de la imagen es incorrecto" });
      }

      cloudinary.v2.uploader.upload(
        file.tempFilePath,
        { folder },
        async (err, { public_id, secure_url }) => {
          if (err) throw err;
          removeTmp(file.tempFilePath);
          return res.json({ public_id, url: secure_url });
        }
      );
    } catch (error) {
      removeTmp(file.tempFilePath);
      return res.status(404).json({ error: error.message });
    }
  },
  deleteImage: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      if (!user) return res.status(400).json("El usuario no existe");
      const { public_id } = req.body;
      if (!public_id)
        return res.status(400).json({ error: "No ha seleccionado una imagen" });
      if (public_id.indexOf("users/") && user.role === "user")
        return res
          .status(403)
          .json({ error: "No puede acceder a este contenido" });
      cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
        if (err) throw err;
        return res.json({ message: "Imagen eliminada" });
      });
    } catch (error) {
      return res.status(404).json({ error });
    }
  },
};
