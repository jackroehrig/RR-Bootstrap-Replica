import {Navbar, Button, Nav, Container} from 'react-bootstrap'

function TopBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid className='mx-4'>
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                    <img src="https://www.instacart.com/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt='Instacart Logo'/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{borderRadius: '30px', backgroundColor: '#0AAD0A'}}>Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar