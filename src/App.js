
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import arthall from './img/arthall.jpg'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">이지연습실</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">소개</Nav.Link>
              <Nav.Link href="#link">예약</Nav.Link>
              <Nav.Link href="#link">오시는길</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>Art Hall</h4>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>Art Hall</h4>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>Art Hall</h4>
      <button>예약</button>
      
      </div>

      
    
  </div>
</div> 
      
    </div>
  );
}

export default App;
