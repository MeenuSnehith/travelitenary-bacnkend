const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      console.log(req.body)
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Account with this username already exist.'
      })
    }
  },
  async login (req, res) {
    try {
      const {username, password} = req.body
      const user = await User.findOne({
        where: {
          username: username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordVaild = password === user.password
      if (!isPasswordVaild) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      res.send(user.toJSON())
      
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
