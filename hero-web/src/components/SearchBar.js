import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchTerm);
        }
    };


    return (
        <form className="search-bar-container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="찾으실 수거함의 위치를 입력하세요!"
                className="search-bar-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                type="submit"
                className="search-bar-button"
            >
                검색
            </button>
        </form>
    );
}

export default SearchBar;
