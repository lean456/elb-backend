const express = require('express');

const Persona = require('../../models/identificacion/persona');


const _ = require('underscore');

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
        apellido: body.apellido
    });
    persona.save( (err, personaDB) => {
        if(err) {
            return res.status(400).json({
                ok:false,
                message: 'no se guardo persona',
                persona,
                err
            })
        }

        res.json({
            personaDB
        })
    })
})//fin post



app.put('/persona/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'apellido']);

    Persona.findByIdAndUpdate(id, body, {new: true, runValidators: true, useFindAndModify: false}, (err, personaDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            persona: personaDB
            
           })
       })
    }) // fin put






app.delete('/persona/:id', (req,res) => {
    let id = req.params.id;

    Persona.findOneAndDelete(id, {useFindAndModify: false}, (err, personaDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            message: 'Persona borrada.'            
           })

    })
})


module.exports = app;