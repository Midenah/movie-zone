import React from 'react';

 const MovieCard= ({ movie: {imdbID, Year, Poster, Title, Type} }) => {
  return (
            <div className="movie"key={imdbID}>
                <div>
                    <p>{Year}</p>
                </div>

                <div>
                     <img src={Poster !== 'https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg'? Poster : "https://via.placeholder.com/400"} alt={Title} />
                </div>

                <div>
                    <span>{Type}</span>
                    <h3>{Title}</h3>
                </div>
            </div>
    
  );

 } 

 export default MovieCard;