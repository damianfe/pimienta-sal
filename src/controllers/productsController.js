const platos_db = require('../data/platos_db')

module.exports = {
    detail : (req,res) => {

        let plato = platos_db.find(plato => plato.id === +req.params.id);
      
        return res.render('detalleMenu',{
            plato,
        })
    }
}