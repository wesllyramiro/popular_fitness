const Mensagens = require('../model/Mensagens');
const Usuario = require('../model/Usuario');
const { Op } = require('sequelize');

module.exports = {
  async CriarPergunta(req, res) {
    const { usuario_id, mensagem, categoria } = req.body;
  
    var usuario = await Usuario.findByPk(usuario_id)
    if(!usuario)
        return res.status(400).json({ error : "Usuario não encontrado" })

    let mensagen = await Mensagens.create({ 
      usuario_id:usuario_id,
      mensagem:mensagem,
      categoria:categoria,
      respondido:0
	  });

    req.io.to(categoria).emit('pergunta',mensagem)

    return res.json(mensagen);
  },
  async CriarResposta(req,res){
    const { mensagem_id, resposta, profissional_id } = req.body;
    const { usuario_id } = req.params;

    var mensagem = await Mensagens.findByPk(mensagem_id)

    if(mensagem.respondido === true)
        return res.status(400).json({ error: 'Pergunta já respondida!' });

    await Mensagens.update(
      { respondido:1, resposta:resposta,profissional_id:profissional_id },{
      where:{
        id:mensagem_id
      }
    })
    
    const userSocket = req.connectedUsers[usuario_id]

    if(userSocket)
      req.io.to(userSocket).emit('resposta',resposta)
    
    return res.json(mensagem)
  },
  async BuscarPerguntaPorCategoria(req,res){
    const { categoria } = req.headers;

    const listaDePerguntas = await Mensagens.findAll({
        where:{
            respondido:0,
            categoria:categoria
        }
    })

    return res.json(listaDePerguntas)
  },
  async BuscarResposta(req,res){
    const { usuario_id } = req.params;

    const listaDeResposta = await Mensagens.findAll({
        where:{
            usuario_id:usuario_id,
            resposta:{
              [Op.ne]: null
            }
        }
    })

    return res.json(listaDeResposta)
  },
  async BuscarPerguntasRealizadas(req,res){
    const { usuario_id } = req.params;

    const listaDePerguntas = await Mensagens.findAll({
        where:{
            usuario_id:usuario_id
        }
    })

    return res.json(listaDePerguntas)
  }
};
