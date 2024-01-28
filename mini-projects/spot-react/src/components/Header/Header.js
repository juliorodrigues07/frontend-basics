import React from 'react';
import smallRight from '../../assets/icons/small-left.png';
import smallLeft from '../../assets/icons/small-left.png';
import searchIcon from '../../assets/icons/search.png';
import '../../general/reset.css';
import '../../general/vars.css';
import './Header.css'

export default function Header()
{
    return (
        <nav className="header_navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Left arrow"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Right arrow"/>
                </button>
            </div>
            <div className="header_search">
                <img src={searchIcon} alt=""/>
                <input id="search-input" type="text" maxLength="50" placeholder="What do you want to listen to?"/>
            </div>
            <div className="header_login">
                <button className="signup">Sign up</button>
                <button className="login">Log In</button>
            </div>
        </nav>
    );
}