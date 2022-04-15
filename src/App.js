import { useState } from 'react';
import { Dashboard } from './components/Dashboard';

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const api = {
    key: "bf0ed48128caaaf532992799b3c5c107",
    base: "http://api.openweathermap.org/data/2.5/"
  }
  
  const search = (evt) => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('')
          console.log(result)
        })
    }
  }


  return (
    <div className="App">
      <Dashboard setQuery={setQuery} search={search} query={query} weather={weather} />
    </div>
  );
}

export default App;
