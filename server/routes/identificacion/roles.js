const express = require('express');

const Roles = require('../../models/identificacion/roles');

const app = express();

app.get('/roles',(req,res) => {
    
    Roles.find({})
    .exec((err, roles) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })   
        }
        Roles.countDocuments({}, (err, cantidad) => {
            res.json({
                ok: true,
                roles,
                cantidad
            })
        })
    });


}) //fin get

app.post('/roles',(req,res) => {

    let body = req.body;

    let rol = new Roles({tipo: body.tipo})

    rol.save((err,rolesDB) => {
        if(err) {
            return res.status(400).json({
                ok:false,
                message: 'no se guardo el rol',
                err
            })
        }

        res.json({
            rolesDB
        })
    })

}) //fin post


app.put('/roles/:id',(req,res) => {
    return res.status(501).json({
        ok:false,
        message:'No es necesario editar los roles.'
    })
}) //fin put


app.delete('/roles/:id',(req,res) => {

    return res.status(501).json({
        ok:false,
        message:'No es necesario borrar los roles.'
    })

}) //fin delete


module.exports = app;