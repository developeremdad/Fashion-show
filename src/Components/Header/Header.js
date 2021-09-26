import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container text-center p-2">
            <h2 className="header-title">ORGANIGING A FASHION FESTIVAL</h2>
            <p className="header-description text-light fs-5">Collection of world top models for fashion festivals</p>
            <h4 className="">Total Budget: 15 Million</h4>
        </div>
    );
};

export default Header;