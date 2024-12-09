/* import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [query, setQuery] = useState("");

  //first button handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This happens: ", event.target);
    console.log("id: ", query);

    GetMovieData();
  };

  //second button
  const handleClick = (event) => {
    event.preventDefault();
    console.log("This happens: ", event.target);

    GetMovieData();
  };

  const [results, setResults] = useState([]);

  const GetMovieData = () => {
    fetch("http://localhost:8080/api/getall")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        const items = data;

        setResults(items);
      });
  };

  const modifyMovie = () => {
    console.log("Query: " + query);
    fetch("http://localhost:8080/api/update" + query, {
      method: "PUT",
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("Results: ", data);
        const items = data;
        console.log("One movie: ", data);

        setResults(items);
      });
  };
  // movies in array
  const MovieArray = (props) => {
    const { data } = props;

    const CheckPoster = (props) => {
      const posterImg =
        "https://openvirtualworlds.org/omeka/files/fullsize/1/30/movie-big.jpg";

      return (
        <img
          src={props.src || posterImg} // Use fallback if `props.src` is null or empty
          alt="Poster"
          className="img-thumbnail"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop if fallback fails
            e.target.src = posterImg; // Assign fallback URL if image fails to load
          }}
          width="50%"
        />
      );
    };

    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr key={props.id}>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Directors</th>
              <th scope="col">Rating</th>
              <th scope="col">Poster</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr>
                <td key={i}> {item.title}</td>
                <td> {item.year}</td>
                <td> {item.directors}</td>
                <td> {item.imdb.rating}</td>
                {/* Create Image */ /*}
                <td id="pic">
                  <CheckPoster src={item.poster} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  // return for the form
  return (
    <div>
      <h1>Find or Modify Movies</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Search/set: </label>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-control"
              placeholder="Set id:"
              name="query"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn" onClick={handleClick}>
              Search All
            </button>
            <button type="button" className="btn" onClick={modifyMovie}>
              Modify Movie
            </button>
          </div>
        </form>
      </div>
      <MovieArray data={results} />
    </div>
  );
};

export default App; */
