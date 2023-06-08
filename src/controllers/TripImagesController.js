const {TripImages} = require('../models')

module.exports = {
  async addTripImages (req, res) {
    try {
      console.log(req.body)
      const tripImages = await TripImages.create(req.body)
      res.send(tripImages.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'TripImages already exist.'
      })
    }
  },
  async getTripImages (req, res) {
    try {
      const tripImages = await TripImages.findAll({
        limit: 30,
        where: { tripID: req.body.tripID }
      })
      console.log("Found TripImages")
      res.send(tripImages)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get TripImages'
      })
    }
  },
  async deleteTripImages (req, res) {
    try {
      const tripImages = await TripImages.destroy({
        where: { id: req.body.id}
      })
      console.log("Deleted TripImages")
      res.send({status: "Success"})
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get TripImages'
      })
    }
  }
}
