const {response} =  require('express');
const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res = response) =>{
    // const {name, email, contraseña }= req.body;
    
   
 const usuario = new Usuario( req.body);

   await usuario.save();

    res.status(201).json({
        ok:true,
        msg:'registro',
       
    })
}

const loginUsuario =(req, res= response) =>{

    const { email, contraseña }= (req.body)
    
    
    res.json({
        ok:true,
        msg: 'login',
        email, 
        contraseña
    })
}


const revalidarToken = (req, res = response) =>{
    res.json({
        ok:true,
        msg:'renew'
    })
}
module.exports ={crearUsuario, loginUsuario, revalidarToken}