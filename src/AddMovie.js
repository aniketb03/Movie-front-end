import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

const movieValidationScheme = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(5, "Need a Bigger Poster"),
  rating: yup
    .number()
    .required()
    .min(1, "Need a Better rating")
    .max(10, "Too much rating"),
  summary: yup.string().required().min(20, "Need a Bigger Summary"),
  trailer: yup.string().required(),
});
export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");

  // const addMovie = () => {
  //   const newMovie = {
  //     name: name,
  //     poster: poster,
  //     rating: rating,
  //     summary: summary
  // //   };
  // //   setMovieList([...movieList, newMovie]);
  // };

  const navigate = useNavigate();
  const addMovie = (newMovie) => {
    fetch(`${API}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then((res) => navigate("/movies"));
    console.log(newMovie);
  };

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidationScheme,
      onSubmit: (newMovie) => {
        console.log("onSubmit", newMovie);
        addMovie(newMovie);
      },
    });
  return (
    // <div className="add-movie-form">
    //   <TextField
    //     label="Name"
    //     variant="standard"
    //     onChange={(event) => setName(event.target.value)} />
    //   <TextField
    //     label="Poster"
    //     variant="standard"
    //     onChange={(event) => setPoster(event.target.value)} />
    //   <TextField
    //     label="Rating"
    //     variant="standard"
    //     onChange={(event) => setRating(event.target.value)} />
    //   <TextField
    //     label="Summary"
    //     variant="standard"
    //     onChange={(event) => setSummary(event.target.value)} />
    //   <Button variant="outlined" onClick={addMovie}>Add Movie</Button>
    // </div>

    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        label="Name"
        variant="standard"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name ? errors.name : " "}
      />

      <TextField
        label="Poster"
        variant="standard"
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        error={touched.poster && Boolean(errors.poster)}
        helperText={touched.poster && errors.poster ? errors.poster : " "}
      />

      <TextField
        label="Rating"
        variant="standard"
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        error={touched.rating && Boolean(errors.rating)}
        helperText={touched.rating && errors.rating ? errors.rating : " "}
      />

      <TextField
        label="Summary"
        variant="standard"
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        error={touched.summary && Boolean(errors.summary)}
        helperText={touched.summary && errors.summary ? errors.summary : " "}
      />

      <TextField
        label="Trailer"
        variant="standard"
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        error={touched.trailer && Boolean(errors.trailer)}
        helperText={touched.trailer && errors.trailer ? errors.trailer : " "}
      />

      <Button type="submit" variant="outlined">
        {" "}
        Add Movie
      </Button>
    </form>
  );
}
