import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini önle
        onSubmit();         // App'teki fetchWeather fonksiyonu çağrılır
    };
    return (
        <form onSubmit={handleSubmit} className="flex justify-center mt-10">
            <input
                type="text"
                value={searchTerm}
                placeholder="Şehir adı girin"
                onChange={(e) => (onSearchChange(e.target.value))}
                className="px-4 py-2 w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </form>
    )
}

export default SearchBar