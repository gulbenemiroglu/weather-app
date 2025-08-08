import React, { useState } from 'react'
import SearchBar from './components/SearchBar'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </div>
  )
}

export default App