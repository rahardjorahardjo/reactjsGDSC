import React, {useState} from 'react';
import './App.css';

const PAGE_MOVIES = 'movies';
const PAGE_WISH =  'wish';

function App() {
  const [wish, setWish] = useState([]);
  const [page, setPage] = useState(PAGE_MOVIES);
  const [movies] = useState([
    {
      name: 'Django: Unchained',
      rate: '',
      image:'https://w0.peakpx.com/wallpaper/9/487/HD-wallpaper-movie-django-unchained.jpg',
    },
    {
      name: 'Spider-Man: No Way Home',
      rate: '',
      image:'https://wallpapercave.com/wp/wp8651502.jpg',
    },
    {
      name: 'Iron Man 3',
      rate: '',
      image:'https://wallpaperaccess.com/full/259316.jpg',
    },
    {
      name: 'John Wick 3: Parabellum',
      rate: '',
      image:'https://w0.peakpx.com/wallpaper/99/136/HD-wallpaper-movie-john-wick-chapter-3-parabellum-john-wick-keanu-reeves.jpg',
    },
    {
      name: 'Mission: Impossible Rogue Nation',
      rate: '',
      image:'https://vistapointe.net/images/mission-impossible-rogue-nation-2.jpg',
    },
    {
      name: 'Fast & Furious 6',
      rate: '',
      image:'https://wallpapercave.com/wp/wp4424283.jpg',
    }
  ]);

  const addToWish = (movies) => {
    setWish([...wish, { ...movies}]);
  };

  const removeFromWish = (moviesToRemove) => {
    setWish(
      wish.filter((movies) => movies !== moviesToRemove)
    );
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderMovies = () => (
    <>
      <h1>Movies</h1>
      <div className= "movies">
        {movies.map((movies, idx) => (
          <div className="movie" key={idx}>
            <h3>{movies.name}</h3>
            <h4>{movies.rate}</h4>
            <img src={movies.image} alt={movies.name}/>
            <button onClick={() => addToWish(movies)}>
              select
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderWish = () => (
    <>
      <h1>Wishlist</h1>
      <div className= "movies">
        {wish.map((movies, idx) => (
          <div className="movie" key={idx}>
            <h3>{movies.name}</h3>
            <h4>{movies.rate}</h4>
            <img src={movies.image} alt={movies.name}/>
            <button onClick={() => removeFromWish(movies)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_WISH)}>
          Go to Wishlist({wish.length})
        </button>
        <button onClick={() => navigateTo(PAGE_MOVIES)}>
          View Movie List({movies.length})
        </button>
      </header>
      {page === PAGE_MOVIES && renderMovies()}
      {page === PAGE_WISH && renderWish()}
    </div>
  );
}

export default App;