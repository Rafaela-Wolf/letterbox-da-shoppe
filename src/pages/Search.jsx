import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api"; 
import "./MoviesGrid.css";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = searchParams.get("q");

    useEffect(() => {
        const fetchMovies = async () => {
            if (!query) {
                setLoading(false);
                setMovies([]);
                return;
            }
            setLoading(true);
            try {
                const results = await searchMovies(query);
                setMovies(results);
            } catch (error) {
                console.error("Error searching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h2 className="title">
                Results for: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default Search;