import React from 'react';

const Header: React.FC = () => (
  <div className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
    <h1 className="h4">Nile Apartments</h1>
    <div>
      <button className="btn btn-light me-2">Notifications</button>
      <button className="btn btn-light">My Account</button>
    </div>
  </div>
);

export default Header;