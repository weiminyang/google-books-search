import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "./components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Nav />
            <Jumbotron>
              <h1>Google Books Search</h1>
            </Jumbotron>

          <Row>
         
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/search" component={Search} />


          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
