import React from "react";
import "./styles.css";
import MovieSearch from "./Components/MovieSearch";

const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Movies</h1>
      <MovieSearch />
    </div>
  );
};

export default App;
