import React from 'react'

const WeatherDisplay = ({ weatherData }) => {

    if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
        return <p className="text-center mt-5 text-gray-500">Hava durumu bilgisi bulunamadı.</p>;
    }

    const description = weatherData.weather[0].description.toLowerCase();

    const getImageForWeather = () => {
        if (description.includes("açık")) return "./../public/images/sun.png";
        if (description.includes("parçalı") || description.includes("az bulutlu")) return "./../public/images/cloudy.png";
        if (description.includes("bulutlu") || description.includes("kapalı")) return "./../public/images/clouds.png";
        if (description.includes("yağmur")) return "./../public/images/rainy.png";
        if (description.includes("kar")) return "./../public/images/snowflake.png";

        return "/images/degree.jpg"; // varsayılan
    };

    return (
        <>
            {weatherData &&
                <div className='mt-10 flex justify-center'>
                    <div className='bg-blue-100 p-6 rounded-xl shadow-lg text-center w-80'>
                        <h2 className='text-xl font-bold mb-2'>{weatherData.name}</h2>
                        <p className='text-xl mb-4'>{weatherData.weather[0].description}</p>
                        <div className='flex justify-center items-center'>
                            <img src={getImageForWeather()} alt="hava durumu" className="w-30 h-30 object-cover rounded-md mb-4" />

                        </div>
                        <p className='text-4xl font-semibold mt-4'>{Math.round(weatherData.main.temp)}°C</p>


                        <p className="text-sm mt-2 text-gray-600">Nem: {weatherData.main.humidity}%</p>
                        <p className="text-sm text-gray-600">Rüzgar: {weatherData.wind.speed} m/s</p>
                    </div>
                </div >
            }
        </>
    )
}
export default WeatherDisplay