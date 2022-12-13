import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';
import {Worldcup} from './components/worldcup.js'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            2022 World Cup
          </Navbar.Brand>
          <Navbar.Brand className='navbar-left'>
            Game
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Worldcup></Worldcup>
    </div>
  );
}

export default App;
