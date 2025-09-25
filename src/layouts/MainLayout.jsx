import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AppRoutes from '../routes/AppRoutes';

export default function MainLayout() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4 bg-light">
          <div className="container-fluid">
            <AppRoutes />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
