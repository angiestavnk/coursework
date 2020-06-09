const Humidity = require('../../models/Humidity')
const express = require('express');
const router = express.Router();
const config = require('config');
// const { check, validationResult } = require('express-validator');
router.post('/',
async (req, res) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({ errors: errors.array() })
    // }
        
        const { humidity, date } = req.body;
        try {
            hum = new Humidity({
                humidity,
                date
            });
            await hum.save();
            res.status(200).send('Success');
        } catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
})
router.get('/',  async (req, res) => {
    Humidity.find({}, function(err, humidity){
        res.send(JSON.parse(JSON.stringify(humidity)))
    })
    
 });
module.exports = router;