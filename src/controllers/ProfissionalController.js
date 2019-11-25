const Profissional = require('../model/Profissional');

module.exports = {
  async CriarProfissional(req, res) {
	const { nome, email, login, password, crn, cref } = req.body
	
    let profissional = await Profissional.create({ 
		nome:nome,
		email:email,
		login:login,
		password:password,
		crn:crn,
		cref:cref
	});

    return res.json(profissional);
  },
  async BuscarProfissional(req, res){
	  const { profissional_id } = req.params

	  let profissional = await Profissional.findByPk(profissional_id)

	  if(!profissional)
		  return res.status(204).json()
	  
	  return res.json(profissional)
  }
};
