const { removeUser, createUser, users } = require('./user/user.resolvers');
const { removeProduct, createProduct, products } = require('./product/product.resolvers');
const { removeDiscount, createDiscount, discounts } = require('./discount/discount.resolvers');
const { removeFromBucket, addToBucket, buy } = require('./bucket/bucket.resolvers');

module.exports =  {
    products,
    createProduct,
    removeProduct,
    users,
    removeUser,
    createUser,
    addToBucket,
    removeFromBucket,
    discounts,
    createDiscount,
    removeDiscount,
    buy
};