import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-md h-[88px] w-full rounded-t-3xl bg-white/90 dark:bg-surface-dark/95 backdrop-blur-lg px-2 pb-6 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.4)] border-t border-gray-100 dark:border-white/5">
      <div className="grid h-full w-full grid-cols-5 items-center">
        <button onClick={() => navigate('/dashboard')} className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${isActive('/dashboard') ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
          <span className={`material-symbols-outlined ${isActive('/dashboard') ? 'fill-1' : ''}`}>home</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button onClick={() => navigate('/promo')} className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${isActive('/promo') ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
          <span className={`material-symbols-outlined ${isActive('/promo') ? 'fill-1' : ''}`}>local_offer</span>
          <span className="text-[10px] font-medium">Promo</span>
        </button>
        <div className="relative flex items-center justify-center">
          <button onClick={() => navigate('/scan')} className="absolute -top-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#4c1d95] to-[#2617cf] shadow-xl shadow-primary/40 ring-4 ring-background-light dark:ring-background-dark transition-transform active:scale-90 z-50">
            <span className="material-symbols-outlined text-[32px] text-white">qr_code_scanner</span>
          </button>
          <span className="absolute -bottom-1 text-[10px] font-medium text-gray-400 dark:text-gray-500 mt-8 pt-8">Scan</span>
        </div>
        <button onClick={() => navigate('/history')} className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${isActive('/history') ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
          <span className="material-symbols-outlined">pie_chart</span>
          <span className="text-[10px] font-medium">Keuangan</span>
        </button>
        <button onClick={() => navigate('/profile')} className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${isActive('/profile') ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </div>
    </nav>
  );
};