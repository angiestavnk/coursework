//Singleton
const mongoose = require('mongoose');
const config = require ('config');
var dbConnection = function () {

    let db = null;

     function dbConnect() {
        try {
            let uri = config.get('mongoURI');
            db =  mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            return db;
        } catch (e) {
            return e;
        }
    }

    function get() {
        try {
            if (db != null) {
                console.log(`db connection is already alive`);
                return db;
            } else {
                console.log(`getting new db connection`);
                db = dbConnect();
                return db; 
            }
        } catch (e) {
            return e;
        }
    }

    return {
        get: get
    }
}
module.exports = dbConnection();