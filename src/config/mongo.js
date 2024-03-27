const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/local');

module.exports = mongoose;


// const mongoose = require('mongoose');

// // const username = 'seu_usuario';
// // const password = 'sua_senha';
// const username = '';
// const password = '';
// const host = '127.0.0.1';
// const port = '27017';
// const database = 'local';

// const uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
//  module.exports = mongoose;