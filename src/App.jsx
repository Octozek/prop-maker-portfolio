import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import Backdrops from './pages/Backdrops/Backdrops';
import Helmets from './pages/Helmets/Helmets';
import Sculptures from './pages/Sculptures/Sculptures';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/backdrops" element={<Backdrops />} />
        <Route path="/helmets" element={<Helmets />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/contact" element={<Contact />} />

        {/* 👇 Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
