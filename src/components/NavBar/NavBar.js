import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button, Image, Modal, Form } from "react-bootstrap";
import logo from "../../assets/img/logo_1.png";
import { Search } from "react-bootstrap-icons";
import styles from "./NavBar.module.css";

class NavBarX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {},
      page: 1,
      limit: 3,
      isShow: false,
    };
  }

  handleClose = () => {
    this.setState({
      isShow: false,
    });
  };
  handleShow = () => {
    this.setState({
      isShow: true,
    });
  };

  render() {
    const { isShow } = this.state;
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
              <Link className="ml-sm-5" to="/learning/basic-react">
                <Nav.Link href="#Movies">
                  <span className={styles.link}>Home</span>
                </Nav.Link>
              </Link>
              <Link className="ml-sm-5" to="/learning/basic-home">
                <Nav.Link href="#Cinemas">
                  <span className={styles.link}>Payment</span>
                </Nav.Link>
              </Link>
              <Link className="ml-sm-5" to="#">
                <Nav.Link href="#Buy Ticket">
                  <span className={styles.link}>Profile</span>
                </Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <p className="mr-sm-4 mt-3">
                <span className={styles.link}>Location</span>
              </p>
              <div className="mr-sm-4 mt-3" onClick={this.handleShow}>
                <Search className={styles.search} />
              </div>
              <Modal show={isShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Movie Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Type your movie name here"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
              </Modal>
              <div className="mr-sm-4 mt-2">
                <Button className={(styles.link, styles.btNav)}>Sign Up</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBarX;
