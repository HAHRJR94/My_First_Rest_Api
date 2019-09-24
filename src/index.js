const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000); //-> En caso que un servicio en la nube defina el número de puerto, que lo tome sino va a correr en el puerto 3000
app.set('json spaces', 2);//-> Para que el documento json se vea ordenado

//Middleware -> funcion que procesa datos antes que lleguen al servidor.
app.use(morgan('dev')); //-> Permite ver por consola lo que esta llegando al servidor.
app.use(express.urlencoded({extended: false})); //-> Entiende los datos que llegan de los input de un formulario(texto )
app.use(express.json()); //-> Permite al servidor recibir formatos json y entenderlos.

//Routes
app.use(require('./routes/index.js'));
app.use('/api/movies/', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})