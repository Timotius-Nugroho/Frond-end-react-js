import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import Cards from "../../../components/Card/Cards";
import {
  Button,
  Image,
  Container,
  Row,
  Col,
  Form,
  Card,
} from "react-bootstrap";
import styles from "./Order.module.css";
import dummyPremiere from "../../../assets/img/logo_2.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingSeat: ["A1", "A2", "A3", "A2", "A2", "A2"],
    };
  }

  render() {
    return (
      <>
        <Container
          className={`${styles.movieBtn} d-flex flex-row justify-content-between pl-5 pr-5 pt-3 pb-3`}
          fluid
        >
          <p className={styles.textMovieBtn}>MovieName</p>
          <Button className={styles.changeMovieBtn} variant="light">
            Change movie
          </Button>
        </Container>
        <Container className={styles.bgCnt} fluid>
          <Container className={styles.bgCnt}>
            <Row>
              <Col md={8}>
                <p className={styles.title}>Choose Your Seat</p>
                <div className={styles.bgDiv}>sasadawa</div>
              </Col>
              <Col md={4}>
                <p className={styles.title}>Order Info</p>
                <Card
                  style={{ width: "382px", margin: "auto" }}
                  className="shadow"
                >
                  <Card.Body>
                    <Card.Text className="pb-3 mt-3">
                      <div className={styles.cardImg}>
                        <Image src={dummyPremiere} style={{ width: "120px" }} />
                        <p className={`${styles.titleSmall} pt-2`}>
                          premiereName <span>Cinema</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className={styles.semi}>Movie selected</p>
                        <p className={styles.semi} style={{ color: "black" }}>
                          movieName
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className={styles.semi}>showTimeDate</p>
                        <p className={styles.semi} style={{ color: "black" }}>
                          showTimeClock
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className={styles.semi}>One ticket price</p>
                        <p className={styles.semi} style={{ color: "black" }}>
                          <span>$</span>
                          premierePirce
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className={styles.semi}>Seat choosed</p>
                        <p className={styles.semi} style={{ color: "black" }}>
                          {this.state.bookingSeat.map((item, index) => {
                            return <span key={index}>{`${item}, `}</span>;
                          })}
                        </p>
                      </div>
                    </Card.Text>
                    <hr />
                    <Card.Text>
                      <div className="d-flex flex-row justify-content-between">
                        <p
                          className={styles.titleSmall}
                          style={{ fontWeight: "600" }}
                        >
                          Total payment
                        </p>
                        <p
                          className={styles.titleSmall}
                          style={{ fontWeight: "600", color: "#5F2EEA" }}
                        >
                          <span>$</span>
                          bookingTotalPrice
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default Home;
