module.exports = `
    type Discount {
        _id: ID!
        count: Float!
        code: String!
        type: String!
    }
    input DiscountInput {
        count: Float!
        code: String!
        type: String!
    }
`