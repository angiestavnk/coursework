const express = require('express');
const dbConnection = require('./config/db');
const app = express();

//Connect Database

dbConnection.get();

//Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('API Running'));

var path = require('path');
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/apartment', require('./routes/api/apartment'));
app.use('/api/temperature', require('./routes/api/temperature'));
app.use('/api/humidity', require('./routes/api/humidity'))
app.use('/api/brightness', require('./routes/api/brightness'))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



