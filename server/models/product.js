const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true},
    type: { type: String, required: true},
    size: { type: Number, required: true},
    amount: { type: Number, required: true},
    image:{ type: String }
});

module.exports = mongoose.model('Product', productSchema);