const Usuario = require('../model/Usuario');

module.exports = {
  async CriarUsario(req, res) {
    const { nome, cpf, login, password } = req.body

	var usuarioExistente = await Usuario.findOne({ where: { login : login }})
	if(usuarioExistente)
		return res.status(400).json({ error: "Login já utilizado" })

    let usuario = await Usuario.create({
		nome:nome,
		cpf:cpf,
		login:login,
		password:password
	});
	
    return res.json(usuario);
  },
  async BuscarUsuario(req, res){
	const { usuario_id } = req.params

	var usuarioExistente = await Usuario.findByPk(usuario_id)

	if(!usuarioExistente)
		return res.status(204).json()

	return res.json(usuarioExistente)
  }
};
