const express = require('express');
const mongoose = require('mongoose');
const inputRouter = require('./routes/inputs');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
    console.log('mongo connected');
});

db.on('error', function (error) {
    console.log(`is mongo not running? ${error.message}`);
});

app.use(express.urlencoded({ extended: true }));

app.use(inputRouter);

app.listen(PORT, function () {
    console.log(`express is listening on port: ${PORT}`);
});