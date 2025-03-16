import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendarDate,
  BsTranslate,
  BsFlag,
  BsCheckCircleFill,
  BsGearFill,
  BsCalendar2EventFill,
  BsCollectionPlayFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import { getMovie } from "../services/api";
import { formatCurrency } from "../utils/formatCurrency"; 

import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchMovie = async () => {
          setLoading(true);
          try {
              const movieData = await getMovie(id);
              setMovie(movieData);
          } catch (error) {
              console.error("Error fetching movie:", error);
          } finally {
              setLoading(false);
          }
      };

      fetchMovie();
  }, [id]);

  if (loading) {
      return <p>Loading...</p>;
  }

  if (!movie) {
      return <p>Movie not found.</p>;
  }

  return (
      <div className="movie-page">
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>

          <div className="info">
              <h3><BsCalendarDate /> Release Date</h3>
              <p>{movie.release_date}</p>
          </div>

          <div className="info">
              <h3><BsCollectionPlayFill /> Genres</h3>
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>

          <div className="info">
              <h3>
                  {movie.status === "Released" && <BsCheckCircleFill />}
                  {movie.status === "In Production" && <BsGearFill />}
                  {movie.status === "Planned" && <BsCalendar2EventFill />}
                  Status
              </h3>
              <p>{movie.status}</p>
          </div>

          <div className="info">
              <h3><BsFlag /> Production Countries</h3>
              <p>{movie.production_countries.map((country) => country.name).join(", ")}</p>
          </div>

          <div className="info">
              <h3><BsTranslate /> Spoken Languages</h3>
              <p>{movie.spoken_languages.map((language) => language.english_name).join(", ")}</p>
          </div>

          <div className="info">
              <h3><BsWallet2 /> Budget</h3>
              <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
              <h3><BsGraphUp /> Revenue</h3>
              <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className="info">
              <h3><BsHourglassSplit /> Runtime</h3>
              <p>{movie.runtime} minutes</p>
          </div>

          <div className="info description">
              <h3><BsFillFileEarmarkTextFill /> Overview</h3>
              <p>{movie.overview}</p>
          </div>
      </div>
  );
};

export default Movie;
