const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, "../models");
const reg = new RegExp('.js$', 'i');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/CollectibleClerics');
mongoose.connection.on('connected', () => console.log('Connected to mongodb'));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
})
