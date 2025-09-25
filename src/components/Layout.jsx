import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="app-container">
            {/* Header with hamburger menu */}
            <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="main-container">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                {/* Content + Footer */}
                <div className="content-wrapper">
                    <div className="content">{children}</div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
