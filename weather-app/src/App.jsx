import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import Loader from './components/Loader'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchWeather = async () => {
    if (!searchTerm.trim()) {
      setIsLoading(false)
      return;
    }
    setIsLoading(true)
    if (!searchTerm) return;

    try {
      const apiKey = "3213f845f5f30e167ada57bdf12d0a35"
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric&lang=tr`)
      setWeatherData(res.data);
      console.log(res.data);
      setIsLoading(false)

    }
    catch (err) {
      console.log("Hava durumu alınamadı:", err);
      setWeatherData(null)
      setIsLoading(false)

    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-black-700">Hava Durumu Uygulaması</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} onSubmit={fetchWeather}
        />
        {isLoading
          ?
          <Loader />
          :
          <WeatherDisplay weatherData={weatherData} />
        }
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
          onClick={fetchWeather}
        >
          Hava Durumunu Getir
        </button>
      </div>
    </div>
  )
}

export default App