const multer = require('multer')
const { resolve } = require('path')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../upload");
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, `${file.name}_${+new Date()}.jpg`);
  }
});

var upload = multer({ dest: 'upload/' });

module.exports = upload;