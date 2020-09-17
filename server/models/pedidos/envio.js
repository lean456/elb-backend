var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let envioValido = {
    values: ['RETIRO', 'DELIVERY'],
    message: '{VALUE} no es un envio valido.'
}

let envioSchema = new Schema ({
    tipo: {type:String, default:'DELIVERY', enum:envioValido}
})

module.exports = mongoose.model('Envio', envioSchema)