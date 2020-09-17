var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let pagosValidos = {
    values: ['DEBITO', 'CREDITO', 'EFECTIVO'],
    message: '{VALUE} no es un pago valido.'
}


var formaPagoSchema = new Schema({
    tipo:{ type:String, default: 'EFECTIVO', enum: pagosValidos}
})


module.exports = mongoose.model('Pagos', formaPagoSchema)