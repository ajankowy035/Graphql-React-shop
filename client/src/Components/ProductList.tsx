import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

const PRODUCTS = gql`
{
    products {
        _id
        name
        price
    }
}`;

type product = {
    name: string;
    _id: string;
    price: number;
}

export const ProductList = () => {
    const { loading, error, data } = useQuery(PRODUCTS);
    !loading && console.log(data.products.map((product: product) => product.name));
  
    return (
        <main>
            {loading && <p>...</p>}
            {!loading && data.products.map(({price, name, _id}: product) => (
                <div key={_id }>
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
            ))}
        </main>
    )
}
