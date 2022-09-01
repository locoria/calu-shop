import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbar = () => {
  return (
    
<div>
<Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Calu Shop </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#New In">New In </Nav.Link>
      </Nav>
      <div>
      <CartWidget />
       </div>
    </Container>
  </Navbar>
  </div>



);
}

export default Navbar;