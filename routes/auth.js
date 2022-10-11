const {Router}= require('express');
const router = Router();
const { check } =require('express-validator')
const{crearUsuario, revalidarToken, loginUsuario } = require('../comtroles/auth');
const { validarCampos } = require('../middlewares/validar-campos');


router.post('/new',
 [
    check('name', 'El  nombre es obligatorio').not().isEmpty(),
    check('email', 'El  email es obligatorio').isEmail(),
    check('contraseña', 'la constraseña debe de ser de 6 caracteres').isLength({min:6}),
    validarCampos
 ],
 crearUsuario) 

router.post('/',
[
    check('email', 'El  email es obligatorio').isEmail(),
    check('contraseña', 'la constraseña debe de ser de 6 caracteres').isLength({min:6}),
    validarCampos
],
loginUsuario );

router.get('/renew',revalidarToken);

    module.exports = router;