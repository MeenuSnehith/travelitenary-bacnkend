const {Hotel} = require('../models')

module.exports = {
  async addHotel (req, res) {
    try {
      console.log(req.body)
      const hotel = await Hotel.create(req.body)
      res.send(hotel.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'hotel already exist.'
      })
    }
  },
  async getHotels (req, res) {
    try {
      const hotel = await Hotel.findAll({
        Limit:30
      })
      console.log("Found hotel")
      res.send(hotel)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get hotel'
      })
    }
  },
  async deleteHotel (req, res) {
    try {
      const hotel = await Hotel.destroy({
        where: { id: req.body.id}
      })
      console.log("Deleted hotel")
      res.send({status: "Success"})
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get hotel'
      })
    }
  }
}
