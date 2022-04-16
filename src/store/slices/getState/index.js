import { createSlice } from "@reduxjs/toolkit";

const api = {
    key: "bf0ed48128caaaf532992799b3c5c107",
    base: "http://api.openweathermap.org/data/2.5/"
  }

export const getStateSlice = createSlice({
    name:'getState',
    initialState:{
        estadoTiempo:[],
        query: '',
        weather: {}
    },
    reducers:{
        setEstadoTiempo:(state, action) => {
            state.estadoTiempo = action.payload
        },
        setQuery:(state, action) => {
            state.query = action.payload
        },
        setWeather:(state, action) => {
            state.weather = action.payload
        },
    }
})

export const {setEstadoTiempo, setQuery, setWeather} = getStateSlice.actions;



export const fetchGetEstadoDelTiempo = (evt, query) => (dispatch) => {
    if(evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            dispatch(setWeather(result))
            dispatch(setQuery(''))
            console.log(result)
          })
      }
}


export const queryValue = (value) => (dispatch) => {
    dispatch(setQuery(value))
}

export default getStateSlice.reducer