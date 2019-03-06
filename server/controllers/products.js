const mongoose = require('mongoose'),
    Product = mongoose.model('Product');

module.exports = {

    index: function(request, response){
        Product.find({}, function(error, data){
            if(error){
                response.json({'errors': error});
            }else{
                response.json({'message': 'success', data});
            }
        })
    },

    show: function(request, response){
        Product.find({_id: request.params.id}, function(error, data){
            if(error){
                response.json({'errors': error});
            }else{
                response.json({'message': 'success', data});
            }
        })
    },

    create: function(request, response){
        Product.create(request.body, function(error, data){
            if(error){
                response.json({'errors': error});
            }else{
                response.json({'message': 'success', data});
            }
        })
    },

    update: function(request, response){
        Product.update({_id: request.params.id}, {$set: request.body}, {runValidators: true}, function(error, data){
            if(error){
                console.log({error});
                response.json({'errors': error});
            }else{
                console.log({error});
                response.json({'message': 'success', data});
            }
        })
    },
    
    destroy: function(request, response){
        Product.remove({_id: request.params.id}, function(error, data){
            if(error){
                response.json({'errors': error});
            }else{
                response.json({'message': 'success', data})
            }
        })
    }
    
}