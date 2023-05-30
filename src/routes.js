const AuthenticationController = require('./controllers/AuthenticationController')
const TripController = require('./controllers/TripController')
const ItineraryController = require('./controllers/ItineraryController')
const TripImagesController = require('./controllers/TripImagesController')
const JoinedTripController = require('./controllers/JoinedTripController')

module.exports=(app) => {
    app.post('/register', 
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)
        
    app.post('/addtrip',
        TripController.add)
    app.get('/gettrips',
        TripController.getTrips)
    app.post('/gettrip',
        TripController.getTrip)
    app.post('/updatetrip',
        TripController.updateTrip)
    app.post('/getjoinedtripdetails',
        TripController.getJoinedTripsDetails)
    app.post('/deletetripdetails',
        TripController.deleteTrip)

    app.post('/addItinerary',
        ItineraryController.addItinerary)
    app.post('/getItinerarys',
        ItineraryController.getItinerarys)
    app.post('/deleteItinerarys',
        ItineraryController.deleteItinerarys)

    app.post('/addTripImages',
        TripImagesController.addTripImages)
    app.post('/getTripImages',
        TripImagesController.getTripImages)
    app.post('/deleteTripImages',
        TripImagesController.deleteTripImages)

    app.post('/addjoinedtrip',
        JoinedTripController.addJoinedTrip)
    app.post('/getjoinedtrips',
        JoinedTripController.getJoinedTrips)
    app.post('/checkisjoinedtrips',
        JoinedTripController.checkIsJoinedTrips)
}
