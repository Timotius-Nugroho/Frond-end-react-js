import React, { Component } from "react";
// import { Link } from "react-router-dom";
import moment from "moment";
import ReactPaginate from "react-paginate";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBarAdmin";
import Card from "../../../components/CardCrud/CardCrud";
import axiosApiIntances from "../../../utils/axios";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  Button,
  DropdownButton,
  Dropdown,
  Modal,
} from "react-bootstrap";
import styles from "./Admin.module.css";
import dummy from "../../../assets/img/g9.png";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVal: "Sort By",
      sortBy: "movie_name ASC",
      search: "%%",
      data: [],
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
        movieDuration: "00:00",
        movieDirectedBy: "",
        movieCasts: "",
        movieSynopsis: "",
      },
      id: 0,
      show: false,
      modalMsg: "",
      isUpdate: false,
      pagination: {},
      page: 1,
      limit: 4,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.sortBy !== this.state.sortBy
    ) {
      this.setState({ page: 1 }, () => {
        this.getData();
      });
    }
  }

  getData = () => {
    console.log("Get Data !");
    const { page, limit, sortBy, search } = this.state;

    axiosApiIntances
      .get(
        `movie?page=${page}&limit=${limit}&keywords=${search}&sort=${sortBy}`
      )
      .then((res) => {
        this.setState({ data: res.data.data, pagination: res.data.pagination });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  postData = () => {
    const { form } = this.state;
    axiosApiIntances
      .post("movie", form)
      .then((res) => {
        console.log(res);
        this.setState(
          {
            modalMsg: "Submit Data Succes !",
            show: true,
          },
          () => {
            this.getData();
          }
        );
        this.resetForm();
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          modalMsg: "Submit Data Failed !",
          show: true,
        });
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ show: false });
        }, 1000);
      });
  };

  updateData = () => {
    const { form, id } = this.state;
    axiosApiIntances
      .patch(`movie/${id}`, form)
      .then((res) => {
        console.log(res);
        this.setState(
          {
            modalMsg: "Update Data Succes !",
            show: true,
            isUpdate: false,
          },
          () => {
            this.getData();
          }
        );
        this.resetForm();
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          modalMsg: "Update Data Failed !",
          show: true,
        });
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ show: false });
        }, 1000);
      });
  };

  handleSelect = (event) => {
    this.setState({
      dropDownVal: event.split("-")[0],
      sortBy: event.split("-")[1],
    });
  };

  changeText = (event) => {
    this.setState({ [event.target.name]: "%" + event.target.value + "%" });
  };

  changeTextForm = (event) => {
    const { movieDuration } = this.state.form;
    let hour = movieDuration.split(":")[0];
    let minute = movieDuration.split(":")[1];
    // console.log("EVENT NAME", event.target.name);
    if (event.target.name === "movieDurationHour") {
      hour = event.target.value;
      this.setState({
        form: {
          ...this.state.form,
          movieDuration: hour + ":" + minute + ":00",
        },
      });
    } else if (event.target.name === "movieDurationMinute") {
      minute = event.target.value;
      this.setState({
        form: {
          ...this.state.form,
          movieDuration: hour + ":" + minute + ":00",
        },
      });
    } else {
      this.setState({
        form: {
          ...this.state.form,
          [event.target.name]: event.target.value,
        },
      });
    }
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      console.log("move page");
      this.getData();
    });
  };

  resetForm = () => {
    this.setState({
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
        movieDuration: "00:00",
        movieDirectedBy: "",
        movieCasts: "",
        movieSynopsis: "",
      },
    });
  };

  sendData = () => {
    const { isUpdate } = this.state;
    if (isUpdate) {
      console.log("Update data");
      this.updateData();
    } else {
      console.log("Create data");
      this.postData();
    }
  };

  setUpdate = (data) => {
    console.log("Set Update !");
    // console.log(data);
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieCategory: data.movie_category,
        movieReleaseDate: moment(data.movie_release_date).format("YYYY-MM-DD"),
        movieDuration: data.movie_duration,
        movieDirectedBy: data.movie_directed_by,
        movieCasts: data.movie_casts,
        movieSynopsis: data.movie_synopsis,
      },
    });
  };

  deleteData = (id) => {
    console.log("Delete data ! ", id);
    axiosApiIntances
      .delete(`movie/${id}`)
      .then((res) => {
        console.log(res);
        this.setState(
          {
            modalMsg: "Movie Deleted !",
            show: true,
          },
          () => {
            this.getData();
          }
        );
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          modalMsg: "Deleted Failed !",
          show: true,
        });
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ show: false });
        }, 1000);
      });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { dropDownVal, isUpdate, data, show, modalMsg } = this.state;
    const {
      movieName,
      movieCategory,
      movieReleaseDate,
      movieDuration,
      movieDirectedBy,
      movieCasts,
      movieSynopsis,
    } = this.state.form;
    // console.log(this.state.form);
    // console.log(this.state);

    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.modal}>{modalMsg}</Modal.Title>
          </Modal.Header>
        </Modal>
        <NavBar />
        <Container className={`${styles.bgCnt} pt-5 pb-5`} fluid>
          <Container className={styles.bgCnt}>
            <p className={styles.title}>Movie Description</p>
            <div className={`${styles.bgDiv} ${styles.semi} p-5`}>
              <Row>
                <Col lg={4}>
                  <Image
                    className={`${styles.hero} p-4 mb-4 d-block mx-auto`}
                    src={dummy}
                    fluid
                  />
                </Col>
                <Col lg={8}>
                  <Form>
                    <Form.Group>
                      <Form.Label>Movie Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="movieName"
                        name="movieName"
                        value={movieName}
                        onChange={(event) => this.changeTextForm(event)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Movie Category</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="movieCategory"
                        name="movieCategory"
                        value={movieCategory}
                        onChange={(event) => this.changeTextForm(event)}
                      />
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Col xs={6}>
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="movieReleaseDate"
                          value={movieReleaseDate}
                          onChange={(event) => this.changeTextForm(event)}
                        />
                      </Col>
                      <Col xs={3}>
                        <Form.Label>Hour</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="00"
                          name="movieDurationHour"
                          value={movieDuration.split(":")[0]}
                          onChange={(event) => this.changeTextForm(event)}
                        />
                      </Col>
                      <Col xs={3}>
                        <Form.Label>Minute</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="00"
                          name="movieDurationMinute"
                          value={movieDuration.split(":")[1]}
                          onChange={(event) => this.changeTextForm(event)}
                        />
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
                          name="movieDirectedBy"
                          value={movieDirectedBy}
                          onChange={(event) => this.changeTextForm(event)}
                        />
                      </Col>
                      <Col xs={8}>
                        <Form.Label>Casts</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="movieCasts"
                          name="movieCasts"
                          value={movieCasts}
                          onChange={(event) => this.changeTextForm(event)}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Synopsis</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        size="lg"
                        type="text"
                        placeholder="movieSynopsis"
                        name="movieSynopsis"
                        value={movieSynopsis}
                        onChange={(event) => this.changeTextForm(event)}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md={2}>
                  <Button
                    className={`${styles.btReset} mb-2`}
                    variant="outline-primary"
                    onClick={() => this.resetForm()}
                  >
                    Reset
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    className={styles.btSubmit}
                    variant="primary"
                    onClick={() => this.sendData()}
                  >
                    {isUpdate ? "Update" : "Submit"}
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
          <Container className="mt-5">
            <Row>
              <Col md={3}>
                <p className={styles.title}>Data Movie</p>
              </Col>
              <Col></Col>
              <Col lg={3}>
                <DropdownButton
                  className={`${styles.dropDown} mb-2 text-right`}
                  variant="secondary"
                  title={dropDownVal}
                  id="dropdown-menu-align-right"
                  onSelect={this.handleSelect}
                >
                  <Dropdown.Item
                    className={styles.semi}
                    eventKey="By Name ASC-movie_name ASC"
                  >
                    By Name ASC
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.semi}
                    eventKey="By Name DESC-movie_name DESC"
                  >
                    By Name DESC
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.semi}
                    eventKey="By Release Date ASC-movie_release_date ASC"
                  >
                    By Release Date ASC
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.semi}
                    eventKey="By Release Date DESC-movie_release_date DESC"
                  >
                    By Release Date DESC
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col lg={3}>
                <Form className={styles.searchInput}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Search movie name..."
                      name="search"
                      onChange={(event) => this.changeText(event)}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <div
              className={`${styles.bgDiv} ${styles.semi} pt-5 pb-5 pl-4 pr-4`}
            >
              <Row>
                {data.map((item, key) => {
                  return (
                    <Col lg={3} md={4} key={key} className="mb-2">
                      <Card
                        data={item}
                        handleUpdate={this.setUpdate.bind(this)}
                        handleDelete={this.deleteData.bind(this)}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </Container>
        <Container className={styles.bgCnt} fluid>
          <div className="d-flex justify-content-center">
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={
                this.state.pagination.totalPage
                  ? this.state.pagination.totalPage
                  : 0
              }
              marginPagesDisplayed={5}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={styles.pagination}
              subContainerClassName={`${styles.pages} ${styles.pagination}`}
              activeClassName={styles.active}
            />
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
