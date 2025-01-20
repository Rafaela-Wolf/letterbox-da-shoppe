import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { TbChartBarPopular } from "react-icons/tb";

import MovieCard from '../components/MovieCard';
import './MovieDetails.css';
// import MovieGenre from "../components/MovieGenre";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovie(movieUrl);
  });

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>

          <div className="info description">
            <h3><BsFillFileEarmarkTextFill /> Descrição</h3>
            <p>{movie.overview}</p>
          </div>

        {/* <MovieGenre /> */}

          <div className="info">
            <h3><BsWallet2 /> Orçamento</h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3><BsGraphUp /> Receita</h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className="info">
            <h3><BsHourglassSplit /> Duração</h3>
            <p>{movie.runtime} minutos</p>
          </div>

          <div className="info">
            <h3><FaCalendarAlt /> Data do lançamento</h3>
            <p>{formatDate(movie.release_date)}</p>
          </div>

          <div className="info">
            <h3><GiWorld /> Idioma original</h3>
            <p>{movie.original_language}</p>
          </div>

          <div className="info">
            <h3><TbChartBarPopular /> Popularidade</h3>
            <p>{movie.popularity}</p>
          </div>

        </>
      )}
    </div>
  )
}

export default MovieDetails;