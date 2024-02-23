// src/components/Header.js

import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import './Header.css'; // CSS 파일 임포트

function Header({ onSearch }) {
    return (
        <header className="header">
            <Logo />
            <SearchBar onSearch={onSearch} className="searchBar" />
            <div className="hiddenDiv"></div>
        </header>
    );
}

export default Header;
