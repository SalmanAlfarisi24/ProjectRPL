import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Splash } from './pages/Splash';
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Pin } from './pages/Pin';
import { Dashboard } from './pages/Dashboard';
import { History } from './pages/History';
import { Scan } from './pages/Scan';
import { TopUp } from './pages/TopUp';
import { Profile } from './pages/Profile';
import { TransactionResult } from './pages/TransactionResult';
import { Confirmation } from './pages/Confirmation';
import { Promo } from './pages/Promo';
import { Transfer } from './pages/Transfer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Komponen logic untuk memaksa aplikasi mulai dari Splash Screen
// Ini mengatasi masalah browser yang mengingat URL hash terakhir (misal #/dashboard)
const ForceSplash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Selalu navigasi ke root '/' (Splash) saat komponen dipasang (initial load)
    navigate('/');
  }, []); 
  return null;
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-md flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl transition-colors duration-200">
      {children}
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      {/* ForceSplash ditempatkan di sini agar aktif saat Router dimuat */}
      <ForceSplash />
      <Layout>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/confirmation" element={<Confirmation />} />
          
          {/* Reusable Result Page */}
          <Route path="/result/success" element={<TransactionResult status="success" />} />
          <Route path="/result/failed" element={<TransactionResult status="failed" />} />
          <Route path="/result/details" element={<TransactionResult status="details" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}