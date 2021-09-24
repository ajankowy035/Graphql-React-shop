module.exports = `
    type User {
        _id: ID!
        email: String!
        password: String
        bucket: [Product!]!
        bought: [Product!]!
    }

    input UserInput {
        email: String!
        password: String!
    }
`
