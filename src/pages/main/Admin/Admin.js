import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBarLogin";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";
import styles from "./Admin.module.css";
import { Plus, GeoAlt } from "react-bootstrap-icons";
import dummy from "../../../assets/img/g9.png";
import dummyPremiere from "../../../assets/img/logo_2.png";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
      data: [],
      premiere: [1, 2, 3, 4, 5, 6],
      pagination: {},
      page: 1,
      limit: 3,
    };
  }

  render() {
    return (
      <>
        <NavBar />
        <Container className={`${styles.bgCnt} pt-5 pb-5`} fluid>
          <Container className={styles.bgCnt}>
            <Row>
              <Col md={8}>
                <p className={styles.title}>Movie Description</p>
                <div className={`${styles.bgDiv} ${styles.semi} p-5`}>
                  <Row>
                    <Col sm={4}>
                      <Image
                        className={`${styles.hero} p-4 mb-4`}
                        src={dummy}
                        fluid
                      />
                    </Col>
                    <Col sm={8}>
                      <Form>
                        <Form.Group>
                          <Form.Label>Movie Name</Form.Label>
                          <Form.Control type="text" placeholder="movieName" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Movie Category</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="movieCategory"
                          />
                        </Form.Group>
                        <Form.Group as={Row}>
                          <Col xs={6}>
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control type="date" />
                          </Col>
                          <Col xs={3}>
                            <Form.Label>Hour</Form.Label>
                            <Form.Control type="text" placeholder="2" />
                          </Col>
                          <Col xs={3}>
                            <Form.Label>Minute</Form.Label>
                            <Form.Control type="text" placeholder="30" />
                          </Col>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group as={Row}>
                          <Col xs={4}>
                            <Form.Label>Director</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="movieDirector"
                            />
                          </Col>
                          <Col xs={8}>
                            <Form.Label>Casts</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="movieCasts"
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Synopsis</Form.Label>
                          <Form.Control
                            size="lg"
                            type="text"
                            placeholder="movieSynopsis"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4}>
                <p className={styles.title}>Premiere Location</p>
                <div className={`${styles.bgDiv} p-4 mb-5`}>
                  <Form>
                    <InputGroup className="mb-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <GeoAlt />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl type="text" placeholder="Location" />
                    </InputGroup>
                  </Form>
                  <div className="d-flex flex-wrap justify-content-center">
                    {this.state.premiere.map((item, index) => {
                      return (
                        <div key={index}>
                          <Image
                            className="p-3"
                            src={dummyPremiere}
                            style={{ width: "100px" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className={styles.title}>Showtimes</p>
                <div className={`${styles.bgDiv} ${styles.semi} p-4`}>
                  <Form.Group>
                    <Form.Control type="date" />
                  </Form.Group>
                  <div className="d-flex flex-wrap">
                    <Button className={styles.btPlus} variant="outline-primary">
                      <Plus />
                    </Button>
                    {this.state.premiere.map((item, index) => {
                      return (
                        <div className="p-3" key={index}>
                          08:00
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5">
            <p className={styles.title}>Sales Chart</p>
            <div
              className={`${styles.bgDiv} ${styles.semi} pl-5 pr-5 pt-3 pb-3`}
            >
              <div className="d-flex flex-row">
                <Button className={`${styles.btChart} pr-3`} variant="link">
                  Based on Movie
                </Button>
                <Button className={`${styles.btChart} pr-3`} variant="link">
                  Based on Location
                </Button>
              </div>
            </div>
          </Container>
        </Container>
        <Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default MovieDetail;
