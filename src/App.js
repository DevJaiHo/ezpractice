// eslint-disable-next-line
import data from './data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import arthall from './img/arthall.jpg'


function App() {
let [rooms] = useState(data)

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
      <h4>{rooms[0].title}</h4>
      <h6>{rooms[0].location}</h6>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>{rooms[1].title}</h4>
      <h6>{rooms[1].location}</h6>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>{rooms[2].title}</h4>
      <h6>{rooms[2].location}</h6>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>{rooms[3].title}</h4>
      <h6>{rooms[3].location}</h6>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>{rooms[4].title}</h4>
      <h6>{rooms[4].location}</h6>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>{rooms[5].title}</h4>
      <h6>{rooms[5].location}</h6>
      <button>예약</button>
      
      </div>

      <div className="col-md-4">
      <img src={arthall} width="80%"/>
      <h4>{rooms[6].title}</h4>
      <h6>{rooms[6].location}</h6>
      <button>예약</button>
      
      </div>

      
    
  </div>
</div> 
      
    </div>
  );
}

export default App;
