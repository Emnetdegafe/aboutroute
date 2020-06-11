import React, { useState, useEffect } from "react";
import axios from "axios";
import Timeout from "await-timeout";
import { Link, useHistory, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

// import MoviePage from "./MoviePage";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, set_movies] = useState([]);
  const [searching, set_searching] = useState("idle");

  const queryParams = encodeURIComponent(searchText);
  const history = useHistory();
  const param = useParams()

  console.log('params', param)

  // searching functionality 

  async function search(param) {
    if(param === undefined) { param = "love"}
    // set_searching("searching...");
    const url = `http://www.omdbapi.com/?apikey=7a3df7f0&s=${param}`;
    const res = await axios.get(url);
    await Timeout.set(1000);
    console.log("where u at?", res.data.Search);
    set_searching("done");
    set_movies(res.data.Search);
  }

  const navigateToSearch = ()=> {
    const routeParam = encodeURIComponent(searchText)
    history.push(`/discover/${routeParam}`)
    console.log('routeParams', routeParam)
  }

  useEffect(() => {
    // navigateToSearch(param)
    search(param.searchText)
  },[param])

  return (
    <Card>
      <Card.Body>
        <Card.Title> Discover some movies!</Card.Title>
        {searching}
        <br />
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <Button variant="primary" onClick = {navigateToSearch} >
          search movie
        </Button>
        {movies.map((movie) => {
          return (
            <Card.Text key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title}
                {movie.imbID}
              </Link>
              <br />
              <Card.Img className="" src={movie.Poster} alt="poster" />
            </Card.Text>
          );
        })}
      </Card.Body>
    </Card>
  );
}
