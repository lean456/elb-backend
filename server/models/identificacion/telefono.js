var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var telefonoSchema = new Schema({
    numero: { type: Number, required:[true, 'El telefono es requerido'] },
    persona: {type: Schema.Types.ObjectId, ref: 'Persona'}
})


module.exports = mongoose.model('Telefono', telefonoSchema);