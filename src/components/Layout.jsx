import React, { useState, useRef } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hamburgerRef = useRef(null); // keep ref here

  return (
    <div className="app-container">
      <Header
        onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
        hamburgerRef={hamburgerRef}
      />

      <div className="main-container">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          hamburgerRef={hamburgerRef} // pass it down
        />

        <div className="content-wrapper">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
