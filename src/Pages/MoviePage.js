import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { CardTitle } from "react-bootstrap/Card";

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
    <div className="card">
      <h3 className="card-title">{movieDetail.Title}</h3>
      <p>Released : {movieDetail.Released}</p>
      <p>Director : {movieDetail.Director}</p>
      <p>Actors : {movieDetail.Actors}</p>
      <img
        className="card-img-top"
        src={movieDetail.Poster}
        alt="Card image cap"
      />
    </div>
  );
}
