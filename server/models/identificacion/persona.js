
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es necesario.']
    },
    apellido:{
        type:String,
        required: [true, 'El apellido es necesario.']
    }
});


//nombre final del schema
module.exports = mongoose.model('Persona', personaSchema);