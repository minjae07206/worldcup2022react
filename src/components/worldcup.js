import {Flag} from './flag.js';
import { useSelector, useDispatch} from "react-redux";
import '../App.css';
import {CountryCard} from './countrycard.js';
function Worldcup () {
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    return (
        <>
        <div className='flags'>
        {
            state.countries.map((country)=>{
                return <Flag country={country}></Flag>
            })
        }
        </div>
        <div>
        {
            state.showCountryCard === true ? 
            <CountryCard></CountryCard>
            : null
        }
        </div>
        
        </>
    )
}

export {Worldcup}