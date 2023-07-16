
import React from "react";
import { Link ,NavLink ,useLocation,useNavigate,useParams} from "react-router-dom";
import {Navbar,Nav,Button,FormControl,Form,Brand,Container,NavDropdown,Carousel,Card, Row,Col} from 'react-bootstrap';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';

const Header = (props)=>
{  
    let routeObject = useLocation();
    console.log(routeObject);
    console.log(routeObject.pathname);
    let LoggedInUser = '';
    let userId = '';
    let name = '';
    if(localStorage.getItem('user-info'))
    {
        LoggedInUser = JSON.parse(localStorage.getItem('user-info'));
        console.log(LoggedInUser);
        userId = LoggedInUser.id;
        name = LoggedInUser.name;
    }
   
    
    const navigate = useNavigate();
   
   function logout()
   {
        localStorage.removeItem("user-info");
        navigate('/login')
   }


    ///histoyr = useHistory();
    return (
     <>
        

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container > 
        <Navbar.Brand href="#home">Student Portal </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto">
            
            {
                (userId) ? 
                <>
                <Link to="/addstudent" className="nav-link">Add Student</Link>
                <Link to="/liststudent" className="nav-link">Student Listing</Link>
                <Link to="/counterpage" className="nav-link">My counter</Link>
                </>
                :
                <>
                <Link to="/Register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
                </>
            }

           
           
          </Nav>

          {
          (userId) ? 
              <NavDropdown title={name.toUpperCase()} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="javascript:void(0);"  onClick={logout}> Logout </NavDropdown.Item>
              </NavDropdown>
              :''
          }  
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
           
   
   {/* dsadsadsad */}

            
            
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>

      {!(routeObject.pathname=='/counterpage') ?    
    <Container >
      
      <Row className="mr20">
        <Col>
        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/180x100/000/ccc&text=test" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/180x100/000/ccc&text=test" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://dummyimage.com/180x100/000/ccc&text=test" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </Col>
      </Row>
    </Container>
      : 
      ''
     }




  
    
     </>
    )

}

export default Header;