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
      const loc = await Location.destroy({
        where: { id: req.params.id}
      })
      console.log("Deleted location: " + loc)
      res.send({status: "Success", deletedLocations : loc})
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to Delete Location: ' + err
      })
    }
  },
  async updateLocation (req, res) {
    console.log(req.body)
    try {
      const loc = await Location.update({
        Address: req.body.Address,
        Description: req.body.Description,
        ImageURL: req.body.ImageURL
      } ,{
        where:{ id: req.params.id }
      })
      console.log("Updated location: " + loc)
      res.send({status: "Success", updatedLocations : loc})
    } catch (err) {
      res.status(500).send({
        error: 'An error while trying to update Location: ' + err
      })
    }
  }
}
