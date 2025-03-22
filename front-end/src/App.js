
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
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/movies" element={<ProtectedRoute><MoviesList /></ProtectedRoute>} />
          <Route path="/series" element={<ProtectedRoute><SeriesList /></ProtectedRoute>} />
          <Route path="/watch/movie/:id" element={<ProtectedRoute><Watch type="movie" /></ProtectedRoute>} />
          <Route path="/watch/series/:id" element={<ProtectedRoute><Watch type="series" /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
