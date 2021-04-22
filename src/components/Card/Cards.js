import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import dummy from "../../assets/img/g6.png";
import styles from "./Cards.module.css";

class Cards extends Component {
  handleMovieDetail = (id) => {
    console.log("SSID", id);
    this.props.history.push(`/main/movie-detail/${id}`);
  };

  render() {
    // console.log(this.props);
    const { movie_id, movie_name, movie_category } = this.props.data;
    return (
      <>
        <Card style={{ width: "180px" }}>
          <Card.Img variant="top" src={dummy} />
          <Card.Body className="text-center">
            <Card.Title className={styles.title}>{movie_name}</Card.Title>
            <Card.Text className={styles.category}>{movie_category}</Card.Text>
            <Button
              className={styles.btMoon}
              variant="outline-primary"
              onClick={() => this.handleMovieDetail(movie_id)}
            >
              <div className={styles.btCnt}>Details</div>
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);
