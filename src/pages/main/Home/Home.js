import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import Cards from "../../../components/Card/Cards";
import { Button, Image, Container, Row, Col, Form } from "react-bootstrap";
import dummy from "../../../assets/img/g9.png";
import line from "../../../assets/img/line.png";
import hero1 from "../../../assets/img/g1.png";
import hero2 from "../../../assets/img/g2.png";
import hero3 from "../../../assets/img/g3.png";
import styles from "./Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
      data: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
      moon: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      pagination: {},
      page: 1,
      limit: 3,
    };
  }
  render() {
    return (
      <>
        <NavBar />
        <Container fluid>
          <Row className="mt-5">
            <Col className="text-center" lg={6}>
              <div className={styles.centerContent}>
                <p className={styles.semiTitle}>
                  Nearest Cinema, Newest Movie,
                </p>
                <p className={styles.boldTitle}>Find out now!</p>
              </div>
            </Col>
            <Col className="text-center" lg={6}>
              <div className="p-2">
                <Image className="mr-3 mt-5" src={hero1} />
                <Image className="mr-3" src={hero2} />
                <Image className="mb-5" src={hero3} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="pl-5">
          <Row className="mt-5 ml-2 mr-2">
            <Col className="text-sm-left text-center" sm={6}>
              <div>
                <p className={styles.rightBold}>Now Showing</p>
                <img src={line} alt="..." />
              </div>
            </Col>
            <Col className="text-sm-right text-center" sm={6}>
              <p className={styles.leftPurple}>View all</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="ml-2 overflow-auto d-flex flex-row">
                {this.state.data.map((item, index) => {
                  return (
                    <div className="p-3 bd-highlight" key={index}>
                      <img src={dummy} alt="..." />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="pl-5">
          <Row className="mt-5 ml-2 mr-2">
            <Col className="text-sm-left text-center" sm={6}>
              <div>
                <p className={styles.rightBold}>Upcoming Movies</p>
                <br />
              </div>
            </Col>
            <Col className="text-sm-right text-center" sm={6}>
              <p className={styles.leftPurple}>View all</p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <div className="ml-3 overflow-auto d-flex flex-row">
                {this.state.moon.map((item, index) => {
                  return (
                    <Button
                      className={`${styles.btMoon} m-2`}
                      variant="outline-primary"
                      key={index}
                    >
                      <div className={styles.butCnt}>{item}</div>
                    </Button>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="ml-3 overflow-auto d-flex flex-row">
                {this.state.data.map((item, index) => {
                  return (
                    <div className="p-3 shadow" key={index}>
                      <Cards
                        data={{
                          movie_name: "John Wick",
                          movie_category: `Action ${item}`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="text-center pl-5 mt-5">
          <div className={`${styles.beforeFoot} shadow`}>
            <div>
              <p className={styles.semiTitle}>Be the vanguard of the</p>
              <p className={styles.boldTitle}>Moviegoers</p>
            </div>
            <div className={styles.form}>
              <Form>
                <Form.Group>
                  <div className="d-flex flex-sm-row flex-column align-items-center">
                    <Form.Control
                      className="mb-2"
                      type="email"
                      placeholder="Type your Email"
                    />
                    <Button
                      className={`${styles.btJoin} mb-2`}
                      variant="primary"
                    >
                      Join now
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className={`${styles.beforeFoot} pb-5`}>
              <p className={styles.semiText}>
                By joining you as a Tickitz member,
              </p>
              <p className={styles.semiText}>
                we will always send you the latest updates via email .
              </p>
            </div>
          </div>
        </Container>
        <Container className="pl-4">
          <Footer />
        </Container>
      </>
    );
  }
}

export default Home;
