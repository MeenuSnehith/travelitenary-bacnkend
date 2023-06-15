const {JoinedTrips} = require('../models')

module.exports = {
  async addJoinedTrip (req, res) {
    try {
      console.log(req.body)
      const tripJ = await JoinedTrips.create(req.body)
      res.send(tripJ.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'Trip already Joined.'
      })
    }
  },
  async getJoinedTrips (req, res) {
      console.log("get tripsJ: " + req.body)
      try {
      const tripsJ = await JoinedTrips.findAll({
        where:{ userID: req.body.userID }
      })
      console.log("Found tripsJ")
      res.send(tripsJ)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get joined trips'
      })
    }
  },
  async checkIsJoinedTrips (req, res) {
      console.log("get tripsJ: " + req.body)
      try {
      const tripsJ = await JoinedTrips.findOne({
        where:{ userID: req.body.userID, tripID: req.body.tripID }
      })
      if(tripsJ){
        console.log("Found tripsJ")
        res.send({joined:true})
      }
      else{
        res.send({joined:false})
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get joined trips'
      })
    }
  }
}
