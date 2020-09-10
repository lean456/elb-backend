const express = require('express');

const Persona = require('../models/persona');

const app = express();



app.get('/persona', (req, res) => {
    Persona.find({})
            .exec((err, personas) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    })   
                }
                Persona.countDocuments({}, (err, cantidad) => {
                    res.json({
                        ok: true,
                        personas,
                        cantidad
                    })
                })
            });
})

app.post('/persona',(req, res) => {
    let body = req.body;

    let persona = new Persona({
        nombre: body.nombre,
        email: body.email
    });
    persona.save( (err, personaDB) => {
        if(err) {
            return res.status(400).json({
                ok:false,
                message: 'no se guardo persona',
                err
            })
        }
    })
})





module.exports = app;