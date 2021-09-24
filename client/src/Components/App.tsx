import React from 'react';
import './App.scss';
import { ProductList } from './ProductList';
import { AddProduct } from './AddProduct';

export const App = (): JSX.Element => {
    return (
        <div>
            <AddProduct />
            <ProductList />
        </div>
    )
}
