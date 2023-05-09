import logo from '../assets/logo_dcp.png';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/navbar.scss'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
function header() {
  return (
    <div>
      <div className='navbarBordebottom'>
       <div className='container'>
        
       <Navbar className='NoirProSemiBold' bg="nav" variant="black"
          sticky="top" expand="lg" collapseOnSelect>
            
          <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="180px" height="90px" />
          </Navbar.Brand>

          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <NavDropdown title="Especialidades" >
                <NavDropdown.Item className='NoirProRegular' as={Link} to="/ClimaOrganizacional">DO: Clima Organizacional</NavDropdown.Item>
                <NavDropdown.Item className='NoirProRegular' as={Link} to="/PotencialHumano">Desarrollo del potencial humano</NavDropdown.Item>
                <NavDropdown.Item className='NoirProRegular' as={Link} to="/BusquedaTalento">Búsqueda de talentos</NavDropdown.Item>
                <NavDropdown.Item className='NoirProRegular' as={Link} to="/EvaluacionTalento">Evaluación de talentos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Metodologia">Metodología de Acción</Nav.Link>
              <Nav.Link as={Link} to="/Postulate">¡Postúlate!</Nav.Link>
              <Nav.Link as={Link} to="/Recursos">Recursos</Nav.Link>
              <Nav.Link as={Link} to="/Social">DPC Social</Nav.Link>
              <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
             
              <Button className='boton NoirProRegular' as={Link} to="/Contactanos" variant="primary">Contáctanos</Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
       </div>
      </div>

      <section>
        <Outlet>


        </Outlet>
      </section>
    </div>
  );
}
export default header