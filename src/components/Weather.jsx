import React from 'react'
import { useSelector } from 'react-redux'

export const Weather = () => {

  const {weather} = useSelector( state => state.getState )
  return (<>
    {
      (typeof weather.main != "undefined")? 
      <div className='weather-box'>
        <div className='temp'>{Math.round((weather.main.temp)-273.15)}°C</div>
        <div className='weather'>{weather.weather[0].main}</div>
      </div>
    : <div></div>
    }
  </>
  )
}



