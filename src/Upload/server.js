
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
app.use(express.static('public'))
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './img')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({
    storage
})
app.use(cors());
app.post('./img', upload.single('image'), (req, res) => {
    if (req.file)
        res.json({
            imageUrl: `../img/${req.file.filename}`
        });
    else
        res.status("409").json("No Files to Upload.");
});
const PORT = 3000;
app.listen(PORT);
console.log('api runnging on port: ' + PORT);