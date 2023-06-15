const {Notifications} = require('../models')

module.exports = {
  async addNotification (req, res) {
    try {
      console.log(req.body)
      const notify = await Notifications.create(req.body)
      res.send(notify.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'notify already Joined.'
      })
    }
  },
  async getNotifications (req, res) {
      try {
      const notify = await Notifications.findAll({
        where:{ userID: req.params.id },
        order: [
          ['createdAt', 'DESC']
        ]
      })
      console.log("Found notify")
      res.send(notify)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get notify'
      })
    }
  }
}
