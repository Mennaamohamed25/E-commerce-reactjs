import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'
import Cart from '../Cart/Cart';
import styles from './NavBar.module.css'



export default function NavBar() {

  return (
    <>
     <Navbar className={styles.FullNavbar} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand >
<Link to='/'>
  <img className='w-75' src={Logo} alt="" />
</Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav" > */}
          <Nav className={styles.NavbarResponsive}>
          <li className="nav-item">
          <Link className={`nav-link active ${styles.LinksResponsive}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${styles.LinksResponsive}`} aria-current="page" to="shop">Shop</Link>
        </li>
  
       
          </Nav>
          <Cart/>
        {/* </Navbar.Collapse> */}
   
      </Container>
    </Navbar>
    </>
  )
}
