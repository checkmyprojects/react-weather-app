# React Weather App

A quick project to learn some React api stuff.

Made using OpenWeather API https://openweathermap.org/

It gets an image of the city using the Pexels API https://www.pexels.com/api/ . If no image is found, it will display a random one from a fixed list.

Live demo at: https://react-my-weather-app.herokuapp.com/

![Image text](./src/assets/img/screenshot.png) 

## How It's Made:

**Tech used:** HTML, CSS, Javascript, React.

A tiny project made as a first contact with react after working with Angular.
It uses the OpenWeather API free plan.

## Optimizations

- ~~I would like to display a picture of the city it displays the weather of, but i couldn't find a free API to do that~~. Done, it gets the image using Pexels API.

- ~~Add author name and link to original image~~. Done, now links to author or just to pexels if no image is found.

- Make it change theme with local time (day / night).

## Install:

- Clone repo.
- Go to ***WeatherPanel.jsx*** and customize some options:
  - Set **openWeatherApi** with your own.
  - **openWeatherLang** sets the language of the results.
  - **numberOfResults** defaults to max 10 results and gets a random image from those 10.
- Configure your environment variables
  - **process.env.REACT_APP_API_KEY_PEXELS** as your pexels api key
  - **process.env.REACT_APP_API_KEY_OPENWEATHER** as your openweather api key

## Lessons Learned:

React and Angular feel different but have similarities.

I'm not sure if i like React more than Angular, but doing this after having some Angular knowledge made it way easier.

It was a hot day :)