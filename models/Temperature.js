const mongoose = require('mongoose');
const TemperatureSchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true
    },
    date: {
        type: String
    }
})
module.exports = Temperature = mongoose.model('temperature', TemperatureSchema)