const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
  register(req, res) {
    console.log(req.body)
    let userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        //console.log(user)
        if (!user) {
          User
            .create(userData)
            .then(user => {
              res.status(200).send({ message: user.email + ' Registered' })
            })
            .catch(error => {
              console.log(error)
              res.status(400).send({ error: error })
            })
        }
        else {
          console.log("error")
          res.status(400).send({ error: 'User already exist' })
        }
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  login(req, res) {
    return User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            console.log("secret :", process.env.SECRET)
            let token = jwt.sign(user.dataValues, "123456", {
              expiresIn: 14000
            })
            res.status(200).send({ token: token })
          }
          else {
            res.status(400).send({ error: 'user does not exist' })
          }
        }
      })
      .catch(error => {
        res.status(400).send({ error: error })
      })
  }
}