const Usuario = require('../models/Usuario');

module.exports = {
  async store(req, res) {
    const { nome } = req.body;
	const { cpf } = req.body;
	const { login } = req.body;
	const { password } = req.body;

    let usuario = await Usuario.create({
		nome:nome,
		cpf:cpf,
		login:login,
		password:password
	});
	
    return res.json(usuario);
  }
};
