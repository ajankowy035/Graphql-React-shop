import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

import { App } from './Components/App';

const client = new ApolloClient({ uri: "http://localhost:4000/graphql", cache: new InMemoryCache()});

const Root = () => {
    return(
        <ApolloProvider client={ client }>
            <App />
        </ApolloProvider>
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));