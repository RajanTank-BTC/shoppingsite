
const userController = require('../controller/user')
const categoiresController = require('../controller/categories')
const itemController = require('../controller/item')
const upload = require('../config/multer-file')

module.exports = (app) => {
  app.post('/register', userController.register)
  app.post('/login', userController.login)
  app.post('/add-categoires', categoiresController.addCategories)
  app.get('/categories-list', categoiresController.categoriesList)
  app.post('/add-item', upload.single("fileName"), itemController.addItem)
}