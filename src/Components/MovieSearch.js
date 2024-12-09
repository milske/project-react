import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import AddMovie from "./AddMovie";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Get all movies
  const GetMovieData = () => {
    fetch("http://localhost:8080/api/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log("All movies:", data);
        setResults(data);
      })
      .catch((error) => console.error("Error getting data:", error));
  };

  // Search a single movie by ID
  const searchById = () => {
    if (!query.trim()) {
      // to check if the field is empty
      alert("Please provide a valid ID.");
      return;
    }
    fetch(`http://localhost:8080/api/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setResults([data]);
      })
      .catch((error) =>
        console.error("Error searching for a movie by ID:", error)
      );
  };

  // Submit form to fetch by ID (or all movies without ID)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for ID:", query);
    GetMovieData();
  };

  // Second button handler
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Searching for all movies...");
    GetMovieData();
  };

  // Modify a movie with the specified ID
  const modifyMovie = () => {
    if (!query.trim()) {
      alert("Please provide a valid ID.");
      return;
    }
    console.log("Modifying movie with ID:", query);
    fetch(`http://localhost:8080/api/update/${query}`, { method: "PUT" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Modified movie:", data);
        setResults([data]);
      })
      .catch((error) => console.error("Error modifying movie:", error));
  };

  const deleteMovie = () => {
    if (!query.trim()) {
      alert("Please provide a valid ID.");
      return;
    }
    fetch(`http://localhost:8080/api/delete/${query}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          // Refresh the movie list
          GetMovieData();
        }
      })
      .catch((error) => console.error("Error deleting movie:", error));
  };

  return (
    <div>
      <MovieForm
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        onSearchById={searchById}
        handleClick={handleClick}
        modifyMovie={modifyMovie}
        deleteMovie={deleteMovie}
      />
      <AddMovie setResults={setResults} />
      <MovieList data={results} />
    </div>
  );
};

export default MovieSearch;
