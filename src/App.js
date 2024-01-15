import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
       <div class="container">
        <weather defaultCity="New York" />
 <Weather/>

    <footer> This project is coded by{" "}  <a href="https://www.linkedin.com/in/dedra-dearborne-7532b7223/" target="_blank" rel="noreferrer">Dedra D.</a>{" "} and is {" "}

      <a href="https://github.com/dsleazii/weather-react-2" target="_blank" rel="noreferrer"
      >
      
      open-source on Github</a></footer>
    </div></div>
  );
}

export default App;
