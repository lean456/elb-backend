const express = require('express');

const Domicilio = require('../../models/identificacion/domicilio');

const app = express();



app.get('/domicilio', (req, res) => {
    Domicilio.find({})
            .exec((err, domicilios) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    })   
                }
                Domicilio.countDocuments({}, (err, cantidad) => {
                    res.json({
                        ok: true,
                        domicilios,
                        cantidad
                    })
                })
            });
})




module.exports = app;