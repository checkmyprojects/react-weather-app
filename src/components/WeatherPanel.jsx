import React, {useState} from "react";
import Form from "./Forms";
import Card from './Card';
const WeatherPanel = () => {

    // Enter yout OpenWeather API here
    let openWeatherApi = process.env.REACT_APP_API_KEY_OPENWEATHER
    let openWeatherLang = 'en'
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${openWeatherApi}&lang=${openWeatherLang}`;
    let cityUrl = '&q=';

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${openWeatherApi}&lang=${openWeatherLang}`;

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast]  = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [imgCity, setImgCity] = useState('');
    const [imgAuthor, setimgAuthor] = useState('');
    const [urlAuthor, seturlAuthor] = useState('');

    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

        // Weather
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) => {     
                //console.log(weatherData);
                setWeather(weatherData);           
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        // A list of random images to be used when no image is found on the pexels search
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

        // How many images we get from the search
        let numberOfResults = 10
        let urlPexels = `https://api.pexels.com/v1/search?query=${loc}&per_page=${numberOfResults}&orientation=portrait`

        // Set header with Authorization token for pexels token
        const defaultOptions = {
            headers: {
                'Authorization': process.env.REACT_APP_API_KEY_PEXELS,
            },
        };

        await fetch(urlPexels, defaultOptions).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((pexelsData) => {     
            console.log(pexelsData);
            // If pexels has an image(length > 0), get a random image from the array of images
            if(pexelsData.photos.length > 0){
                const randomNumber = Math.floor(Math.random() * (pexelsData.photos.length - 1));
                setImgCity(pexelsData.photos[randomNumber].src.portrait)
                console.log(pexelsData.photos[randomNumber].photographer);
                setimgAuthor(pexelsData.photos[randomNumber].photographer)
                seturlAuthor(pexelsData.photos[randomNumber].photographer_url)
            }else{
                // If search returns 0 images, get a random one from the list
                setImgCity(imgBg())
            }

        }).catch(error => {
            console.log(error);
        });

        // Forecast
        urlForecast = urlForecast + cityUrl + loc;
        
        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) => {     
                //console.log(forecastData);
                setForecast(forecastData);   
                
                setLoading(false);
                setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return(
        
        <React.Fragment>

            <Form 
                newLocation = {getLocation}
            />

            <Card 
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
                imgCity = {imgCity}
                imgAuthor = {imgAuthor}
                urlAuthor = {urlAuthor}
            />

        </React.Fragment>

    );

}


export default WeatherPanel;