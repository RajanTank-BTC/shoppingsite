const Item = require('../models').Item
const jwt = require('jsonwebtoken')

module.exports = {
  addItem(req, res) {
    console.log(req)
    jwt.verify(req.headers.authorization, process.env.SECRET, function (err, decoded) {
      if (decoded) {
        Item.findOne({
          where: {
            name: req.body.name
          }
        })
          .then(i => {
            console.log(i)
            if (!i) {
              const { name, description, price, quantity, fileName } = req.body
              Item
                .create({
                  name,
                  description,
                  price,
                  quantity,
                  fileName: fileName.name
                })
                .then(item => {
                  res.status(200).send({ message: "Item added successfuly" })
                })
                .catch(err => {
                  console.log(err, "err")
                  res.status(400).send({ error: err })
                })
            }
            else {
              res.status(400).send({ error: 'Item already exist' })
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
  }
}