import { configureStore } from '@reduxjs/toolkit'
import getState from './slices/getState'



export default configureStore({
    reducer:{
        getState
    }
})
