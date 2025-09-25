import React from 'react';

export default function ProfileMenu() {
  return (
    <div className="dropdown">
      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
        👤 Profile
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow">
        <li><a className="dropdown-item" href="#">My Profile</a></li>
        <li><a className="dropdown-item" href="#">Forgot Password</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
      </ul>
    </div>
  );
}
