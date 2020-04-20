import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//!! Important!! //
//Not supported on some linux dist for example  Arch//
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
/*import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";*/
import BlogPage from "./views/BlogPage";
import PostPage from "./views/PostPage";
import SubPage from "./views/SubPage";
import TeamPage from "./views/TeamPage";

var hist = createBrowserHistory();

if (!sessionStorage.getItem("lang")) {
  sessionStorage.setItem("lang", "pl");
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/*<Route path="/landing-page" component={LandingPage} />
      <Route path="/nasz-team" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />*/}

      <Route path="/team" component={TeamPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/page" component={SubPage} />

      <Route path="/" component={Components} />
      {/*<Route path="/" component={BlogPage} />*/}
      {/*<Route path="/" component={PostPage} />*/}
      {/*<Route path="/" component={SubPage} />*/}
      {/*<Route path="/" component={TeamPage} />*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
