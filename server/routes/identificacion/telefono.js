const express = require('express');

const Telefono = require('../../models/identificacion/telefono');

const _ = require('underscore');

const app = express();




app.get('/telefono', (req,res) => {
    Telefono.find({})
            .exec((err,telefonos) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    })   
                }
                Telefono.countDocuments({}, (err, cantidad) => {
                    res.json({
                        ok: true,
                        telefonos,
                        cantidad
                    })
                })
            })
}) //fin get

app.post('/telefono', (req, res) => {
    let body = req.body;

    let telefono = new Telefono({
        numero: body,numero,
        persona: body.persona
    });

    telefono.save((err, telefonoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })   
        }

        res.json({
            ok:true,
            telefonoDB
        })
    })
}) //fin post


app.put('/telefono/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['telefono']);

    Telefono.findByIdAndUpdate(id, body, {new: true, runValidators: true, useFindAndModify: false}, (err, telefonoDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            telefono: telefonoDB
            
           })
        })
}) // fin put


app.delete('/telefono/:id', (req,res) => {
    let id = req.params.id;

    Telefono.findOneAndDelete(id, {useFindAndModify: false}, (err, telefonoDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            message: 'Telefono borrada.'            
           })

    })
})


module.exports = app;
