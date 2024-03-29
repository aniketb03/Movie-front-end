import { useContext, useEffect, useState } from "react";
import { Movie } from "./Movie";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CommonContext from "./context/commonContext";
import { API } from "./global";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const { isLoggedIn } = useContext(CommonContext);
  const getMovies = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      try {
        fetch(`${API}/movies`, {
          method: "GET",
          headers: { "x-auth-token": localStorage.getItem("x-auth-token") },
        })
          .then((data) => data.json())
          .then((mvs) => setMovieList(mvs));
      } catch (err) {
        console.error(err);
      }
    }
  };
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv._id}
            movie={mv}
            id={mv._id}
            deleteButton={
              <IconButton
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={() => deleteMovie(mv._id)}
                aria-label="Movie-details"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                color="primary"
                onClick={() => navigate(`/movies/edit/${mv._id}`)}
                aria-label="Movie-details"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
