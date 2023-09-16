import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='Header'>
            <img src={Logo} alt='Image Not Showing' />
            <nav>
                <a href="Order">Order</a>
                <a href="Order Review">Order Review</a>
                <a href="Order Samary">Order Samary</a>
                <a href="Login">Login</a>
            </nav>
        </div>
    );
};

export default Header;