import * as react from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { API } from "./global";
import TextField from "@mui/material/TextField";
export function EditMovie() {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState(null);

  const getMovies = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(() => getMovies(), []);

  return movie ? <EditMovieForm movie={movie} /> : "loading...";
}
function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then(() => navigate("/movies"));
    console.log(newMovie);
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        varient="standard"
      />

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Name"
        varient="standard"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Name"
        varient="standard"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Name"
        varient="standard"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Name"
        varient="standard"
      />
      <Button onClick={addMovie} variant="outlined" color="success">
        {" "}
        Save{" "}
      </Button>
    </div>
  );
}
