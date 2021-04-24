import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Image } from "react-bootstrap";
import logo from "../../assets/img/logo_1.png";
import dummyPp from "../../assets/img/pp.png";
import { Search } from "react-bootstrap-icons";
import styles from "./NavBar.module.css";

class NavBarX extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand href="#">
            <Image src={logo} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Link className="ml-sm-5" to="#">
                <span className={styles.link}>Dashboard</span>
              </Link>
              <Link className="ml-sm-5" to="#">
                <span className={styles.link}>Manage Movie</span>
              </Link>
              <Link className="ml-sm-5" to="#">
                <span className={styles.link}>Manage Schedule</span>
              </Link>
            </Nav>
            <Nav>
              <p className="mr-sm-4 mt-3">
                <span className={styles.link}>Location</span>
              </p>
              <div className="mr-sm-4 mt-3">
                <Search />
              </div>
              <div className="mr-sm-4 mt-0">
                <Image src={dummyPp} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBarX;
