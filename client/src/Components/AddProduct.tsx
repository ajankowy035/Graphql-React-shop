import React, {useRef, useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

import { Input } from './atoms/Input';

interface IProduct {
    name: string;
    price: number;
    description: string;
    category: string;
    type: "M" | "F";
    size: 36 | 37 | 38 | 39 | 40 | 41 | 42;
    amount: number;
    image: string;
}

export const AddProduct = (): JSX.Element => {
    const [ newProduct, setNewProduct ] = useState<IProduct | null>(null);
    const  [name, setName ] = useState(null);
    const [ price, setPrice ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ category, setCategory ] = useState(null);
    const [ type, setType ] = useState(null);
    const [ size, setSize ] = useState(null);
    const [ amount, setAmount ] = useState(null);
    const [ image, setImage ] = useState(null);

    const settingInputs = [setName, setPrice, setDescription, setCategory, setType, setSize, setAmount, setImage];

    const ADD_PRODUCT = gql`
    mutation CreateProduct($name: String!, $price:Float!, $description:String!, $category:String!, $type:String!, $size: Float!, $amount: Float!, $image: String!) {
        createProduct (productInput:{name: $name, price: $price, description: $description, category: $category, type: $type, size: $size, amount: $amount, image: $image}){
          name
          price
          _id
          category
          type 
          size
          amount
          image
        }   
      }`

    const [createProduct, { data, loading, error }] = useMutation(ADD_PRODUCT);

    const submitProduct = (e: any) => {
        e.preventDefault();
        createProduct({variables: {
            name,
            price,
            description,
            category,
            type,
            size,
            amount,
            image,
        }}).then(res => {
            setNewProduct(res.data.createProduct);
            settingInputs.map(fn => fn(null));
        })
    };

    const changeInputValue = (name: string, value: string | number) => {
        if(name === "name") {
            setName(value);
        } else if(name === "price") {
            setPrice(parseInt(value));
        } else if(name === "description") {
            setDescription(value);
        } else if(name === "category") {
            setCategory(value);
        } else if(name === "type") {
            setType(value);
        } else if(name === "size") {
            setSize(parseInt(value));
        } else if(name === "amount") {
            setAmount(parseInt(value));
        } else if(name === "image") {
            setImage(value);
        }
    }
    
    return (
        <article className='addBox'>
            <form onSubmit={submitProduct}>
                <Input name = "name" type="text" onChange={changeInputValue} placeholder="Name" />
                <Input name = "price" type="number" onChange={changeInputValue} placeholder="Price" />
                <Input name = "description" type="text" onChange={changeInputValue} placeholder="Description" />
                <Input name = "category" type="text" onChange={changeInputValue} placeholder="Category" />
                <Input name = "type" type="text" onChange={changeInputValue} placeholder="Type(M/F)" />
                <Input name = "size" type="number" onChange={changeInputValue} placeholder="Size" />
                <Input name = "amount" type="number" onChange={changeInputValue} placeholder="Amount" />
                <Input name = "image" type="text" onChange={changeInputValue} placeholder="Image URL" />
                <button>Add</button>
            </form>
            {newProduct && <div>{newProduct.name}</div>}
        </article>
    )
}