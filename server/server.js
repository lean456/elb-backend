

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser');
var cors = require('cors')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())



app.use(require('./routes/index'));

mongoose.connect('mongodb://localhost:27017/elb',{useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}, (error, respuesta) => {

    if ( error ) throw error;

    console.log('Base de datos online');
});


app.listen(3000, () => {
    console.log('Escuchando puerto:' , 3000);
})