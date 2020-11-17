const cloudinary = require('cloudinary');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    })
}

module.exports = {
    uploadImage: (req, res) => {
        try {
            const { folder } = req.body;
            if (folder !== 'users' && req.user.rol === 'user') return res.json({ error: 'No puede acceder a este contenido' });
            if (!req.files || Object.keys(req.files).length === 0) return res.json({ error: 'No hay archivos para cargar' });

            const file = req.files.file;
            if (file.size > 1024 * 1024) {
                removeTmp(file.tempFilePath);
                return res.json({ error: 'Tamaño demaciado grande' });
            }
            if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
                removeTmp(file.tempFilePath);
                return res.json({ error: 'El formato del archivo es incorrecto' })
            }

            cloudinary.v2.uploader.upload(
                file.tempFilePath, { folder },
                async (err, { public_id, secure_url }) => {
                    if (err) throw err;
                    removeTmp(file.tempFilePath);
                    return res.json({ public_id, url: secure_url });
                });
        } catch (error) {
            return res.json({ error })
        }
    },
    deleteImage: (req, res) => {
        try {
            const { public_id } = req.body;
            if (!public_id) return res.json({ error: 'No ha seleccionado una imagen' });
            if (public_id.indexOf('users/') && req.user.rol === 'user') return res.json({ error: 'No puede acceder a este contenido' });
            cloudinary.v2.uploader.destroy(
                public_id,
                async (err, result) => {
                    if (err) throw err;
                    return res.json({ message: 'Imagen eliminada' })
                });
        } catch (error) {
            return res.json({ error })
        }
    }
}