const Temperature = require('../../models/Temperature')
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
        
        const { temperature, date } = req.body;
        try {
            temp = new Temperature({
                temperature,
                date
            });
            await temp.save();
            res.status(200).send('Success');
        } catch(err){
            console.error(err.message);
            res.status(500).send(req);
        }
})
router.get('/',  async (req, res) => {
    Temperature.find({}, function(err, temperature){
        res.send(JSON.parse(JSON.stringify(temperature)))
   })
   
});
module.exports = router;