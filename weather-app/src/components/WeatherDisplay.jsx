import React from 'react'

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return <p className="text-center mt-5 text-gray-500">Hava durumu bilgisi bulunamadı.</p>;
    }
    return (
        <div className='mt-10 flex justify-center'>
            <div className='bg-blue-100 p-6 rounded-xl shadow-lg text-center w-80'>
                <h2 className='text-xl font-bold mb-2'>{weatherData.name}</h2>
                <p className='text-xl'></p>
                <p className='text-4xl font-semibold mt-4'></p>
            </div>
        </div>
    )
}
export default WeatherDisplay