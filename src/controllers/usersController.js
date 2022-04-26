const platos_db = require('../data/platos_db');

module.exports = {
    login : (req,res) => {
        return res.render('index',{
            user : 'Eric',
            platos : platos_db
        })
    },
    logout : (req,res) => {
        return res.render('index',{
            platos : platos_db
        })
    }
}