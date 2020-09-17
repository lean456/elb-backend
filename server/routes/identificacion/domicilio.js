const express = require('express');

const Domicilio = require('../../models/identificacion/domicilio');

const _ = require('underscore');
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
}) //fin get

app.post('/domicilio', (req, res) => {

    let body = req.body;

    let domicilio = new Domicilio({
        direccion: body.direccion,
        numero: body.numero,
        localidad: body.localidad,
        departamento: body.departamento,
        persona: body.persona
    })

    domicilio.save((err, domicilioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })   
        }
        res.json({
            domicilioDB
        })
    })
}) //fin


app.put('/domicilio/:id', (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ['direccion', 'numero', 'localidad', 'departamento']);

    Domicilio.findByIdAndUpdate(id, body, {new: true, runValidators: false, useFindAndModify:false},(err, domicilioDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            domicilio: domicilioDB
            
           })
    })
}) //fin


app.delete('/domicilio/:id', (req, res) => {
    let id = req.params.id;

    Domicilio.findByIdAndDelete(id, {useFindAndModify:false}, (err, domicilioDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            message: 'Domicilio Borrado.',
            domicilio: domicilioDB
            
           })
    })

}) //fin




module.exports = app;