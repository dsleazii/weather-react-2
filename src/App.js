import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import axios from "axios";
import './App.css';


function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units==imperial&appid=f566bd41d3d1d94a0daf0f4e4d35ca75`;
  
  const searchLocation = (event)=> {
   if (event.key === 'Enter'){ 
   axios.get(url).then((response) => {
      setData(response.data) 
      console.log(response.data)
    })
    setLocation('')
  }
  }
  
  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event=> setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
       <div className="container">
         <div className="top">
           <div className="location">
            <p>{data.name}</p>
           </div>
 <div className="temp">
  {data.main ? <h1>{data.main.temp.toFixed()} °F</h1> :null} </div>
<div className="description">
    {data.weather ? <p>{data.weather[0].main}</p>:null}
  

    </div>
</div>
</div> 


    {data.name !== undefined && 
    <div className="bottom">
       <div className="feels">
        {data.main ? <p className='bold'> {data.main.feels}°F</p>: null}
         <p>Temperature</p>
       </div>
        <div className="humdity">
          {data.main ? <p className='bold'> {data.main.humdity}%</p>: null}
          <p>Humdity</p>
        </div>
         <div className="wind">
       {data.main ? <p className='bold'>{data.wind.speed}km/m</p>: null}
          <p>Wind Speed</p>
         </div>
     </div>

     }
      
  
  

    <footer className="info" > This project is coded by{" "}  <a href="https://www.linkedin.com/in/dedra-dearborne-7532b7223/" target="_blank" rel="noreferrer">Dedra D.</a>{" "} and is {" "}

      <a href="https://github.com/dsleazii/weather-react-2" target="_blank" rel="noreferrer"
      >
      
      open-source on Github</a></footer>
    </div>   
  );
}

export default App;
