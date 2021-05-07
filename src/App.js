import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import BasicRedux from "./pages/learning/BasicRedux/BasicRedux";
import Home from "./pages/main/Home/Home";
import MovieDetail from "./pages/main/MovieDetail/MovieDetail";
import Payment from "./pages/main/Payment/Payment";
import Admin from "./pages/main/Admin/Admin";
import Order from "./pages/main/Order/Order";
import Profile from "./pages/main/Profile/Profile";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute
              restricted={true}
              path="/register"
              exact
              component={Register}
            />
            <PublicRoute
              restricted={true}
              path="/login"
              exact
              component={Login}
            />
            <PublicRoute
              path="/learning/basic-react"
              exact
              component={BasicReact}
            />
            <PrivateRoute
              path="/learning/basic-home"
              exact
              component={BasicHome}
            />
            <Route
              path="/learning/basic-movie-detail/:id"
              exact
              component={BasicMovieDetail}
            />
            <Route path="/learning/basic-redux" exact component={BasicRedux} />
            <Route path="/" exact component={Home} />
            <Route path="/main/home" exact component={Home} />
            <Route
              path="/main/movie-detail/:id"
              exact
              component={MovieDetail}
            />
            <Route path="/main/payment" exact component={Payment} />
            <Route path="/main/admin" exact component={Admin} />
            <Route path="/main/order" exact component={Order} />
            <PrivateRoute path="/main/profile" exact component={Profile} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
