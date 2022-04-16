import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetEstadoDelTiempo, queryValue } from '../store/slices/getState';

import { Location } from './Location'
import { Weather } from './Weather'

export const Dashboard = () => {
  
  const dispatchQuery = useDispatch()
  const dispatchSearch = useDispatch()
  const {query} = useSelector( state => state.getState )

  return (
    <main>
        <div className='search-box'>
            <input 
                type="text" 
                className='search-bar'
                placeholder='Search'
                value={query}
                onChange={e => dispatchQuery(queryValue(e.target.value))}
                onKeyPress={e => dispatchSearch(fetchGetEstadoDelTiempo(e,query))}
            />
        </div>
        <Location />
        <Weather />
    </main>
  )
}
