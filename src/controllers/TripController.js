const {Trip} = require('../models')

module.exports = {
  async add (req, res) {
    try {
      console.log(req.body)
      const trip = await Trip.create(req.body)
      res.send(trip.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Trip already exist.'
      })
    }
  },
  async getTrips (req, res) {
    try {
      const trip = await Trip.findOne({
        where: {
          username: username
        }
      })

      res.send(trip.toJSON())
      
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get trips'
      })
    }
  }
}
