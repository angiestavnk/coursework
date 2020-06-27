const mongoose = require('mongoose');
const BrightnessSchema = new mongoose.Schema({
    brightness: {
        type: Number,
        required: true
    },
    date: {
        type: String
    }
})
module.exports = Brightness = mongoose.model('brightness', BrightnessSchema)