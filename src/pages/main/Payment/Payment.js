import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBarLogin";
import { Container, Form, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./Payment.module.css";
import line from "../../../assets/img/line_long.png";
import bca from "../../../assets/img/bca.png";
import bri from "../../../assets/img/bri.png";
import dana from "../../../assets/img/dana.png";
import gopay from "../../../assets/img/gopay.png";
import gpay from "../../../assets/img/gpay.png";
import ovo from "../../../assets/img/ovo.png";
import visa from "../../../assets/img/visa.png";
import paypal from "../../../assets/img/paypal.png";
import warning from "../../../assets/img/warning.png";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
      data: [],
      pagination: {},
      page: 1,
      limit: 3,
    };
  }

  render() {
    return (
      <>
        <NavBar />
        <Container className={styles.bgCnt} fluid>
          <Container className={`${styles.bgCnt} pt-5 pb-5`}>
            <div></div>
            <Row>
              <Col md={8}>
                <div>
                  <p className={styles.title}>Payment Info</p>
                  <div className={`${styles.bgDiv} p-5 mb-5`}>
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Date & time</p>
                      <p className={styles.normal}>
                        <span>date</span> at <span>time</span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Movie title</p>
                      <p className={styles.normal}>movieName</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Cinema name</p>
                      <p className={styles.normal}>premiereName</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Number of tickets</p>
                      <p className={styles.normal}>booking_ticket</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Total Payment</p>
                      <p className={styles.price}>
                        <span>$</span>bookingTotalPrice<span>,00</span>
                      </p>
                    </div>
                  </div>
                  <p className={styles.title}>Choose a Payment Method</p>
                  <div className={`${styles.bgDiv} p-5 mb-4`}>
                    <Row className="mb-4">
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={gpay} fluid />
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={visa} fluid />
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={gopay} fluid />
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={paypal} fluid />
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={dana} fluid />
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={bca} fluid />
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={bri} fluid />
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className={styles.btnPayment}
                          variant="outline-secondary"
                        >
                          <Image src={ovo} fluid />
                        </Button>
                      </Col>
                    </Row>
                    <div className="d-flex flex-row justify-content-center mb-4">
                      <div>
                        <Image src={line} fluid />
                      </div>
                      <p className={styles.mini}>or</p>
                      <div>
                        <Image src={line} fluid />
                      </div>
                    </div>
                    <Row>
                      <Col className={`${styles.mini} text-center`}>
                        Pay via cash.
                        <span style={{ color: "#5F2EEA" }}>
                          {" "}
                          See how it work
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-end mb-5">
                    <Button
                      className={`${styles.btPrevious} mb-3`}
                      variant="outline-primary"
                    >
                      Previous step
                    </Button>
                    <Button className={styles.btPay} variant="primary">
                      Pay your order
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <p className={styles.title}>Personal Info</p>
                  <div className={`${styles.bgDiv} p-5 mb-4`}>
                    <Form>
                      <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Jonas" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="jonas@gmail.com"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="08322xxxx" />
                      </Form.Group>
                      <div
                        className={`${styles.warning} ${styles.mini} text-center p-2`}
                      >
                        <Image src={warning} fluid />
                        <span className={styles.mini}>
                          {" "}
                          Fill your data correctly
                        </span>
                      </div>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Payment;
