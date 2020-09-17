const express = require('express');

const Usuario = require('../../models/identificacion/usuario');

const bcrypt = require('bcrypt');

const _ = require('underscore')

const app = express();



app.get('usuario',(req,res) => {

    Usuario.find({})
            .exec((err,usuarios) => {
                if( err){
                    return res.status(400).json({
                         ok: false,
                         err
                     });
                 }
         
                 Usuario.countDocuments({ estado: true }, (err, cantidad) => {
                     
                     res.json({
                         ok: true,
                         usuarios,
                         cantidad
                 })
                 })
            })
}) //fin get

app.post('usuario',(req,res) => {

    let body = req.body;

    let usuario = new Usuario({
        email: body.email,
        password: bcrypt.hashSync(bod.password, 10),
        rol: body.rol
    });

    usuario.save((err, usuarioDB) => {
        if(err) {
            return res.status(400).json({
                ok:false,
                message: 'no se guardo persona',
                err
            })
        }

        res.json({
            usuarioDB
        })
    })

}) //fin post

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['email', 'rol' ]) ;

    Usuario.findByIdAndUpdate(id,body,{new: true,runValidators:true}, (err, usuarioDB) => {
        if( err){
            return res.status(400).json({
                 ok: false,
                 err
             });
         }
         
         res.json({
             ok:true,
             usuario: usuarioDB
             
            })
        })
}) //fin put

app.delete('usuario/:id',(req,res) => {
    let id = req.params.id;

    Persona.findOneAndDelete(id, {useFindAndModify: false}, (err, usuarioDB) => {
        if( err){
            console.log('error');
            return res.status(400).json({
                 ok: false,
                 err
             });
         }

         res.json({
            ok:true,
            message: 'Usuario borrada.'            
           })

    })

}) //fin delete

module.exports = app;
