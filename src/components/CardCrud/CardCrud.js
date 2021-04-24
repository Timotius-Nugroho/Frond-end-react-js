import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import dummy from "../../assets/img/g6.png";
import styles from "./CardCrud.module.css";

class Cards extends Component {
  render() {
    // console.log("PROPS DATA", this.props);
    const { movie_id, movie_name, movie_category } = this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;

    return (
      <>
        <Card style={{ width: "200px" }} className="mx-auto">
          <Card.Img variant="top" src={dummy} />
          <Card.Body className="text-center">
            <Card.Title className={styles.title}>{movie_name}</Card.Title>
            <Card.Text className={styles.category}>{movie_category}</Card.Text>
            <Button
              className={styles.btUpdate}
              variant="outline-primary"
              onClick={() => handleUpdate(data)}
            >
              Update
            </Button>
            <Button
              className={styles.btDelete}
              variant="outline-primary"
              onClick={() => handleDelete(movie_id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
