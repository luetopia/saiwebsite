import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import CompletedProjects from './pages/CompletedProjects';
import Staff from './pages/Staff';
import News from './pages/News';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Studies from './pages/Studies';
import DepartmentDetail from './pages/institute/DepartmentDetail';

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
            <Route path="/institut/:departmentId" element={<DepartmentDetail />} />
            <Route path="/forschung" element={<Research />} />
            <Route path="/forschung/abgeschlossene-projekte" element={<CompletedProjects />} />
            <Route path="/studieren-am-sai" element={<Studies />} />
            <Route path="/personen" element={<Staff />} />
            <Route path="/veranstaltungen" element={<Events />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;