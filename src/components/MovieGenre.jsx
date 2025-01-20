import { useState, useEffect } from 'react';

const movieGenres = import.meta.env.VITE_GENRE;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieGenre = ({ movie }) => {
  const [genres, setGenres] = useState([]);
  
  // Função para buscar a lista de gêneros
  useEffect(() => {
    fetch(`${movieGenres}?api_key=${apiKey}&language=en`) // Corrigido para a URL com api_key
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.error('Erro ao carregar gêneros:', error));
  }, []);

  // Mapeamento de IDs para nomes dos gêneros
  const genreMap = genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});

  // Filtrar os gêneros do filme
  const movieGenre = movie.genre_ids.map(id => genreMap[id]).filter(Boolean);

  return (
    <div className="info">
      <h3>Gênero</h3>
      <p>{movieGenre.join(', ')}</p>
    </div>
  );
};

export default MovieGenre;