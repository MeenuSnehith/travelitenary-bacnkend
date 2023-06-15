const {Itinerary} = require('../models')

module.exports = {
  async addItinerary (req, res) {
    try {
      console.log(req.body)
      const itinerarys = await Itinerary.create(req.body).then((result) => {
        console.log("Create iti: " + result.toJSON().id);
        res.send(result.toJSON())
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Itinerary already exist.'
      })
    }
  },
  async getItinerarys (req, res) {
    try {
      const itinerarys = await Itinerary.findAll({
        limit: 30,
        where: { tripID: req.body.tripID },
        order: [
          ['day', 'ASC']
        ]
      })
      console.log("Found Itinerarys")
      res.send(itinerarys)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get Itinerarys'
      })
    }
  },
  async deleteItinerarys (req, res) {
    try {
      const itinerarys = await Itinerary.destroy({
        where: { id: req.body.id}
      })
      console.log("Deleted Itinerarys")
      res.send({status: "Success"})
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get Itinerarys'
      })
    }
  }
}
