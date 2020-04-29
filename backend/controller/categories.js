const Categories = require('../models').Category
const jwt = require('jsonwebtoken')

module.exports = {
  addCategories(req, res) {
    console.log(req)
    console.log(process.env.SECRET)
    jwt.verify(req.headers.authorization, process.env.SECRET, function (err, decoded) {
      if (decoded) {
        Categories.findOne({
          where: {
            name: req.body.name
          }
        })
          .then(cate => {
            console.log(cate)
            if (!cate) {
              Categories
                .create(req.body)
                .then(cate => {
                  res.status(200).send({ message: cate.name + 'Added successfuly' })
                })
                .catch(error => {
                  // console.log(error)
                  res.status(400).send({ error: error })
                })
            }
            else {
              res.status(400).send({ error: 'categories already exist' })
            }
          })
          .catch(error => {
            console.log(error)
            res.status(400).send(error)
          })
      }
      else {
        res.status(400).send({ error: 'You are not authorized' })
      }
    })

  },
  categoriesList(req, res) {
    console.log(process.env.SECRET)
    jwt.verify(req.headers.authorization, process.env.SECRET, function (err, decoded) {
      if (decoded) {
        return Categories.findAll()
          .then(cate => {
            // console.log(cate)
            res.status(200).send({ categories: cate })
          })
          .catch(error => {
            // console.log(error)
            res.status(400).send(error)
          })
      }
      else {
        res.status(400).send({ error: 'You are not authorized' })
      }
    })
  }
}