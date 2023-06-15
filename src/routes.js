const AuthenticationController = require('./controllers/AuthenticationController')
const TripController = require('./controllers/TripController')
const ItineraryController = require('./controllers/ItineraryController')
const TripImagesController = require('./controllers/TripImagesController')
const JoinedTripController = require('./controllers/JoinedTripController')
const LocationController = require('./controllers/LocationController')
const HotelController = require('./controllers/HotelController')
const NotificationController = require('./controllers/NotificationController')

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
    app.delete('/deletetripdetails/:id',
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
    app.get('/getjoinedtripusers/:id',
        JoinedTripController.getJoinedTripUsers)
    app.post('/checkisjoinedtrips',
        JoinedTripController.checkIsJoinedTrips)
    app.put('/updatejoinedtrip/:id',
        JoinedTripController.updateJoinedTrips)
    app.get('/getRequestedtrip',
        JoinedTripController.getRequestedTrips)

    app.post('/addLocation',
        LocationController.addLocation)
    app.get('/getlocations',
        LocationController.getlocations)
    app.delete('/deletelocation/:id',
        LocationController.deleteLocation)
    app.put('/updatelocation/:id',
        LocationController.updateLocation)

    app.post('/addHotel',
        HotelController.addHotel)
    app.get('/getHotels',
        HotelController.getHotels)
    app.delete('/deletehotel/:id',
        HotelController.deleteHotel)
    app.put('/updatehotel/:id',
        HotelController.updateHotel)

    app.post('/addnotification',
        NotificationController.addNotification)
    app.get('/getnotifications/:id',
        NotificationController.getNotifications)
}
