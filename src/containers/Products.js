import React, { useContext, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

import { Context as ProductsContext } from '../context/ProductsContext';
import Product from '../components/Product'

const Config = () => {


    const { state, fetchProducts } = useContext(ProductsContext);
    useEffect(() => {
        fetchProducts()

    }, []);


    console.log("hello products", state)

    const prods = state.products.map(product =>
        <Product
            key={product.id}
            id={product.id}
            title={product.name}
            text={product.description}
            stars={product.rating.stars}
            color={product.rating.color}
        />
    )




    return (

        <div>
            <CardDeck>
                {prods}
            </CardDeck>

        </div>
    )
}


export default Config;
