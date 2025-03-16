const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH; // Adicione esta linha

export const getTopRatedMovies = async () => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    const res = await fetch(topRatedUrl);
    const data = await res.json();
    return data.results;
};

export const getMovie = async (id) => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    const res = await fetch(movieUrl);
    const data = await res.json();
    return data;
};

export const searchMovies = async (query) => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    const res = await fetch(searchWithQueryURL);
    const data = await res.json();
    return data.results;
};