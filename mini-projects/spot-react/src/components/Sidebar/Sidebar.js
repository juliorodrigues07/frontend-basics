import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';
import spotifyLogo from '../../assets/icons/logo-spotify.png'
import '../../general/reset.css';
import '../../general/vars.css';
import './Sidebar.css'

export default function Sidebar()
{
    return (
        <div className="sidebar">
        
            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img src={spotifyLogo} alt="Page logo"/>
                    </a>
                </div>
                
                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome} className="fa fa-home"/></span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch} className="fa fa-search"/></span>
                            <span>Search</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">

                <div className="library_content">
                    <button className="library_button">
                        <span><FontAwesomeIcon icon={faBook} className="fa fas fa-book"/></span>
                        <span>Your Library</span>
                    </button>
                    <button className="add_button">
                        <span><FontAwesomeIcon icon={faPlus} className="fa fa-plus"/></span>
                    </button>
                </div>
        
                <section className="playlist-section">
                    <div className="playlist-section_content">
                        <span className="text title">
                            Create your first playlist
                        </span>
                        <span className="text subtitle">
                            It's easy, we'll help you
                        </span>
                        <button className="playlist-section_button">
                            <span>Create playlist</span>
                        </button>
                    </div>
                </section>

                <section className="podcast-section">
                    <div className="podcast-section_content">
                        <span className="text title">
                            Let's find some podcasts to follow
                        </span>
                        <span className="text subtitle">
                            We'll keep you updated on new episodes
                        </span>
                        <button className="podcast-section_button">
                            <span>Browse podcasts</span>
                        </button>
                    </div>
                </section>
                
                <div className="outer-links">
                    <a href="">Legal</a>
                    <a href="">Privacy Center</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookies</a>
                    <a href="">About Ads</a>
                    <a href="">Accessibility</a>
                    <a href="">Notice at Collection</a>
                    <a href="">Cookies Settings</a>
                </div>
        
                <div className="languages">
                    <button className="languages_button">
                        <span className="fa fa-globe"><FontAwesomeIcon icon={faGlobe}/></span>
                        <span>English</span>
                    </button>
                </div>
        
            </div>
        </div>
    );
}