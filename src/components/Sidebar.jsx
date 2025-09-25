import React from "react";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Payment", path: "/payment" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                onClick={onClose}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
