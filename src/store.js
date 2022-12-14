import { configureStore, createSlice } from '@reduxjs/toolkit';
import countryData from './data.js' 

let countries = createSlice({
    name: 'countries',
    initialState: countryData
})

let showCountryCard = createSlice({
    name : 'countryCard',
    initialState : false,
    reducers : {
        setCountryCard(state) {
            if (state === false) {
                return true
            } else {
                return false
            }
        }
    }
})

let currentCountry = createSlice({
    name : 'currentCountry',
    initialState : {},
    reducers : {
        setCurrentCountry(state, country){
            return country.payload
        }
    }
})
export default configureStore({
  reducer: {
    countries : countries.reducer,
    showCountryCard : showCountryCard.reducer,
    currentCountry : currentCountry.reducer,
   }
}) 

export let {setCountryCard} = showCountryCard.actions;
export let {setCurrentCountry} = currentCountry.actions;