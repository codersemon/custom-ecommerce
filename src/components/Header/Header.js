import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="logo-div">
                <img src={logo} alt="Logo" />
            </div>
            <nav className='main-menu'>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/order">Order Track</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;