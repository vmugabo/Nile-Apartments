import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <div className="d-flex flex-column vh-100 bg-light p-3" style={{ width: '250px' }}>
    <h4 className="mb-4">Menu</h4>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link text-dark">
          Home
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/dashboard" className="nav-link text-dark">
          Dashboard
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/booking" className="nav-link text-dark">
          Booking Engine
        </Link> </li>
      
    </ul>
  </div>
);

export default Sidebar;
