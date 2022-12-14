import '../App.css';
import {useDispatch, useSelector} from 'react-redux';
import { setCountryCard, setCurrentCountry} from '../store.js';
function Flag (props) {
    let dispatch = useDispatch();
    let state = useSelector((state)=>state)
    return <img onClick={()=>{
        dispatch(setCountryCard());
        dispatch(setCurrentCountry(props.country));
    }} className='flag' src={`${process.env.PUBLIC_URL}/flags/${props.country.image}`} />
}
export {Flag}