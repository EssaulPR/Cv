// Nodemon se instala como dependencia aparte
// npm i  nodemon -D   <= de esa forma haces la instalacion para que sea dependencia aparte
// Al igual intalamos express  y ejs, ejs sirve para usar codigo en html
// tambien instalamos morgan, nos ayuda para ver que peticiones nos hace el servidor
// El path no sirve para buscar la ubicacion y verificar en que os estamos

var express = require('express');
var path = require('path');
var servidor = express();

// Settings
// Con set le insertamos el puerto con el que abriremos el local
servidor.set('port', 5000);
servidor.engine('html', require('ejs').renderFile);
servidor.set('view engine', 'ejs');
servidor.set('views', path.join(__dirname, 'views'));
// Middlewares

// Routes

servidor.use(require('./routes/links'));


// Static files
servidor.use(express.static(path.join(__dirname, 'public')))

// Listening the server
// Hacemos que  se abra el servidor con get y port
servidor.listen(servidor.get('port'), ()=>{
    console.log('Servidor  port: ', servidor.get('port'));
});