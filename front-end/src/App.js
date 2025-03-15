
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Favorites from './pages/Favorites';
import SeriesList from './pages/Series';
import MoviesList from './pages/Movies';
import SearchResults from './pages/SearchResults';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/series" element={<SeriesList />} />
          <Route path="/watch/movie/:id" element={<Watch type="movie" />} />
          <Route path="/watch/series/:id" element={<Watch type="series" />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
