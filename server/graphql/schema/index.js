const { buildSchema } = require('graphql');

const userSchema = require('../resolvers/user/user.schema');
const productSchema = require('../resolvers/product/product.schema');
const discountSchema = require('../resolvers/discount/discount.schema');
const bucketSchema = require('../resolvers/bucket/bucket.schema');

module.exports = buildSchema(`
    ${bucketSchema}
    ${discountSchema}
    ${productSchema}
    ${userSchema}

    input RemoveInput {
        _id: ID!
    }

    type Query {
        products: [Product!]!
        users: [User!]!
        discounts: [Discount!]!
    }
    
    type Mutation {
        createProduct(productInput: ProductInput): Product
        createUser(userInput: UserInput): User
        addToBucket(bucketInput: BucketInput): User
        removeFromBucket(bucketInput: BucketInput): User
        buy(userId: ID!, discountCode: String): Buying!
        createDiscount(discountInput: DiscountInput): Discount!
        removeProduct(productInput: RemoveInput): [Product!]!
        removeUser(userInput: RemoveInput): [User!]!
        removeDiscount(discountInput: RemoveInput): [Discount!]!
    }
`);