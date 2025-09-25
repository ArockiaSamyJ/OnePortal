import React, { useState, useRef, useEffect } from "react";
import AvatarImg from "../assets/Men_Avatar.jpg";

export default function Header({ onMenuClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header d-flex justify-content-between align-items-center px-3">
      {/* Left: Hamburger + Logo */}
      <div className="d-flex align-items-center">
        <button className="btn d-lg-none me-2" onClick={onMenuClick}>
          ☰
        </button>
        <h4 className="m-0">OnePortal</h4>
      </div>

      {/* Right: Profile Avatar */}
      <div className="profile position-relative" ref={dropdownRef}>
        <img
          src={AvatarImg}
          alt="avatar"
          className="avatar"
          onClick={toggleDropdown}
        />

        {dropdownOpen && (
          <ul className="profile-dropdown shadow">
            <li><a href="/profile">My Profile</a></li>
            <li><a href="#">Change Password</a></li>
            <li><a href="#" className="text-danger">Logout</a></li>
          </ul>
        )}
      </div>
    </header>
  );
}
