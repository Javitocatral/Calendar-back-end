const { Schema, model} =require('mongoose');

const UsuarioSchema = new Schema ({

    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require:true,
        unique: true
    },
    contraseña:{
        type:String,
        require: true
    }

});
module.exports = model('Usuario',UsuarioSchema)