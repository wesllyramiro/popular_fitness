const Usuario = require('../model/Usuario');

module.exports = {
    async SingIn(req, res){
        const { login,password} = req.body

        const usuario = await Usuario.find({
            where:{
                login:login,
                password:password
            }
        })

        if(!usuario)
            return res.status(204).json()

        return res.json(usuario)
    }
}