import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import { API } from "./global";
import { useEffect } from "react";
export function MovieDetails({}) {
  const { id } = useParams();
  console.log({ id });
  // const movie = movieList[id];
  const [movie,setMovie]=useState({});

  const getMovies=()=>{
    fetch(`${API}/movies/${id}`,{
      method: "GET",
      headers: {
        "x-auth-token":localStorage.getItem("x-auth-token"),
        "Content-Type": "application/json",
      },
    })
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  };

  useEffect(() => getMovies() , []);

  const styles = { color: movie.rating > 7.9 ? "green" : "red" };

  const navigate = useNavigate();

  return (
    <div>

<iframe
 width="100%"
 height="650" 
 src={movie.trailer} 
title="Yotube Video Player" 
frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 allowfullscreen>

 </iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIosIcon />}>Back</Button>
      </div>
    </div>

  );

}
