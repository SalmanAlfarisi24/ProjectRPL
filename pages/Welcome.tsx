import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col justify-between bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col justify-center px-6 pt-10 pb-6">
        <div className="@container mb-8">
          <div className="relative w-full aspect-square max-h-[340px] flex items-center justify-center mx-auto overflow-hidden rounded-3xl bg-primary/5 dark:bg-primary/10">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full bg-primary blur-3xl"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 rounded-full bg-primary/40 blur-3xl"></div>
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-contain" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtvkTrHIXMIUCy_VK8uuKRA-vllM9Y8OH3ZvWgBGTXFMEOTL0cBPnCGc-tLpe49M5TVfDRRZMNR6Jj2VjrgUoGsdgoziltfM_YTdREhnFBplwG7F_GSbro2AX4aa77M70Ba-HNn5AoKU0uNJQiLB5SP_EkK8swM0rxUgblGlQ_hisJ_Wpt6dAJk65aKiQKYGLfpVKVvnPiPAwoFikRchwedsyPkB91WI01nKKwnC9dvbFg1D1z6cnFCgAXIzWfOTSYogNz1cCgSGcZ")' }}
              >
              </div>
            </div>
            <div className="absolute top-8 right-8 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="material-symbols-outlined text-primary text-4xl opacity-60">account_balance_wallet</span>
            </div>
            <div className="absolute bottom-12 left-8 animate-pulse">
              <span className="material-symbols-outlined text-primary text-4xl opacity-40">token</span>
            </div>
          </div>
        </div>
        <div className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white font-bold">payments</span>
            </div>
            <h1 className="text-[#0f1a18] dark:text-white tracking-tight text-[36px] font-extrabold leading-tight font-display">
              D-PAY
            </h1>
          </div>
          <p className="text-[#5e716d] dark:text-gray-400 text-lg font-medium leading-relaxed px-4 font-display">
            Solusi Transaksi Digital<br/>Masa Kini
          </p>
        </div>
      </div>

      {/* Fixed Footer Buttons */}
      <div className="shrink-0 px-6 pt-4 pb-8 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-col gap-3">
          <button onClick={() => navigate('/register')} className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-xl shadow-primary/25 active:scale-[0.98] transition-all">
            <span className="truncate">Daftar Sekarang</span>
          </button>
          <button onClick={() => navigate('/login')} className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-primary/20 bg-transparent text-primary dark:text-primary text-base font-bold leading-normal tracking-wide hover:bg-primary/5 active:scale-[0.98] transition-all">
            <span className="truncate">Masuk</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-[#5e716d] dark:text-gray-500 font-medium">
            Dengan mendaftar, Anda menyetujui <span className="text-primary cursor-pointer underline underline-offset-4">Ketentuan Layanan</span>
          </p>
        </div>
      </div>
    </div>
  );
};