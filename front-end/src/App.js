
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Daschboard from './pages/Daschboard';
import Watch from './pages/Watch';
import Favorites from './pages/Favorites';
import SeriesList from './pages/Series';
import MoviesList from './pages/Movies';
import SearchResults from './pages/SearchResults';
import ProtectedRoute from './ProtectedRoute';
import WatchHistory from './pages/WatchHistory';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/daschboard" element={<ProtectedRoute><Daschboard /></ProtectedRoute>} />
          <Route path="/movies" element={<ProtectedRoute><MoviesList /></ProtectedRoute>} />
          <Route path="/series" element={<ProtectedRoute><SeriesList /></ProtectedRoute>} />
          <Route path="/watch/movies/:id" element={<ProtectedRoute><Watch type="movies" /></ProtectedRoute>} />
          <Route path="/watch/series/:id" element={<ProtectedRoute><Watch type="series" /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
          <Route path="/watch-history" element={<ProtectedRoute><WatchHistory /></ProtectedRoute>} />
          <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
