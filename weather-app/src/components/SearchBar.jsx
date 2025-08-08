import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <input type="text" value={searchTerm} placeholder="Şehir adı girin"
                onChange={(e) => (onSearchChange(e.target.value))} />
        </div>
    )
}

export default SearchBar