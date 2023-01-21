import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Img from './image/cart.jpeg'
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import Profile from "./profile";
import './hometitle.css'
import { totalitems,search} from "../addtocartlogics";
import { useSelector } from "react-redux";

function Title(){
const item = useSelector(totalitems)
const filter = useSelector(search)

function Magnifyer(e){
filter = e.target.value
}
    return(
        <>
         <Navbar bg="dark" expand="lg" >
            <Container fluid  >
                <Navbar.Brand >
                    <img src={Img} height="50" width="50" />
                </Navbar.Brand>

                <Form className="d-flex change" >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={Magnifyer}
                    />
                    {/* <Button variant="outline-primary text-white">Search</Button> */}
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-bg icon nav-but"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='pe-5'>
                            <span class="material-symbols-outlined">
                            <Link to="home">home</Link>  
                            </span>
                        </Nav.Link>
                        <Nav.Link  className='pe-5'>
      <Link to="/Cart"> 
                       <span class="material-symbols-outlined">shopping_cart<Badge bg="secondary">{item.length==0?'':item.length}</Badge></span>
                       </Link>
                        </Nav.Link>
                        <Nav.Link  className='pe-5'>
                        <Profile/>
                        </Nav.Link>
                        <Nav.Link className='pe-5'>
                        </Nav.Link>
                    </Nav> 
 
                </Navbar.Collapse> 
             </Container>
        </Navbar> 
        </>
    )
}

export default Title