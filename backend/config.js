require('dotenv').config();

module.exports = {
    port: process.env.port,
    database: process.env.database || 'mongodb+srv://student:student@cluster0.dsesucb.mongodb.net/zaliczenie?retryWrites=true&w=majority'
}