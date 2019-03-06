const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs');

module.exports = function(){

    var getModels = path.join(__dirname, './../models');
    mongoose.connect('mongodb://localhost/exam');

    fs.readdirSync(getModels).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(getModels + '/' + file);
       }
    })

}