import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../../components/Footer/Footer";
import { Container, Form, Row, Col, Image } from "react-bootstrap";
import styles from "./MovieDetail.module.css";
import dummy from "../../../assets/img/g9.png";
import line from "../../../assets/img/line_long.png";
import Cards from "../../../components/CardBook/CardBook";
import NavBar from "../../../components/NavBar/NavBarLogin";
import { Prev } from "react-bootstrap/esm/PageItem";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        movie_name: "",
        movie_category: "",
        movie_duration: "",
        movie_release_date: "",
        movie_directed_by: "",
        movie_casts: "",
        movie_synopsis: "",
      },
      premiere_desc: [
        {
          preName: "",
          preLoc: "",
          prePrice: "",
          showTime: ["00:00"],
        },
      ],
      show_time_date: "",
      premiere_location: "",
      pagination: {},
      page: 1,
      limit: 3,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.premiere_location !== this.state.premiere_location ||
      prevState.show_time_date !== this.state.show_time_date
    ) {
      console.log("udx", this.state.premiere_location);
      console.log("udx", this.state.show_time_date);
      this.getDataPremiere(
        this.state.show_time_date,
        this.state.premiere_location
      );
    }
    console.log("ComponentDidUPdate Running !");
  }

  componentDidMount() {
    this.getDataMovieDetail();
    this.getDataPremiere("", "");
  }

  getDataMovieDetail = () => {
    console.log("Get Data Movie detail!");
    axios
      .get("http://localhost:3001/api/v1/movie/1")
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          data: {
            ...this.state.data,
            ...res.data.data[0],
          },
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getDataPremiere = (date, loc) => {
    loc = "%" + loc + "%";
    date = "%" + date + "%";
    console.log("Get Data Premiere!", date, "+", loc);
    axios
      .get(
        `http://localhost:3001/api/v1/premiere/premiere-movie/1?date=${date}&loc=${loc}`
      )
      .then((res) => {
        console.log(res.data.data);
        let preData = [];
        let setData = {
          preName: "",
          preLoc: "",
          prePrice: "",
          showTime: [],
        };
        const dummySetData = setData;

        for (let item of res.data.data) {
          if (
            setData.preName === item.premiere_name &&
            setData.preLoc === item.location_addres
          ) {
            console.log("skip data sama");
            setData.showTime.push(item.show_time_clock);
          } else {
            preData.push(setData);
            setData = { ...setData, ...dummySetData };
            setData.preName = item.premiere_name;
            setData.preLoc = item.location_addres;
            setData.prePrice = item.premiere_price;
            setData.showTime = [item.show_time_clock];
          }
        }
        preData.shift();
        preData.push(setData);
        console.log(preData);
        this.setState({
          premiere_desc: preData,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  changeText = (event) => {
    // console.log("eName", event.target.name);
    // console.log("eVal", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      movie_name,
      movie_category,
      movie_duration,
      movie_release_date,
      movie_directed_by,
      movie_casts,
      movie_synopsis,
    } = this.state.data;

    // console.log("PREMDESC", this.state.premiere_desc);

    return (
      <>
        <NavBar />
        <Container className="mt-3">
          <Row>
            <Col sm={3} className="mt-4">
              <div className={styles.hero}>
                <Image className={`${styles.heroImg} p-4`} src={dummy} fluid />
              </div>
            </Col>
            <Col sm={9} className="mt-4">
              <div className="text-sm-left text-center mb-4">
                <p className={styles.title}>{movie_name}</p>
                <p className={styles.semiTitle}>{movie_category}</p>
              </div>
              <div className="d-flex flex-sm-column flex-row justify-content-between">
                <div>
                  <p className={styles.semi}>Release date</p>
                  <p className={styles.semiBlack}>
                    {movie_release_date.slice(0, 10)}
                  </p>
                  <p className={styles.semi}>Duration</p>
                  <p className={styles.semiBlack}>
                    {movie_duration.slice(0, 5)}
                  </p>
                </div>
                <div>
                  <p className={styles.semi}>Directed by</p>
                  <p className={styles.semiBlack}>{movie_directed_by}</p>
                  <p className={styles.semi}>Casts</p>
                  <p className={styles.semiBlack}>{movie_casts}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p className={styles.semiTitleBlack}>Synopsis</p>
              <p className={styles.semi}>{movie_synopsis}</p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col className={`${styles.semiTitleBlack} text-center`}>
              Showtimes and Tickets
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group className="d-flex flex-sm-row flex-column justify-content-center mt-3 mb-5">
                  <div className="mr-2 ml-2 mt-3">
                    <Form.Control
                      type="date"
                      name="show_time_date"
                      onChange={(event) => this.changeText(event)}
                    />
                  </div>
                  <div className="ml-2 mr-2 mt-3">
                    <Form.Control
                      type="text"
                      name="premiere_location"
                      placeholder="City name"
                      onChange={(event) => this.changeText(event)}
                    />
                  </div>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex flex-wrap justify-content-center">
                {this.state.premiere_desc.map((e, i) => {
                  return <Cards data={e} key={i} />;
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="d-flex flex-row justify-content-center">
            <div>
              <Image src={line} fluid />
            </div>
            <a href="#home" className={styles.viewAll}>
              view all
            </a>
            <div>
              <Image src={line} fluid />
            </div>
          </div>
        </Container>
        <Container>
          <Footer />
        </Container>
      </>
    );
  }
}
export default MovieDetail;
