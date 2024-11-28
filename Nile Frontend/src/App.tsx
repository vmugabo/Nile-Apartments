import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarWithCheckInCheckOut from './components/BookNow';

const App: React.FC = () => (
  <Router>
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/book-now" element={<CalendarWithCheckInCheckOut/>} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
