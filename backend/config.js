require('dotenv').config();

module.exports = {
    port: process.env.port,
    database: process.env.database || 'informacja poufna'
}
