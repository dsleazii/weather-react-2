import React from "react";
import weatherCion from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div classNAme="WeatherInfo" >
             <h1>{props.data.city}</h1>
        <ul>
               <li>
               <FormatedDate date={props.data.description}/></li>
                <li className= "text-capitalize">{props.data.description}</li>
            </ul><div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                             <div className="float-left">
                            <WeatherIcon code={props.data.icon} alt={props.data.dexription}/>
                           
                               
                            <div className="float-left">
                                <span className="temperture">{Math.round(props.data.Temperature)}</span>
                                <span className="unti">°F|°C </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                           
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
        </div>
        </div>
    );
}