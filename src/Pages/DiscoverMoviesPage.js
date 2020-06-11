import React, { useState } from "react";
import axios from "axios";
import Timeout from "await-timeout";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, set_movies] = useState([]);
  const [searching, set_searching] = useState("idle");
  const queryParams = encodeURIComponent(searchText);
  const url = `http://www.omdbapi.com/?apikey=7a3df7f0&s=${queryParams}`;

  async function search() {
    set_searching("searching...");
    const res = await axios.get(url);
    await Timeout.set(2000);
    console.log('where u at?',res.data.Search);
    set_searching("done");
    set_movies(res.data.Search);
  }

  return (
    <div>
      <h1> Discover some movies!</h1>
      {searching}
      <input
        value={searchText}
        onChange={(e) => set_searchText(e.target.value)}
      />
        
      <button onClick={search}>search movie</button>
      {movies.map((movie) => {
        return <p>{movie.Title}{movie.year}</p>;
      })}


    </div>
  );
}
