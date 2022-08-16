const mongoose = require('mongoose');

const password = 's3Y9HUnP9MHtGcK6';

mongoose.connect(
  `mongodb+srv://testInsole:${password}@cluster0.zoc4fqm.mongodb.net/?retryWrites=true&w=majority`,
).catch(() => console.log('Banco Conectado'));

module.exports = mongoose;
