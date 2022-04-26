const platos_db = require('../data/platos_db')

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            platos : platos_db
        })
    },
  
        
}