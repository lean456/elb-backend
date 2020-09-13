var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usuarioSchema = new Schema({
    email:{ type:String, required:[true, 'el correo es necesario'] },
    password: { type: String, required: [true, 'el password es necesario']}
})

//Funcion que no muestra el password cuando se llama un usuario

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

module.exports = mongoose.model('Usuario', usuarioSchema)