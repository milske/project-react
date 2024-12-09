import React, { useState } from "react";

const AddMovie = ({ setResults }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    directors: "",
    imdb: { rating: "" },
    poster: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => {
      const updatedMovie = Object.assign({}, prevMovie);
      if (name === "rating") {
        updatedMovie.imdb = Object.assign({}, prevMovie.imdb, {
          rating: value,
        });
      } else {
        updatedMovie[name] = value;
      }
      return updatedMovie;
    });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    const movieData = {
      title: newMovie.title,
      year: newMovie.year,
      directors: newMovie.directors,
      imdb: { rating: newMovie.imdb.rating },
      poster: newMovie.poster,
    };
    fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Access the new movie data correctly so the  added info shows in the website
        const newMovieData = data.newMovie;
        alert(`Movie added: ${newMovie.title}`);
        setResults((prevResults) => {
          const updatedResults = [...prevResults, newMovieData]; // Add the new movie

          // Limit the results to 10 movies
          return updatedResults.slice(-10);
        });
      })
      .catch((err) => console.error("Error adding movie:", err));
  };

  return (
    <div className="container">
      <div className="mb-3 fw-semibold">ADD A NEW MOVIE</div>
      <form onSubmit={handleAddMovie}>
        <div className="form-group">
          <label className="m-1">Title:</label>
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleInputChange}
            className="form-control bg-light-subtle"
            required
          />
        </div>
        <div className="form-group">
          <label className="m-1">Year:</label>
          <input
            type="number"
            name="year"
            value={newMovie.year}
            onChange={handleInputChange}
            className="form-control bg-light-subtle"
            required
          />
        </div>
        <div className="form-group">
          <label className="m-1">Directors:</label>
          <input
            type="text"
            name="directors"
            value={newMovie.directors}
            onChange={handleInputChange}
            className="form-control bg-light-subtle"
          />
        </div>
        <div className="form-group">
          <label className="m-1">IMDB Rating:</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={newMovie.imdb.rating}
            onChange={handleInputChange}
            className="form-control bg-light-subtle"
          />
        </div>
        <div className="form-group">
          <label className="m-1">Poster URL:</label>
          <input
            type="text"
            name="poster"
            value={newMovie.poster}
            onChange={handleInputChange}
            className="form-control bg-light-subtle"
          />
        </div>
        <div className="d-flex justify-content-evenly ">
          <button type="submit" className="btn btn-success m-4 ">
            Add a Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
