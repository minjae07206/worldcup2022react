import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';
import {Worldcup} from './components/worldcup.js';
import {Game} from './components/game.js';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {realGroup} from './store.js';
// make possible group function
// change color to purple?
// add flag?
// change winners to Bold?
// 역대 우승자, 준우승자 개시
// first, put all the first seeds randomly into groups. then put second seeds into groups, then third, then four
function App() {
  let dispatch = useDispatch();
  let state = useSelector((state)=>state);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand>
            2022 World Cup
            </Navbar.Brand>
          </Link>
          <Link to="/game" style={{ textDecoration: 'none' }}>
            <Navbar.Brand className='navbar-left'>
            Game
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <Worldcup></Worldcup> }/>
        <Route path="/game" element={ <Game></Game> }/>
      </Routes>
    </div>
  );
}

export default App;
