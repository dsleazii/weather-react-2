import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props){

const [weatherData, setWeatherData] = useState({ready: false};
    function handleResponse(response){
        console.log(response);
        setWeatherData({ 
            ready:true,
            Temperature:response.data.main.temp,
            Humidity:response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl:,
            wind: response.data.main.wind.speed,
            city: response.data.name

       }) ;
       
       setReady(true);
    }

    if(weatherData) {
        return(
  
   
    <div className="Weather">
        <form>

            <div className="row">
                <div className="col-9>"

     <input
        type="search" placeholder="Enter a city.."
        className="form-control"
        autoFocus="on"
        />
        </div> 
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary w-100"/>
             </div>
          </div>
         </form>
        <><h1>{weatherData.city}</h1><ul>
               <li>
               <FormatedDate date={weatherData.description}/></li>
                <li className= "text-capitalize">{weatherData.description}</li>
            </ul><div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src={weatherData.iconUrl}
                                alt={weatherData.description}
                                className="float-left" />

                            <div className="float-left">
                                <span className="temperture">{Math.round(weatherData.Temperature)}</span>
                                <span className="unti">°F|°C </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                           
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                    Hello World
                </div> 
                        );  }
        else {
                        
                 const apiKey = "f566bd41d3d1d94a0daf0f4e4d35ca75";
                 let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apikey}`;
                axios.get(apiUrl).then(handleResponse);
    
    return "Loading..";
}
);  }  