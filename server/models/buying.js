const mongoose = require('mongoose');

const buyingSchema = new mongoose.Schema(
    {
        bucket: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        user: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        discount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Discount'
        },
        totalPay: {
            type: Number,
            required: true
        },
        boughtAt: {
            type: String,
            required: true
        },
    }
);

module.exports = mongoose.model('Buying', buyingSchema);