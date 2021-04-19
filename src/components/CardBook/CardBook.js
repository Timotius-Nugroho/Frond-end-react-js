import React, { Component } from "react";
import { Button, Card, Image } from "react-bootstrap";
import dummy from "../../assets/img/logo_2.png";
import styles from "./CardBook.module.css";

class Cards extends Component {
  render() {
    console.log(this.props);
    const { preName, preLoc, prePrice, showTime } = this.props.data;
    return (
      <>
        <Card
          className="mb-3 mr-2 ml-2"
          style={{ width: "350px", height: "360px" }}
        >
          <Card.Body>
            <div className="d-flex flex-row justify-content-center">
              <div className="mr-4 mt-2">
                <Image src={dummy} fluid />
              </div>
              <div>
                <p className={styles.title}>{preName}</p>
                <p className={styles.subTitle}>{preLoc}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-wrap">
              {showTime.map((e, i) => {
                return (
                  <div key={i} className={styles.clock}>
                    {e}
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className={styles.price}>Price</p>
              <p className={styles.priceValue}>
                <span>$</span>
                {prePrice}
                <span>/seat</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <Button className={styles.btBook} variant="primary">
                Book now
              </Button>
              <Button className={styles.btAdd} variant="light">
                Add to cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Cards;
