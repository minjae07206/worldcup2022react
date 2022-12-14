import '../App.css';
import { Modal, Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { setCountryCard } from '../store';
function CountryCard() {
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    return (
        <div
            className="modal show modal-background"
            style={{ display: 'block', position: 'fixed', top: '100px'}}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{state.currentCountry.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Group: {state.currentCountry.group}</p>
                    <p>Appearances: {state.currentCountry.appearances}</p>
                    <p>Best performance: {state.currentCountry.bestPerformance}</p>
                    <p>Last performance: {state.currentCountry.lastPerformance}</p>
                    <p>Key layer: {state.currentCountry.keyPlayer}</p>
                    <p>Other players: 
                    {
                        state.currentCountry.otherPlayers.map((player)=>{
                            return " " + player + " /"
                        })
                    }
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={()=>dispatch(setCountryCard())} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export { CountryCard }