import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-6 pt-12 pb-32">
        <div className="flex flex-col items-center pt-8 pb-6">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm ring-1 ring-primary/30">
            <span className="material-symbols-outlined text-primary text-4xl">Masukkan Akun D-PAY</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">D-PAY</h2>
          <p className="text-slate-500 dark:text-text-secondary text-sm font-medium"> Secured Wallet</p>
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 leading-tight">Selamat Datang <br/>Kembali!</h1>
          <p className="text-slate-500 dark:text-text-secondary text-base">Silakan masuk untuk melanjutkan transaksi.</p>
        </div>
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Nomor Handphone</label>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <span className="text-slate-500 dark:text-slate-400 font-bold text-lg">+62</span>
                <div className="h-6 w-px bg-slate-300 dark:bg-surface-dark mx-3"></div>
              </div>
              <input className="block w-full rounded-xl border-slate-200 dark:border-surface-dark bg-white dark:bg-surface-dark py-4 pl-20 pr-4 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-primary focus:ring-2 transition-all text-lg font-medium" placeholder="812 3456 7890" type="tel" />
            </div>
          </div>
          <button onClick={() => navigate('/pin')} className="w-full group">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-surface-dark dark:to-[#16142a] p-1 shadow-sm border border-slate-200 dark:border-surface-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between p-4 bg-transparent rounded-lg">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-base font-bold text-slate-900 dark:text-white">Login dengan Biometrik</span>
                  <span className="text-slate-500 dark:text-text-secondary text-sm text-left">Gunakan sidik jari atau wajah</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">fingerprint</span>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="mt-8 text-center">
            <a className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm" href="#">Lupa PIN?</a>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-6 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-t border-gray-100 dark:border-white/5 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/pin')} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-lg">
          <span>Masuk</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};