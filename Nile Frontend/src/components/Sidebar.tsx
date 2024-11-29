import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaCalendarAlt, FaPlus } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`d-flex flex-column vh-100 bg-light p-3 ${collapsed ? 'collapsed' : ''}`}
      style={{ width: collapsed ? '80px' : '250px' }}
    >
      {/* Button to collapse/expand the sidebar */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="btn btn-sm btn-secondary mb-4 align-self-end"
        aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? '>' : '<'}
      </button>

      {/* Menu header, hidden when collapsed */}
      <h4 className={`mb-4 ${collapsed ? 'd-none' : ''}`}>Menu</h4>

      {/* Sidebar menu */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-dark ${isActive ? 'active' : ''}`
            }
          >
            <FaHome className="me-2" /> {!collapsed && 'Home'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link text-dark ${isActive ? 'active' : ''}`
            }
          >
            <FaTachometerAlt className="me-2" /> {!collapsed && 'Dashboard'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `nav-link text-dark ${isActive ? 'active' : ''}`
            }
          >
            <FaCalendarAlt className="me-2" /> {!collapsed && 'Booking Engine'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/book-now"
            className={({ isActive }) =>
              `nav-link text-dark ${isActive ? 'active' : ''}`
            }
          >
            <FaPlus className="me-2" /> {!collapsed && 'Add Reservation'}
          </NavLink>
        </li>
      </ul>

      {/* Footer, hidden when collapsed */}
      <div className="mt-auto">
        <p className={`text-muted small ${collapsed ? 'd-none' : ''}`}>
          © 2024 Your Company
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
