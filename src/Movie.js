import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { height } from '@mui/system';

export function Movie({ movie, id }) {
  const styles = { color: movie.rating > 7.9 ? "green" : "red" };

  const [show, setShow] = useState(true);

  const paraStyle = {
    display: show ? "block" : "none"
  };

  const navigate = useNavigate();
  return (
    <Card className="movie-container" style={{height:"min-content"}}>
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}
        <IconButton 
      onClick={() => navigate(`/movies/${id}`)} 
      color="primary"
      aria-label="Movie details">
        <InfoIcon/>
        </IconButton>

        <IconButton 
      onClick={() => setShow(!show)}
      color="primary"
      aria-label="Toggle button">
       {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
        </IconButton>

        </h2>
        <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
      </div>
      {/* Conditional Styling */}
      {/* <p style={paraStyle} className="movie-summary">{movie.summary}</p> */}
      {/* Conditional Rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
      
    </Card>
  );
}
