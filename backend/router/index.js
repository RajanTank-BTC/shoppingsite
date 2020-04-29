
const userController = require('../controller/user')
const categoiresController = require('../controller/categories')

module.exports = (app) => {
  app.post('/register', userController.register)
  app.post('/login', userController.login)
  app.post('/add-categoires', categoiresController.addCategories)
  app.get('/categories-list', categoiresController.categoriesList)
}