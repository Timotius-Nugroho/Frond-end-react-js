import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import Home from "./pages/main/Home/Home";
import MovieDetail from "./pages/main/MovieDetail/MovieDetail";
import Payment from "./pages/main/Payment/Payment";
import Admin from "./pages/main/Admin/Admin";
import Order from "./pages/main/Order/Order";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route
            path="/learning/basic-movie-detail"
            exact
            component={BasicMovieDetail}
          />
          <Route path="/main/home" exact component={Home} />
          <Route path="/main/movie-detail" exact component={MovieDetail} />
          <Route path="/main/payment" exact component={Payment} />
          <Route path="/main/admin" exact component={Admin} />
          <Route path="/main/order" exact component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default App;
