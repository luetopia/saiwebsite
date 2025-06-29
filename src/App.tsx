import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Staff from './pages/Staff';
import News from './pages/News';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Studies from './pages/Studies';

// Research Department Pages
import Ethnology from './pages/research/Ethnology';
import CulturalReligiousHistory from './pages/research/CulturalReligiousHistory';
import DevelopmentEconomics from './pages/research/DevelopmentEconomics';
import Geography from './pages/research/Geography';
import History from './pages/research/History';
import ModernSouthAsianStudies from './pages/research/ModernSouthAsianStudies';
import PoliticalScience from './pages/research/PoliticalScience';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aktuelles" element={<News />} />
            <Route path="/institut" element={<About />} />
            <Route path="/forschung" element={<Research />} />
            <Route path="/studieren-am-sai" element={<Studies />} />
            <Route path="/personen" element={<Staff />} />
            <Route path="/veranstaltungen" element={<Events />} />
            <Route path="/kontakt" element={<Contact />} />
            
            {/* Research Department Routes */}
            <Route path="/forschung/ethnologie" element={<Ethnology />} />
            <Route path="/forschung/kultur-und-religionsgeschichte" element={<CulturalReligiousHistory />} />
            <Route path="/forschung/entwicklungsoekonomie" element={<DevelopmentEconomics />} />
            <Route path="/forschung/geographie" element={<Geography />} />
            <Route path="/forschung/geschichte" element={<History />} />
            <Route path="/forschung/neusprachliche-suedasienstudien" element={<ModernSouthAsianStudies />} />
            <Route path="/forschung/politikwissenschaft" element={<PoliticalScience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;