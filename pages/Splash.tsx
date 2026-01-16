import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Splash: React.FC = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total durasi 3 detik (3000ms)
    // Mulai animasi keluar di detik ke-2.5 (2500ms)
    // Navigasi pindah di detik ke-3 (3000ms)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const navigateTimer = setTimeout(() => {
      navigate('/welcome');
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className={`relative flex h-full w-full flex-col items-center justify-between bg-background-light dark:bg-background-dark overflow-hidden transition-all duration-500 ${isExiting ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle,_rgba(38,23,207,0.15)_0%,_rgba(18,17,33,0)_70%)]"></div>
      </div>
      <div className="flex-1"></div>
      <div className={`relative z-10 flex flex-col items-center justify-center transition-transform duration-700 ${isExiting ? '-translate-y-20 scale-50' : 'scale-100'}`}>
        <div className="mb-6 flex items-center justify-center p-1">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2a2a35] to-[#1a1929] shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/5">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-50 animate-pulse"></div>
            <span className="material-symbols-outlined text-primary text-[48px] relative z-10 drop-shadow-[0_2px_10px_rgba(38,23,207,0.6)]">
              account_balance_wallet
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">D-PAY</h1>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/80">Secure Wallet</p>
        </div>
      </div>
      <div className="flex-1"></div>
      {!isExiting && (
        <div className="relative z-10 flex w-full flex-col items-center gap-6 pb-8 animate-fade-in">
          <div className="h-6 w-6 animate-spin rounded-full border-[2.5px] border-[#383465] border-t-primary"></div>
          <p className="text-[#9893c8] text-xs font-medium opacity-60">v1.0.4</p>
        </div>
      )}
    </div>
  );
};