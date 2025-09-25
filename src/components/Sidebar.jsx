import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef(null);

    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Payment", path: "/payment" },
        { name: "Settings", path: "/settings" },
    ];

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                end
                                className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
                                onClick={onClose} // Close on menu click
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
