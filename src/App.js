import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import COUNTRY from './components/Country/COUNTRY';

function App() {

  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
      console.log(data)
      const names = data.map(country=> country.name);
    })
    .catch(error=>console.log(error))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>County : {countries.length}</h1>
        <ul>
          {
            countries.map(country=> <COUNTRY country={country} key={country.alpha3Code}></COUNTRY>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
