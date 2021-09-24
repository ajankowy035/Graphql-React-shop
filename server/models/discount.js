const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
   count: {
       type: Number,
       required: true
    },
    code: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Discount', discountSchema);