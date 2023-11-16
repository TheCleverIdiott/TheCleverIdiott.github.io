import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/css/main.scss'; // All of our styles

import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Stats from './pages/Stats';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import PageNotFound from './pages/NotFound';

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about/" element={<About />} />
      <Route path="/projects/" element={<Projects />} />
      <Route path="/stats/" element={<Stats />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="/resume/" element={<Resume />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
