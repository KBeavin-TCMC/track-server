//#region Imports
require('./models/User');
const dotenv = require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
//#endregion

//#region App
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
//#endregion

//#region Mongo
mongoose.connect(dotenv.parsed.DB_PATH, {
    useNewUrlParser: true, 
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});
//#endregion

//#region Endpoints
app.get('/', (req, res) => {
    res.send('hithere');
});
//#endregion

//#region Start Server
app.listen(3000, () => {
    console.log('Listening on Port 3000');
});
//#endregion