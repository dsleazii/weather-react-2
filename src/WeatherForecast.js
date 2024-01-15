import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    function handleResponse(response){
        console.log(response.data);
    }
    
    let apiKey= "f566bd41d3d1d94a0daf0f4e4d35ca75"
    let longitude=40.7;
    let latitude=74;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitiude}&lon=${longitude}&appid=${apiKey}`
    axios.get(apiUrl).then(handleresponse);
return(
    <div className = "WeatherForecast">
        <div className="row">
            <div className=" col">
              <div classNAme="WeatherForecast-day">Thu</div>  
               <WeatherIcon code="01d" size={36}/>
               <div classsNAme="WeatherForecast-temperature" >
                <span className="WeatherForecast-tempeerature-max"> 19° </span> 
                 <span className="WeatherForecast-tempeerature-min"> 10°</span>
                 </div> 
            </div>
        </div>
        
    </div>
)

}