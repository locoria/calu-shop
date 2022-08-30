import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar () {
  return(

<Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Calu Shop </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#New In">New In </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)
}

export default Navbar;
