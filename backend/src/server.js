const express = require('express');
const cors = require('cors');
require('./database')

const routes = require('./routes');

const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, function () {
  console.log('Aplicação rodando na porta 3333!');
});
