import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.scss'
import logo from '../assets/logo_busta_1.jpeg';
import jenkins from '../assets/jenkins.svg';
import aws from '../assets/aws.png';
import react_icon from '../assets/react_icon.png';
import { NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import { CaretDownFill, CaretDown, ThreeDotsVertical } from 'react-bootstrap-icons';


function Navbar() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  const CustomDropdownMenu = React.forwardRef(({ children }, ref) => (
    <div className='dropdown-menu'
      ref={ref}
    >
      {children}
    </div>
  ));

  const CustomDropdownItem = React.forwardRef(({ children, href }, ref) => (
    <a className='dropdown-item-custom-flex dropdown-item' href={href}
      ref={ref}>
      {children}

    </a>
  ));

  const CustomDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a className='menu-item-custom nav-link dropdown-toggle-custom'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {children}
      {!show && <CaretDown />}
      {show && <CaretDownFill />}

    </a>
  ));

  return (
    <nav class="navbar navbar-expand-lg navbarCustom">
      <a class="navbar-brand" href="#">
        <img src={logo} className='logo' />
      </a>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Solutions</a>
          <a class="nav-item nav-link" href="#">Contact</a>
          <a class="nav-item nav-link" href="#">About Us</a>
        </div>
      </div>

      <a class="contact">
        (540)470-1142
      </a>
    </nav>
  );

}

export default Navbar;

    /*
    <Navbar className='navBar mainNavBar' sticky="top" expand="lg">
      <Container className='container-custom'>
        <Navbar.Brand href="/">
          <img src={logo} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Dropdown
              className='dropdown-custom menu-item-custom'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Dropdown.Toggle as={CustomDropdownToggle}>Services</Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu' >
                <Dropdown.Item as={CustomDropdownItem} href="/devops-solutions">
                  <div className='dropdown-item-custom-text'>DevOps Solutions</div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={CustomDropdownItem} href="/cloud-solutions">
                  <div className='dropdown-item-custom-text'>Cloud Consulting</div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={CustomDropdownItem} href="/web-development">
                  <div className='dropdown-item-custom-text'>Web Development</div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={CustomDropdownItem} href="/others">
                  <div className='dropdown-item-custom-text'>Others</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar className='navBar mainNavBar' sticky="top" expand="lg">
      <Container className='container-custom'>
        <Navbar.Brand href="/">
          <img src={logo} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Dropdown
              className='dropdown-custom menu-item-custom'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Dropdown.Toggle as={CustomDropdownToggle}>Services</Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu'>
                <Dropdown.Item as={CustomDropdownItem} href="/devops-solutions">
                  <div className='dropdown-item-custom-text'>DevOps Solutions</div>
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={CustomDropdownItem} href="/cloud-solutions">
                  <div className='dropdown-item-custom-text'>Cloud Consulting</div>
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={CustomDropdownItem} href="/web-development">
                  <div className='dropdown-item-custom-text'>Web Development</div>
                </Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={CustomDropdownItem} href="/others">
                  <div className='dropdown-item-custom-text'>Others</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className='menu-divider nav-link' />
            <Nav.Link href="/about" className="menu-item-custom">Who we are</Nav.Link>
            <div className='menu-divider nav-link' />
            <Nav.Link href="/contact" className="menu-item-custom">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    */
