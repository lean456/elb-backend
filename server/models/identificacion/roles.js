var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'CAJERO_ROLE', 'COCINERO_ROLE'],
    message: '{VALUE} no es un rol valido'
}


var rolesSchema = new Schema({
    tipo:{ type: String, default: 'USER_ROLE', enum: rolesValidos}
})

module.exports = mongoose.model('Roles', rolesSchema);