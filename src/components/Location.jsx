import React from 'react'

export const Location = ({weather}) => {

    const dataBuilder = (d) => {
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    
        let day = days[d.getDay()] 
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day} ${date} ${month} ${year}`
    }

  return (
      <div>
            {
                (typeof weather.main != "undefined")? 
                    (<div className='location-box'>
                        <div className='location'>{weather.name}, {weather.sys.country}</div>
                        <div className='date'>{dataBuilder(new Date())}</div>
                    </div>)
                    :(<div></div>)
            }
      </div>
    
  )
}
