import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {Image} from"react-bootstrap"


export default function MoviePage() {
  const route_params = useParams();
  const [movieDetail, set_movieDetail] = useState({});

  const url = `http://www.omdbapi.com/?apikey=7a3df7f0&i=${route_params.imdbID}`;
  console.log("where is the url", url);

  useEffect(() => {
    async function fetchMovieData() {
      const foundMovieData = await axios.get(url);
      console.log("what came out?", foundMovieData);
      set_movieDetail(foundMovieData.data);
    }

    fetchMovieData();
  }, []);

  return (
    <Card>
      <Card.Body className="card">
        <Card.Title class="card-title">
          <h1>{movieDetail.Title}</h1>
        </Card.Title>
        <Card.Text>Released : {movieDetail.Released}</Card.Text>
        <Card.Text>Director : {movieDetail.Director}</Card.Text>
        <Card.Text>Actors : {movieDetail.Actors}</Card.Text>
        <Image
          className="card-img-top"
          src={movieDetail.Poster}
          alt="poster"
        />
      </Card.Body>
    </Card>
  );
}
