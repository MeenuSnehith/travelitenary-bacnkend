const {Location} = require('../models')

module.exports = {
  async addLocation (req, res) {
    try {
      console.log(req.body) 
      const location = await Location.create(req.body)
      res.send(location.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'location already exist.'
      })
    }
  },
  async getlocations (req, res) {
    try {
      const locations = await Location.findAll({
        Limit: 30
      })
      console.log("Found Locations: " + locations)
      res.send(locations)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get Locations'
      })
    }
  },
  async deleteLocation (req, res) {
    try {
      const location = await Location.destroy({
        where: { id: req.body.id}
      })
      console.log("Deleted location")
      res.send({status: "Success"})
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get TripImages'
      })
    }
  }
}
