module.exports = `
    type Buying {
        _id: ID!
        user: User!
        boughtAt: String!
        discount: Discount
        totalPay: Float!
    }

    input BucketInput {
        userId: ID!
        productId: ID!
    }
`