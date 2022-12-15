import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import {Groups} from './groups.js';
import {randomGroup, realGroup, resetContinueButton, setContinueButton} from '../store.js';

function Game () {
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    console.log(state.countries)
    return (
        <>
        <div className='game-buttons'>
        <Button onClick={()=>{dispatch(realGroup()); dispatch(resetContinueButton())}} variant="secondary" size="lg" className='game-button'>
          Large button
        </Button>
        <Button variant="secondary" size="lg" className='game-button'>
        Large button
        </Button>
        <Button onClick={()=>{dispatch(randomGroup()); dispatch(resetContinueButton())}} variant="secondary" size="lg" className='game-button'>
        Random Groups
        </Button>
        <Button onClick={()=>dispatch(setContinueButton())} variant="secondary" size="lg" className='game-button'>Continue</Button>
        </div>
        <Groups></Groups>
        
        </>
        
        
    )
}

export {Game};