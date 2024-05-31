const models = require('../models');

const getAll = async function (req,res){

    let d = await models.Usuario.findAll();
    await res.json(d);

}

const getById = async function(req,res){

    const usuario = await models.Usuario.findOne({
        where: {
            id: req.params.id,
        },

    });

    await res.json(usuario);


}

const add = async function(req,res){

    const d = await models.Usuario.create(req.body);
    await res.json(d);

}


const update = async function(req,res){

    const usuarioId = req.params.id;

    const [updated] = await models.Usuario.update(req.body, {
        where: { id: usuarioId },
    });
    
    if (updated) {
        const updatedUsuario = await models.Usuario.findByPk(usuarioId);
        await res.json(updatedUsuario);
    }else{
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
}

const deleteElement = async function(req,res){

    const UsuarioId = req.params.id;

    const deleted = await models.Usuario.destroy({
        where: { id: UsuarioId },
    });

    if (deleted) {
        res.json({ message: 'Usuario eliminado correctamente' });
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
    

}


exports.getAll = getAll;
exports.getById = getById;
exports.add = add;
exports.update = update;
exports.deleteElement = deleteElement;