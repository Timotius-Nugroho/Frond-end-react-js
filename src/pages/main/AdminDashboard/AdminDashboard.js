import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBarAdmin";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  SplitButton,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import styles from "./AdminDashboard.module.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container className={styles.bgCnt} fluid>
          <Container className={styles.bgCnt}>
            <Row>
              <Col md={8}>
                <p>Dashboard</p>
                <div className={styles.bgDiv}></div>
              </Col>
              <Col md={4}>
                <p>Filtered</p>
                <div className={styles.bgDiv}>
                  <DropdownButton
                    title="Select Movie"
                    id="bt"
                    variant="secondary"
                    className="text-center"
                  >
                    <Dropdown.Menu style={{ backgroundColor: "#73a47" }}>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </DropdownButton>
                  <DropdownButton
                    title="Select Premiere"
                    id="bt"
                    variant="secondary"
                    className="text-center"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    title="Select Location"
                    id="bt"
                    variant="secondary"
                    className="text-center"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </DropdownButton>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
export default Dashboard;
