import React, {useState} from React;

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("fahrenheit");

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }
    function showFahrenhiet(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function celsius(){
       return (props.celsius * 9 ) / 5 + 32;

    }


    if(unit === 'fahrenheit'){

    return(   

<div className="WeatherTemperature">
                               
                                <span className="temperture">{Math.round(props.fahrenheit)}</span>
                                <span className="unti"> 
                                <a href= "/" onClick={showFahrenhiet}> °F | {""}
                                 °C </a> </span> 
                            </div>

    );
       
} else {
    
    return (<div className="WeatherTemperature">
                               
                                <span className="temperture">{Math.round(celsius())}</span>
                                <span className="unti"> 
                                <a href= "/" onClick={showFahrenhiet}> °F | {""}
                                 °C </a> </span> 
                            </div>) }}