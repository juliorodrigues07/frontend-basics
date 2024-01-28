import React from 'react';
import '../../general/reset.css';
import './Footer.css'

export default function Footer()
{
    return (
        <footer className="disclaimer">
            <div className="text">
                <p className="disclaimer_title">Preview of Spotify</p>
                <p className="disclaimer_subtitle">
                    Sign up to get unlimited songs and podcasts with ocasional ads. No credit card needed.
                </p>
            </div>
            <div className="sub-button">
                <button type="button">Sign up free</button>
            </div>
        </footer>
    );
}