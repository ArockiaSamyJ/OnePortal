import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvatarImage from "../assets/Men_Avatar.jpg"; // adjust path if necessary

// memo so parent re-renders don't force this component to re-render
const ProfileMenu = React.memo(() => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen((p) => !p);
  };

  const go = useCallback(
    (to) => {
      setOpen(false);
      if (to) navigate(to);
    },
    [navigate]
  );

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="profile-menu" ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        className="profile-btn btn p-0 border-0"
        onClick={handleToggle}
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={AvatarImage}
          alt="User avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </button>

      {open && (
        <ul className="profile-dropdown" role="menu" aria-label="Profile menu">
          <li>
            <button className="dropdown-item" onClick={() => go("/profile")}>
              My Profile
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => {
              setOpen(false);
            }}>
              Change Password
            </button>
          </li>
          <li>
            <button
              className="dropdown-item text-danger"
              onClick={() => {
                setOpen(false);
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
});

export default ProfileMenu;
