import React, { Component } from "react";

class MovieDetail extends Component {
  render() {
    console.log(this.props.history.location.search.split("="));
    return (
      <>
        <h1>MovieDetail page</h1>
      </>
    );
  }
}

export default MovieDetail;
