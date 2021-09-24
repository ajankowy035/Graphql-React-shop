module.exports = `
    input ProductInput {
        name: String!
        price: Float!
        description: String!
        category: String!
        type: String!
        size: Float!
        amount: Float!
        image: String!
    }

    type Product {
        _id: ID!
        name: String!
        price: Float!
        description: String!
        category: String!
        type: String!
        size: Float!
        amount: Float!
        image: String!
    }
`