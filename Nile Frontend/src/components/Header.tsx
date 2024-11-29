import React from 'react';

const Header: React.FC = () => (
  <div className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
    <h1 className="h4">Nile Apartments</h1>
    <div>
      {/* Dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          My Account
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#notifications">Notifications</a>
          </li>
          <li>
            <a className="dropdown-item" href="#profile">My Profile</a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#logout">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;