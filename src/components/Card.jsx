import React from "react";
import Spinner from './Spinner'

const Card = ({loadingData, showData, weather, forecast}) => {
    
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = '';
    let iconUrl = '';

    let iconUrl3 = '';
    let iconUrl6 = '';
    let iconUrl9 = '';

    let forecastDate3 = '';
    let forecastDate6 = '';
    let forecastDate9 = '';

    let imgBg = function (){
        const imagesList = ['https://images.pexels.com/photos/8697773/pexels-photo-8697773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/8697773/pexels-photo-8697773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/10494948/pexels-photo-10494948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/5417916/pexels-photo-5417916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/11284397/pexels-photo-11284397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/1338393/pexels-photo-1338393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/11631892/pexels-photo-11631892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/11264614/pexels-photo-11264614.jpeg?cs=srgb&dl=pexels-daniel-guti-11264614.jpg&fm=jpg',
                            'https://images.pexels.com/photos/10068799/pexels-photo-10068799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/161239/plaza-de-espania-channel-church-seville-161239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/3354774/pexels-photo-3354774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/5675291/pexels-photo-5675291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/2431831/pexels-photo-2431831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/1830936/pexels-photo-1830936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/3914124/pexels-photo-3914124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/1703311/pexels-photo-1703311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            'https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
        const randomNumber = Math.floor(Math.random() * (imagesList.length - 1) + 0);
        return( imagesList[randomNumber]);
    }

    
    if(loadingData){
        return <Spinner />
    }

    if(showData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png'

        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
        iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">
            
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp -273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="Weather Icon" />{weather.weather[0].description}</p>
                                    <img src={imgBg()} className="img-fluid rounded-start" alt="Weather" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Max Temperature: {(weather.main.temp_max -273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Min Temperature: {(weather.main.temp_min -273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Feels Like: {(weather.main.feels_like -273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Humidity: {(weather.main.humidity)}%</h5>
                                        <h5 className="card-text">Wind Speed: {(weather.wind.speed)}m/s</h5>
                                    </div>
                                    <hr />

                                    <div className="row mt-4">
                                        <div className="col">
                                            <p>{forecastDate3}h</p>
                                            <p className="description">
                                                <img src={iconUrl3} alt="Next 3 hours"/>
                                                {forecast.list[1].weather[0].description}
                                            </p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}h</p>
                                            <p className="description">
                                                <img src={iconUrl6} alt="Next 6 hours"/>
                                                {forecast.list[2].weather[0].description}
                                            </p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}h</p>
                                            <p className="description">
                                                <img src={iconUrl9} alt="Next 9 hours"/>
                                                {forecast.list[3].weather[0].description}
                                            </p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">No Data</h2>
                )
            }
        </div>

    );
}

export default Card;