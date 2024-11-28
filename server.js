var express = require('express'); // Importar express
var path = require('path'); // Importar módulo path para manejar rutas
var app = express();

// Ruta para servir el archivo HTML
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/*
// Iniciar el servidor en el puerto 8080
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Servidor escuchando en http://%s:%s", host, port);
});
*/

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
