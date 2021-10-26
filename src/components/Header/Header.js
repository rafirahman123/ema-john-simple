import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email &&
                    <span style={{ color: 'white' }}>Hello{user.displayName}</span>}
                {
                    user.email ?
                        <button className="cart-button" onClick={logout}>Logout</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;