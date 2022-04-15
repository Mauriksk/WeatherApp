import React from 'react'
import { Location } from './Location'
import { Weather } from './Weather'

export const Dashboard = ({search, query, weather, setQuery}) => {
  return (
    <main>
        <div className='search-box'>
            <input 
                type="text" 
                className='search-bar'
                placeholder='Search'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
        <Location weather={weather}/>
        <Weather weather={weather}/>
    </main>
  )
}
