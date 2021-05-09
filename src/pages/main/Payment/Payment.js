import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import axiosApiIntances from "../../../utils/axios";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  Button,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";
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
      movieName: "",
      premiereId: 0,
      premiereName: "",
      premierePrice: 0,
      selectedSeat: [],
      showTimeClock: "",
      showTimeDate: "2021-01-01",
      showTimeId: "",
      paymentMethod: "",
      showModal: false,
      modalMsg: "Please select your payment method !",
      listPaymentMethod1: [
        [gpay, "gpay"],
        [visa, "visa"],
        [gopay, "gopay"],
        [paypal, "paypal"],
      ],
      listPaymentMethod2: [
        [dana, "dana"],
        [bca, "Bank BCA"],
        [bri, "Bank BRI"],
        [ovo, "ovo"],
      ],
    };
  }

  componentDidMount() {
    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
    this.setState({
      ...this.state,
      ...bookingInfo,
    });
  }

  postBookingData = (data) => {
    axiosApiIntances
      .post("booking/book", data)
      .then((res) => {
        console.log(res);
        this.setState({
          modalMsg: "Booking Succes !",
          showModal: true,
        });
        localStorage.removeItem("bookingInfo");
        setTimeout(() => {
          this.setState({ showModal: false });
          this.props.history.push(`/`);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          modalMsg: "Booking Failed !",
          showModal: true,
        });
      });
  };

  handlePayment = (method) => {
    this.setState({
      paymentMethod: method,
    });
  };

  handlePayOrder = () => {
    const {
      premiereId,
      showTimeId,
      selectedSeat,
      premierePrice,
      paymentMethod,
    } = this.state;

    if (paymentMethod !== "") {
      const dataBook = {
        premiere_id: premiereId,
        show_time_id: showTimeId,
        booking_ticket: selectedSeat.length,
        booking_total_price: selectedSeat.length * premierePrice,
        booking_payment_method: paymentMethod,
        booking_status: "succes",
        bookingSeat: selectedSeat,
      };
      console.log(dataBook);
      if (selectedSeat.length === 0) {
        this.setState({
          modalMsg: "Booking Failed, Data Movie is Empty !",
          showModal: true,
        });
        setTimeout(() => {
          this.setState({ showModal: false });
          this.props.history.push(`/`);
        }, 2000);
      } else {
        this.postBookingData(dataBook);
      }
    } else {
      this.setState({
        showModal: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const {
      movieName,
      premiereName,
      premierePrice,
      selectedSeat,
      showTimeClock,
      showTimeDate,
      listPaymentMethod1,
      listPaymentMethod2,
      paymentMethod,
      showModal,
      modalMsg,
    } = this.state;

    // console.log(this.state);
    // console.log(paypal);
    return (
      <>
        <Modal show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.modal}>{modalMsg}</Modal.Title>
          </Modal.Header>
        </Modal>
        <NavBar isAdminPage={false} />
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
                        <span>
                          <Moment format="dddd, LL">{showTimeDate}</Moment>
                        </span>{" "}
                        at <span>{showTimeClock}</span>
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Movie title</p>
                      <p className={styles.normal}>{movieName}</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Cinema name</p>
                      <p className={styles.normal}>{premiereName}</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Number of tickets</p>
                      <p className={styles.normal}>{selectedSeat.length}</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <p className={styles.semi}>Total Payment</p>
                      <p className={styles.price}>
                        <span>$</span>
                        {selectedSeat.length * premierePrice}
                        <span>,00</span>
                      </p>
                    </div>
                  </div>
                  <p className={styles.title}>Choose a Payment Method</p>
                  <div className={`${styles.bgDiv} p-5 mb-4`}>
                    <Row className="mb-4">
                      {listPaymentMethod1.map((item, index) => {
                        return (
                          <Col key={index}>
                            <Button
                              className={`${styles.btnPayment} ${
                                paymentMethod === item[1]
                                  ? styles.btnPaymentSelect
                                  : ""
                              }`}
                              variant="outline-secondary"
                              onClick={() => {
                                this.handlePayment(item[1]);
                              }}
                            >
                              <Image src={item[0]} fluid />
                            </Button>
                          </Col>
                        );
                      })}
                    </Row>
                    <Row className="mb-4">
                      {listPaymentMethod2.map((item, index) => {
                        return (
                          <Col key={index}>
                            <Button
                              className={`${styles.btnPayment} ${
                                paymentMethod === item[1]
                                  ? styles.btnPaymentSelect
                                  : ""
                              }`}
                              variant="outline-secondary"
                              onClick={() => {
                                this.handlePayment(item[1]);
                              }}
                            >
                              <Image src={item[0]} fluid />
                            </Button>
                          </Col>
                        );
                      })}
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
                      <Link to="/main/order">Previous step</Link>
                    </Button>
                    <Button
                      className={styles.btPay}
                      variant="primary"
                      onClick={() => {
                        this.handlePayOrder();
                      }}
                    >
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
