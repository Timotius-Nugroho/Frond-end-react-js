import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBarLogin";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  Button,
  Alert,
} from "react-bootstrap";
import styles from "./Profile.module.css";
import { connect } from "react-redux";
import { updateProfile } from "../../../redux/action/updateProfile";
import { logout } from "../../../redux/action/auth";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        userPhoneNumber: "",
        image: null,
        userEmail: "",
        userPassword: "",
        CuserPassword: "",
      },
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleUpdateProfile = (event) => {
    const {
      firstName,
      lastName,
      userPhoneNumber,
      image,
      userEmail,
    } = this.state.form;

    event.preventDefault();
    // console.log("FORM SIAP UPLOAD", this.state.form);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("userPhoneNumber", userPhoneNumber);
    formData.append("image", image);

    console.log("cari fungsi", this.props);
    this.props
      .updateProfile(formData)
      .then((res) => {
        console.log("RES UPDATE", res);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setTimeout(() => {
          // log out here
          this.props.logout();
          this.props.history.push("/login");
        }, 2000);
      });

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };

  handleUpdatePassword = (event) => {
    event.preventDefault();
    const { userPassword, CuserPassword } = this.state.form;
    console.log("PASS", userPassword, CuserPassword);
  };

  handleImage = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        image: event.target.files[0],
      },
    });
  };

  render() {
    const { firstName, lastName, userPhoneNumber, userEmail } = this.state.form;
    const { isError, msg } = this.props.update;
    // console.log("STATE", this.state);
    console.log("THIS PROPS", this.props);
    return (
      <>
        <NavBar />
        <Container className={`${styles.bgCnt} p-4`} fluid>
          <Row>
            <Col md={4}>
              <div className={`${styles.bgDiv} p-4`}>
                <p className={styles.info}>INFO</p>
                <div className="text-center">
                  <Image
                    src="https://ps.w.org/ultimate-member/assets/icon-256x256.png?rev=2143339"
                    style={{ width: "45%" }}
                    roundedCircle
                    className="mb-3"
                  />
                  <p className={styles.name}>{`dari auth nanti`}</p>
                  <p className={styles.semi}>Moviegoers</p>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className={`${styles.bgDiv} p-4`}>
                <div className="d-flex flex-row">
                  <p className={`${styles.info}`}>Account Settings</p>
                  <p className={`${styles.info} ml-5`}>Order History</p>
                </div>
                <hr />
                <div>
                  <p className={`${styles.info}`}>Details Information</p>
                  <hr />
                  <Form
                    onSubmit={this.handleUpdateProfile}
                    className={`${styles.form} mb-5`}
                  >
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="your first name"
                          value={firstName}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="your last name"
                          value={lastName}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="userEmail"
                          placeholder="your email"
                          value={userEmail}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="userPhoneNumber"
                          placeholder="your phone number"
                          value={userPhoneNumber}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(event) => this.handleImage(event)}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className={`${styles.btUpdate} mt-3`}
                    >
                      Update Changes
                    </Button>
                    {isError ? (
                      <Alert className="mt-3" variant="danger">
                        {msg}
                      </Alert>
                    ) : msg.length > 0 ? (
                      <Alert className="mt-3" variant="success">
                        {msg}
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Form>
                  <p className={`${styles.info}`}>Account and Privacy</p>
                  <hr />
                  <Form
                    onSubmit={this.handleUpdatePassword}
                    className={styles.form}
                  >
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="userPassword"
                          placeholder="enter new password"
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="CuserPassword"
                          placeholder="confirm your new password"
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Button
                      variant="primary"
                      type="submit"
                      className={`${styles.btUpdate} mt-3`}
                    >
                      Update Changes
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Footer />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  update: state.updateProfile,
});

const mapDispatchToProps = { updateProfile, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
