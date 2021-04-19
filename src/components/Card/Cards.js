import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import dummy from "../../assets/img/g6.png";
import styles from "./Cards.module.css";

class Cards extends Component {
  render() {
    // console.log(this.props);
    const { movie_name, movie_category } = this.props.data;
    return (
      <>
        <Card style={{ width: "180px" }}>
          <Card.Img variant="top" src={dummy} />
          <Card.Body className="text-center">
            <Card.Title className={styles.title}>{movie_name}</Card.Title>
            <Card.Text className={styles.category}>{movie_category}</Card.Text>
            <Button className={styles.btMoon} variant="outline-primary">
              <div className={styles.btCnt}>Details</div>
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
