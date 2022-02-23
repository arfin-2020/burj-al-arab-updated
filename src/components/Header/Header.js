import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import { useAuth } from '../Context/AuthContext';
import './Header.css';

const Header = () => {
    const {currentUser, logOut} = useAuth();
  
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        {!currentUser?.name ? <Link to="/login">Login</Link> : <Button onClick={logOut}>SignOut</Button>}
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    {currentUser?.name && <span style={{color:'white',marginLeft: '20px'}}>Hello, {currentUser.name}</span>}
                    
                </ul>
                    
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
               
            </div>
        </div>
    );
};

export default Header;