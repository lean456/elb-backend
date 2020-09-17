var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedidoSchema = new Schema({
    fecha_inicio: {type: Date, required: true},
    fecha_fin: {type: Date, required: true},
    envio: {type: Schema.Types.String, ref:'Envio'},
    estado: {type: Schema.Types.String, ref:'Estado'},
    usuario: {type: Schema.Types.ObjectId, ref:'Usuario'}
})

module.exports = mongoose.model('Pedido', pedidoSchema)