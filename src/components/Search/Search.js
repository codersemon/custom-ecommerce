import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Search.css';


const Search = (props) => {
    const total = props.cart.reduce((total, pp) => total + pp.price, 0)
    return (
        <div className='search-wrap'>
            <div className="search-div">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="cart-div">
                <ul>
                    <li><FontAwesomeIcon icon={faShoppingCart} /> {props.cart.length}</li> | 
                    <li>${total.toFixed(2)}</li>
                </ul>
            </div>
        </div>
    );
};

export default Search;