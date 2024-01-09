import React, { useEffect, useState } from "react";

import MovieCard from './MovieCard';
import SearchIcon from './search.svg'; 
import './App.css';

 const API_URL = 'http://www.omdbapi.com?apikey=d0bc70d9';

  const App =() =>{ 
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

     useEffect(() => {
        searchMovies(`spiderman`);
     }, []);

     const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
     };

    return (
        <div className='app'>
            <h1>MovieZone</h1>
            
        <div className="search">
            <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
           <MovieCard movie= {movie}/>
           ))}
          </div>
          )  : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
          )}
        </div>
    );
}
export default App;