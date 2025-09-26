import React from "react";
import ProfileMenu from "./ProfileMenu";

export default function Header({ onMenuClick, hamburgerRef }) {
  return (
    <header className="header d-flex justify-content-between align-items-center px-3" style={{ zIndex: 1200 }}>
      <div className="d-flex align-items-center">
        <button
          ref={hamburgerRef}
          className="btn d-lg-none me-2"
          onClick={(e) => {
            e.stopPropagation(); // stop event bubbling
            onMenuClick();
          }}
        >
          ☰
        </button>
        <h4 className="m-0">OnePortal</h4>
      </div>

      <div className="d-flex align-items-center">
        <ProfileMenu />
      </div>
    </header>
  );
}
