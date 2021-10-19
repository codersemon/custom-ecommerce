import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import './Shop.css'
import Search from '../Search/Search';

const Shop = () => {
    const [products, setProduct] = useState(fakeData)
    const [cart, setCart] = useState([])
    const addToCart = (pd) => {
        const newCart = [...cart, pd]
        setCart(newCart)
    }
    

    return (
        <div>
            <Search cart={cart}></Search>
            <div className="shop-container">
             {products.slice(0, 12).map(product => <Product cart={addToCart} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Shop;