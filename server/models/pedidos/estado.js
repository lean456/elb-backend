var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let estadosValidos = {
    values: ['RECIBIDO','EN_PREPARACION','CAMINO','LISTO'],
    message:'{VALUE} no es un estado valido.'
}


var estadoSchema = new Schema({
    tipo: {type: String, default:'RECIBIDO', enum: estadosValidos}
})

module.exports = mongoose.model('Estado', estadoSchema)