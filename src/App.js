import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverMoviePage from "./Pages/DiscoverMoviesPage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import MoviePage from "./Pages/MoviePage"
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/discover" component={DiscoverMoviePage} />
        <Route path="/discover/:imbID/6" component ={MoviePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
