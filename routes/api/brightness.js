const Brightness = require('../../models/Brightness')
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
        
        const { brightness, date } = req.body;
        try {
            bright = new Brightness({
                brightness,
                date
            });
            await bright.save();
            res.status(200).send('Success');
        } catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
})
router.get('/',  async (req, res) => {
    Brightness.find({}, function(err, brightness){
        res.send(JSON.parse(JSON.stringify(brightness)))
    })
    
 });
module.exports = router;