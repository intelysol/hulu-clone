import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard.jsx";
import axios from "./axios.js";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  console.log(selectedOption);
  useEffect(() => {
    //run this code once when the result component loads/ mounts
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
