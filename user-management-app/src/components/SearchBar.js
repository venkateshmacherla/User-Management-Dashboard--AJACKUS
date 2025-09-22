import React from 'react';

export default function SearchBar({ searchQuery, onSearchChange }) {
    return (
        <div className="header-row">
            <input
                type="text"
                placeholder="Search by name/email"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
}
