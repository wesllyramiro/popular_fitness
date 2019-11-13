const Profissional = require('../models/Profissional');

module.exports = {
  async create(req, res) {
    const { nome } = req.body;
	const { cpf } = req.body;
	const { login } = req.body;
	const { password } = req.body;
	const { crn } = req.body;
	const { cref } = req.body;
	
	
    let profissional = await Profissional.create({ 
		nome:nome,
		cpf:cpf,
		login:login,
		password:password,
		crn:crn,
		cref:cref
	});

    return res.json(profissional);
  }
};
