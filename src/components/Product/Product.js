import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price, seller, category} = props.product
    
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <a href='product/single' className="p-title">{name.slice(0, 30)}...</a>
            <p><small><b>${price}</b></small></p>
            <p><small>{category}</small></p>
            <p><small>by: {seller}</small></p>
            <button onClick={() => props.cart(props.product)} className='cart-btn'><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
        </div>
    );
};

export default Product;