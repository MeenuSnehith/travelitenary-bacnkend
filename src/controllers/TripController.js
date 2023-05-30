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
      const trips = await Trip.findAll({
        limit: 20
      })
      console.log("Found trips")
      res.send(trips)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get trips'
      })
    }
  },
  async getJoinedTripsDetails (req, res) {
      console.log("get joined trips")
      try {
      const trips = await Trip.findAll({
        where:{ id :req.body.id }
      })
      console.log("Found trips")
      res.send(trips)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get trips'
      })
    }
  },
  async getTrip (req, res) {
    console.log(req.body)
    try {
      const trips = await Trip.findOne({
        where:{ id: req.body.tripID }
      })
      console.log("Found trip" + trips)
      res.send(trips)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get trip'
      })
    }
  },
  async updateTrip (req, res) {
    console.log(req.body)
    try {
      const trips = await Trip.update({
        tripTitle: req.body.tripTitle,
        location: req.body.location,
        days: req.body.days,
        nights: req.body.nights,
        costperperson: req.body.costperperson,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        description: req.body.description,
        thumbnailURL: req.body.thumbnailURL,
      } ,{
        where:{ id: req.body.id }
      })
      console.log("Updated trip: " + trips)
      res.send(trips)
    } catch (err) {
      res.status(500).send({
        error: 'An error while trying to update trip'
      })
    }
  },
  async deleteTrip (req, res) {
    try {
      const trip = await Trip.destroy({
        where: { id: req.body.id}
      })
      console.log("Deleted Trip")
      res.send({status: "Success"})
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete Trip'
      })
    }
  }
}
