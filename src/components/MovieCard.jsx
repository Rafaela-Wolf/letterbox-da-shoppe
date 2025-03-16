import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true, key }) => {
    const posterURL = movie.poster_path ? `${imagesURL}${movie.poster_path}` : null;
    const formattedVoteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

    return (
        <div className="movie-card" key={key}>
            {posterURL && <img src={posterURL} alt={`Movie poster: ${movie.title}`} />}
            <h2>{movie.title}</h2>
            <p className="alinhar-icon-span">
                <FaStar /> <span>{formattedVoteAverage}</span>
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>See more</Link>}
        </div>
    );
};

export default MovieCard;