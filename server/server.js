const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const root = require('./graphql/resolvers');
const schema = require('./graphql/schema');
require('dotenv').config()

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.cxvcm.mongodb.net/ClothShop?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl)
.then(() => {
    console.log('Mongo connected');
})
.catch(err => console.log(err));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;