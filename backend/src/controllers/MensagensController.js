const Mensagens = require('../models/Mensagens');

module.exports = {
  async CriarPergunta(req, res) {
    const { usuario_id,mensagem,categoria } = req.body;
	
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
    const { mensagem_id,resposta } = req.body;
    const { usuario_id } = req.params;

    var mensagem = await Mensagens.findById(mensagem_id)

    if(mensagem.respondido === 1)
        return  res.status(400).json({ error: 'Pergunta já respondida!' });

    await Mensagens.update({ respondido:1, resposta:resposta },{
      where:{
        usuario_id:usuario_id
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
                $ne: null
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
