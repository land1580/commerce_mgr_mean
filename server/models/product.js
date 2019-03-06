const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Products must contain a Name"], minlength: [3, 'Name must be at least 3 characters']},
    quantity: {type: Number, required: [true, "Products must contain a Qty"], min: [1, 'Qty must be greater than 0']},
    price: {type: Number, required: [true, "Products must contain a Price"], min: [0.01, 'Price must be greater than $0']}
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);