const mongoose = require('mongoose');

const ApartmentSchema = new mongoose.Schema({
    
    apartId: {
        type: String,
        required: true,
        unique: true
    },
    temp: {
        type: String,
        required: true
    },
    bright: {
        type: String
       
    },
    humidity: {
        type: String
    },
});
module.exports = Apartment = mongoose.model('apartment', ApartmentSchema);