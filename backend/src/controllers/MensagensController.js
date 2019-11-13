const Mensagens = require('../models/Mensagens');

module.exports = {
  async create(req, res) {
    const { usuario_id } = req.body;
    const { mensagem } = req.body;
    const { categoria } = req.body;
	
	
    let mensagen = await Mensagens.create({ 
		usuario_id:usuario_id,
		mensagem:mensagem,
		categoria:categoria,
		respondido:0
	});

    return res.json(mensagen);
  },
  async buscarPerguntaPorCategoria(req,res){
    const { categoria } = req.headers;

    return await Mensagens.findAll({
        where:{
            respondido:0,
            categoria:categoria
        }
    })
  },
  async buscarResposta(req,res){
    const { usuario_id } = req.params;

    return await Mensagens.findAll({
        where:{
            usuario_id:usuario_id,
            resposta:{
                [Op.ne]:null
            }
        }
    })

  }
};
