const Product = require('../../../models/product');

const products = async () => {
    try{
        const products = await Product.find() ;
        return products;
    } catch (err) {
        throw new Error(err);
    }
}

const createProduct = async (args) => {
    const { name, price, description, category, type, size, amount, image } =  args.productInput;
    const newProd = new Product({ name: name, price: price, description: description, category: category, type: type, size: size, amount: amount, image });
    try {
        const result = await newProd.save()
        return result;
    } catch (err) {
        throw new Error(err);
    }
    
}

const removeProduct = async (args) => {
    const { _id } = args.productInput;
    const results = await Product.findOneAndDelete({_id: _id});
    return results;
}

module.exports = {
    removeProduct,
    createProduct,
    products
}
