import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Groups } from './groups.js';
import { Knockout } from './knockout.js';
import { randomGroup, realGroup, resetContinueButton, setContinueButton, sortGroup, setRoundOf16, sortKnockout, resetKnockout, possibleGroup} from '../store.js';
// if tied use one of the three other players, randomly.
function Game() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <>
      <div className='game-buttons'>
        <Button onClick={() => { dispatch(realGroup()); dispatch(resetContinueButton()); dispatch(resetKnockout()) }} variant="secondary" size="lg" className='game-button'>
          2022 World cup Groups
        </Button>
        <Button onClick={() => { dispatch(possibleGroup()); dispatch(resetContinueButton()); dispatch(resetKnockout()) }} variant="secondary" size="lg" className='game-button'>
          Possible Groups
        </Button>
        <Button onClick={() => { dispatch(randomGroup()); dispatch(resetContinueButton()); dispatch(resetKnockout()) }} variant="secondary" size="lg" className='game-button'>
          Random Groups
        </Button>
        {
          state.continueButton === 6 ?
            <Button onClick={() => {
              dispatch((resetContinueButton())); dispatch(resetKnockout()); dispatch(realGroup());
            }} variant="secondary" size="lg" className='game-button'>
              Reset
            </Button>
            : <Button onClick={() => {
              dispatch(setContinueButton());
              if (state.continueButton === 0) {
                dispatch(sortGroup());
              } else if (state.continueButton === 1) {
                dispatch(setRoundOf16(state.countries));
              } else if (state.continueButton >= 2 && state.continueButton <= 5) {
                dispatch(sortKnockout());
              }
            }
            } variant="secondary" size="lg" className='game-button'>Continue</Button>
        }

      </div>
      <Groups></Groups>
      <Knockout></Knockout>

    </>


  )
}

export { Game };