import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

import { getTopRatedMovies } from "../services/api";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true) 

    useEffect(() => {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const movies = await getTopRatedMovies();
          setTopMovies(movies);
        } catch (error) {
          console.error("Error fetching top-rated movies:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2 className="title">Top movies</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;