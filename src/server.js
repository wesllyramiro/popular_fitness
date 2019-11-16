const socket = require('socket.io')
const express = require('express')
const routes = require('./routes')
const http = require('http')
const cors = require('cors');
require('./database')

const app = express()
const server = http.Server(app)
const io = socket(server)

const connectedUsers = {}
io.on('connection',socket => {
  const { usuario_id , categoria } = socket.handshake.query
  
  if(categoria){
    socket.join(categoria)
  }

  connectedUsers[usuario_id] = socket.id
})

app.use((req,res,next) =>{
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333);
