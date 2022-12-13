import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';

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
    </div>
  );
}

export default App;
