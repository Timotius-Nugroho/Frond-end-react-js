import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Cards extends Component {
  render() {
    // console.log(this.props);
    const { movie_name, movie_category, movie_release_date } = this.props.data;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          />
          <Card.Body>
            <Card.Title>{movie_name}</Card.Title>
            <Card.Text>{movie_release_date}</Card.Text>
            <p>{movie_category}</p>
            <Button variant="primary">Update</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
