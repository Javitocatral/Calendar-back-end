const express = require('express');
require('dotenv').config();

const { dbConnection} = require('./data-base/config')

const app = express();
// rutas

dbConnection()
app.use(express.static('Public'))

app.use(express.json());
    
app.use('/api/auth', require('./routes/auth'));



app.listen(process.env.PORT,() => {

    console.log(`Servidor corriendo en el puerto ${process.env.PORT} `);
});