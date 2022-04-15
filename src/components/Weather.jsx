import React from 'react'

export const Weather = ({weather}) => {
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



