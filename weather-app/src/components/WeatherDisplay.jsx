import React from 'react'

const WeatherDisplay = ({ weatherData }) => {

    return (
        <>
            {weatherData &&
                <div className='mt-10 flex justify-center'>
                    <div className='bg-blue-100 p-6 rounded-xl shadow-lg text-center w-80'>
                        <h2 className='text-xl font-bold mb-2'>{weatherData.name}</h2>
                        <p className='text-xl'>{weatherData.weather[0].description}</p>
                        <p className='text-4xl font-semibold mt-4'>{Math.round(weatherData.main.temp)}°C</p>
                        <p className="text-sm mt-2 text-gray-600">Nem: {weatherData.main.humidity}%</p>
                        <p className="text-sm text-gray-600">Rüzgar: {weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            }
        </>
    )
}
export default WeatherDisplay