import axios from "axios";
import { useState, useEffect } from "react";

function Movie({ img, name, summary }) {
  return (
    <div>
      <img src={img} />
      <h1>{name}</h1>
      <p>{summary}</p>
    </div>
  );
}

function MoviePage() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://elice-api-test.herokuapp.com/movie",
        {
          headers: {
            "x-api-key": localStorage["auth"],
          },
        }
      );
      console.log(response.data);
      const { status, data } = response.data;
      if (status === "succ") {
        setMovieData(data);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {movieData &&
        movieData.map((movie, i) => (
          <Movie
            key={`movie-${i}`}
            img={movie.img}
            name={movie.name}
            summary={movie.summary}
          />
        ))}
    </div>
  );
}

export default MoviePage;
