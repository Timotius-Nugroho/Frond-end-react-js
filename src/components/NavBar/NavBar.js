import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Nav, Navbar, Button, Image, Modal, Form } from "react-bootstrap";
import logo from "../../assets/img/logo_1.png";
import { Search } from "react-bootstrap-icons";
import styles from "./NavBar.module.css";
import axiosApiIntances from "../../utils/axios";
import ReactPaginate from "react-paginate";

class NavBarX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [],
      pagination: {},
      page: 1,
      limit: 10,
      isShow: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      // console.log(this.state.search);
      this.getData(this.state.search);
    }
  }

  getData = (search) => {
    console.log("Get Data !, Search=", search);
    const { page, limit } = this.state;
    axiosApiIntances
      .get(`movie?page=${page}&limit=${limit}&keywords=%${search}%`)
      .then((res) => {
        this.setState({ data: res.data.data, pagination: res.data.pagination });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  changeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({
      isShow: false,
    });
  };

  handleShow = () => {
    this.setState({
      isShow: true,
    });
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData(this.state.search);
    });
  };

  handleResSearch = (id) => {
    console.log(id);
    this.props.history.push(`/main/movie-detail/${id}`);
  };

  render() {
    const { isShow, data } = this.state;
    // console.log(this.state.pagination.totalPage);
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand href="#">
            <Image src={logo} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Link className="ml-sm-5" to="/main/home">
                <Nav.Link href="#Home">
                  <span className={styles.link}>Home</span>
                </Nav.Link>
              </Link>
              <Link className="ml-sm-5" to="/main/payment">
                <Nav.Link href="#Payment">
                  <span className={styles.link}>Payment</span>
                </Nav.Link>
              </Link>
              <Link className="ml-sm-5" to="#">
                <Nav.Link href="#Profile">
                  <span className={styles.link}>Profile</span>
                </Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <p className="mr-sm-4 mt-3">
                <span className={styles.link}>Location</span>
              </p>
              <div className="mr-sm-4 mt-3" onClick={this.handleShow}>
                <Search className={styles.search} />
              </div>
              <Modal show={isShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className={styles.rightBold}>
                    Movie Search
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Control
                        name="search"
                        type="text"
                        placeholder="Type your movie name here"
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Form>
                  {data.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className={styles.searchText}
                        onClick={() => this.handleResSearch(item.movie_id)}
                      >{`${item.movie_name} (${
                        item.movie_release_date.split("-")[0]
                      }) - ${item.movie_category}`}</p>
                    );
                  })}
                </Modal.Body>
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
              </Modal>
              <div className="mr-sm-4 mt-2">
                <Button className={(styles.link, styles.btNav)}>Sign Up</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBarX);
