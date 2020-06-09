const mongoose = require('mongoose');
const HumiditySchema = new mongoose.Schema({
    humidity: {
        type: Number,
        required: true
    },
    date: {
        type: String
    }
})
module.exports = Humidity = mongoose.model('humidity', HumiditySchema)