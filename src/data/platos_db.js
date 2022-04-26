const fs = require('fs');
const path = require('path');

const datos = fs.readFileSync(path.join(__dirname,'platos.json'),'utf-8');
const datosParseados = JSON.parse(datos);

module.exports = datosParseados