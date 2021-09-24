const Buying = require('../../../models/buying');
const Discount = require('../../../models/discount');

const Product = require('../../../models/product');
const User = require('../../../models/user');

const addToBucket = (args) => {
    const { userId, productId } = args.bucketInput;
    return User.findById(userId).then(user => {
        if (user) {
            usr.populate('bucket');
            return Product.findById(productId).then(product => {
                user.bucket.push(product);
                return user.save().then(result => result);
            })
        } else {
            throw new Error(`Problems with adding to your bucket`);
        }
    })
}

const removeFromBucket = async (args) => {
    const { userId, productId } = args.bucketInput;
    try {
        const user = await User.findById(userId);
        const bucket = await user.populate('bucket');
        bucket.bucket = bucket.bucket.filter(product => product.id !== productId);
        const result = await user.save();
        return result;
    } catch (err) {
        throw new Error(err);
    }
    
}

const buy = async (args) => {
    const { userId, discountCode } = args;
    try{
        const user = await User.findById(userId);
        const discount = await Discount.findOne({"code": discountCode });
        let toPay = 0;
        const bucket = await user.populate('bucket', 'price');
        
        bucket.bucket.map(product => toPay += product.price);
        
        if(discount.type === 'minus') {
            toPay =  toPay - discount.count;
        } else if (discount.type === 'percentage'){
            toPay = toPay - toPay * discount.count / 100;
        }
        const date = new Date().toISOString();

        const bought = new Buying({
            user: userId,
            bucket: user.bucket,
            discount: discount.id,
            totalPay: toPay.toFixed(2),
            boughtAt: date
        });

        const result = await bought.save();
        bucket.bucket = [];
        user.save();
        return result;
        
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    buy,
    addToBucket,
    removeFromBucket
}
