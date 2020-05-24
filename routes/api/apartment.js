const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Apartment = require('../../models/Apartment');
const config = require('config');

router.post('/', 
// [
//     check('apartId', 'ApartId is required').not().isEmpty(),
//     check('temp', 'Temperature is required').not().isEmpty()
// ],
async (req, res) => {
    const { apartId, temp, bright, humidity } = req.body;
    console.log("????");
    apartment = new Apartment ({
        apartId,
        temp,
        bright,
        humidity
    });
    await apartment.save();
});

module.exports = router;