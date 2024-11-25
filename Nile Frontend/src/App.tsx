import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';



const App: React.FC = () => (
  <Router>
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
