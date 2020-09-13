var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var domicilioSchema = new Schema({
    direccion: { type: String, required: [true, 'La direccion es necesaria.']},
    numero: {type: Number, required: [true, 'El numero es necesario.']},
    localidad: {type: String, required: [true, 'La localidad es necesaria.']},
    departamento: {type: String, required: [true, 'Departamento es necesario.']},
    persona: {type: Schema.Types.ObjectId, ref: 'Persona'}
});

module.exports = mongoose.model('Domicilio', domicilioSchema);