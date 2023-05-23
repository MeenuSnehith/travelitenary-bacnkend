const AuthenticationController = require('./controllers/AuthenticationController')
const TripController = require('./controllers/TripController')

module.exports=(app) => {
    app.post('/register', 
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)
    app.post('/addtrip',
        TripController.add)
}
