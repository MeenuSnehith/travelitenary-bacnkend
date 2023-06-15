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
        where:{ userID: req.body.userID, status: "joined" }
      })
      console.log("Found tripsJ")
      res.send(tripsJ)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get joined trips'
      })
    }
  },
  async getJoinedTripUsers (req, res) {
      try {
      const tripsJ = await JoinedTrips.findAll({
        where:{ tripID: req.params.id, status: "joined" }
      })
      console.log("Found tripsJ")
      res.send(tripsJ)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get joined trips'
      })
    }
  },
  async getRequestedTrips (req, res) {
    try {
    const tripsJ = await JoinedTrips.findAll({
      where:{ status: "requested" }
    })
    console.log("Found requested tripsJ")
    res.send(tripsJ)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get requested trips'
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
        console.log("Found tripsJ: "+ tripsJ.status)
        res.send({joined:tripsJ.status})
      }
      else{
        res.send({joined:""})
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get joined trips'
      })
    }
  },
  async updateJoinedTrips (req, res) {
    console.log(req.body)
    console.log(req.params.id)
    try {
      const jt = await JoinedTrips.update({
        status: req.body.status
      } ,{
        where:{ id: req.params.id }
      })
      console.log("Updated JoinedTrips: " + jt)
      res.send({status: "Success", updatedJoinedTrips : jt})
    } catch (err) {
      res.status(500).send({
        error: 'An error while trying to update JoinedTrips: ' + err
      })
    }
  }
}
