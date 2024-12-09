import React from "react";
import MoviePoster from "./MoviePoster";

const MovieList = ({ data }) => {
  return (
    <div>
      <table className="table table-success table-striped table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Directors</th>
            <th scope="col">Rating</th>
            <th scope="col">Poster</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.year}</td>
              <td>{item.directors}</td>
              <td>{item.imdb?.rating}</td>
              <td>
                <MoviePoster src={item.poster} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
