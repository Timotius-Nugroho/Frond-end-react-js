import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import Seat from "../../../components/Seat/Seat";
import { Button, Image, Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Order.module.css";
import dummyPremiere from "../../../assets/img/logo_2.png";
import line from "../../../assets/img/line_order.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
      setSeatAlphabet: ["A", "B", "C", "D", "E", "F", "G"],
      setSeatNumberA: ["1", "2", "3", "4", "5", "6", "7"],
      setSeatNumberB: ["8", "9", "10", "11", "12", "13", "14"],
    };
  }

  bookingSeat = (seat) => {
    let tmpSelectedSeat = this.state.selectedSeat;
    const index = tmpSelectedSeat.indexOf(seat);
    if (this.state.reservedSeat.indexOf(seat) < 0) {
      if (index < 0) {
        this.setState({
          selectedSeat: [...this.state.selectedSeat, seat],
        });
        console.log("seat IN", seat);
      } else {
        tmpSelectedSeat.splice(index, 1);
        this.setState({
          selectedSeat: tmpSelectedSeat,
        });
      }
    } else {
      console.log("Seat reserved");
    }
  };

  render() {
    const {
      reservedSeat,
      selectedSeat,
      setSeatAlphabet,
      setSeatNumberA,
      setSeatNumberB,
    } = this.state;
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
              <Col lg={8}>
                <p className={styles.title}>Choose Your Seat</p>
                <div className={styles.bgDiv}>
                  <Card style={{ width: "480px" }}>
                    <Card.Body>
                      <p className="text-center">screen</p>
                      <div className={styles.screen}>
                        <Image src={line} fluid />
                      </div>
                      {setSeatAlphabet.map((item, index) => {
                        return (
                          <Seat
                            key={index}
                            seatAlphabet={item}
                            reserved={reservedSeat}
                            selected={selectedSeat}
                            bookingSeat={this.bookingSeat.bind(this)}
                          />
                        );
                      })}
                      <Row className={styles.rowSeat}>
                        <Col className={styles.colSeat}>
                          <div className={styles.seat}></div>
                        </Col>
                        {setSeatNumberA.map((item, index) => {
                          return (
                            <Col key={index} className={styles.colSeat}>
                              <div className={`${styles.seat} text-center`}>
                                {item}
                              </div>
                            </Col>
                          );
                        })}

                        <Col className={styles.colSeat}></Col>

                        {setSeatNumberB.map((item, index) => {
                          return (
                            <Col key={index} className={styles.colSeat}>
                              <div className={`${styles.seat} text-center`}>
                                {item}
                              </div>
                            </Col>
                          );
                        })}
                      </Row>
                    </Card.Body>
                    <Card.Body>
                      <Button
                        variant="primary"
                        size="md"
                        block
                        onClick={this.booking}
                      >
                        Booking
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col lg={4}>
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
                          {this.state.selectedSeat.map((item, index) => {
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
