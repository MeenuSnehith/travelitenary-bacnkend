const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'travelProject',
    user: process.env.DB_USER || 'travelProject',
    password: process.env.DB_PASS || 'travelProject',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../travelProject.sqlite')
    }
  }
}