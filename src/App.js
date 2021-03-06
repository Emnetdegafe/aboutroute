import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverMoviePage from "./Pages/DiscoverMoviesPage";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MoviePage from "./Pages/MoviePage";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
  return (
    <Container>
      <Jumbotron>
        <div className="App">
          <Navigation />
          <Switch>
            <Route
              exact
              path="/discover/:searchText?"
              component={DiscoverMoviePage}
            />
            <Route path="/movie/:imdbID" component={MoviePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Jumbotron>
    </Container>
  );
}

export default App;
