import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Main from './pages/Main/Main';
import Backdrops from './pages/Backdrops/Backdrops';
import Helmets from './pages/Helmets/Helmets';
import Sculptures from './pages/Sculptures/Sculptures';
import Contact from './pages/Contact/Contact';

// This component runs when no matching route is found
const CatchAllRedirect = () => {
  const location = useLocation();

  // Only redirect if user refreshed (not navigating inside app)
  if (typeof window !== 'undefined' && location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }

  return null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/backdrops" element={<Backdrops />} />
        <Route path="/helmets" element={<Helmets />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/contact" element={<Contact />} />

        {/* 👇 Catch-all route: redirect unknown paths to "/" */}
        <Route path="*" element={<CatchAllRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
