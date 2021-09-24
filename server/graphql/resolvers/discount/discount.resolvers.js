const Discount = require('../../../models/discount');

const discounts = async () => {
    try {
        const discounts = await Discount.find();
        return discounts;
    } catch (err) {
        throw new Error(err);
    }
}

const createDiscount = async (args) => {
    const { count, code, type } = args.discountInput;
    try {
        const discount = new Discount({ count, code, type });
        const result = discount.save();
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

const removeDiscount = async (args) => {
    const { _id } = args.discountInput;
    const results = await Discount.findOneAndDelete({_id: _id});
    return results;
}

module.exports = {
    removeDiscount,
    createDiscount,
    discounts
}