import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import COUNTRY from './components/Country/COUNTRY';
import CART from './components/CART/CART';

function App() {

  const [countries,setCountries]=useState([]);
  const [cart,setCart] = useState([]);

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

  const handleAddCountry = (country) =>{
    const newCart = [...cart,country];
    setCart(newCart);

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>County : {countries.length}</h1>
        <h4>Country Added : {cart.length}</h4>
        <CART cart={cart}></CART>
        <ul>
          {
            countries.map(country=> <COUNTRY country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></COUNTRY>)
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
