import React from "react";

const MovieForm = ({
  query,
  setQuery,
  handleSubmit,
  handleClick,
  onSearchById,
  modifyMovie,
  deleteMovie,
}) => {
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="container mb-3 d-flex justify-content-evenly">
        <button
          type="button"
          className="btn btn-dark m-4 "
          onClick={handleClick}
        >
          Search All Movies
        </button>
      </div>
      <div className="form-group">
        <label className="mb-3 fw-semibold">SEARCH A MOVIE BY ID </label>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="form-control bg-light-subtle"
          placeholder="ID:"
          name="query"
        />
      </div>
      <div className="d-flex justify-content-evenly m-4">
        <button
          type="button"
          className="btn btn-success"
          onClick={onSearchById}
        >
          Search by ID
        </button>
        <button type="button" className="btn btn-success" onClick={modifyMovie}>
          Modify Movie
        </button>
        <button type="button" className="btn btn-success" onClick={deleteMovie}>
          Delete Movie
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
