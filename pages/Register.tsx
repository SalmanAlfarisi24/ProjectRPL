import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden relative">
      {/* Sticky Header */}
      <header className="flex items-center justify-between py-3 px-6 sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">D-PAY</h2>
        <div className="w-10"></div>
      </header>

      {/* Scrollable Form */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-32">
        <div className="mb-8 mt-2">
          <h1 className="text-3xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white">Buat Akun</h1>
          <p className="text-slate-500 dark:text-text-secondary text-base font-medium">Untuk menjaga keamanan transaksi, silahkan isi data disini.</p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-white/90 ml-1">Nama Lengkap</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-text-secondary material-symbols-outlined">person</span>
              <input className="w-full h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl px-4 pl-12 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Budi Santoso" type="text"/>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-white/90 ml-1">No.Phone</label>
            <div className="flex gap-3">
              <div className="flex items-center justify-center bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl px-3 h-14 w-20 shrink-0">
                <span className="text-white font-medium mr-1">🇮🇩</span>
                <span className="text-slate-900 dark:text-white font-medium text-sm">+62</span>
              </div>
              <input className="flex-1 h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl px-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="812-3456-7890" type="tel"/>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex justify-between items-end">
              <label className="text-sm font-semibold text-slate-900 dark:text-white/90 ml-1">Verifikasi Kode</label>
              <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Kirim Ulang Kode</button>
            </div>
            <div className="flex gap-3 justify-between">
              <input className="w-full h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl text-center text-xl font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" maxLength={1} type="text" defaultValue="8"/>
              <input className="w-full h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl text-center text-xl font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" maxLength={1} type="text"/>
              <input className="w-full h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl text-center text-xl font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" maxLength={1} type="text"/>
              <input className="w-full h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-dark rounded-xl text-center text-xl font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" maxLength={1} type="text"/>
            </div>
            <p className="text-xs text-slate-500 dark:text-text-secondary ml-1">Kode Terkirim ke +62 812 •••• ••••</p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="p-6 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-t border-gray-100 dark:border-white/5 absolute bottom-0 w-full z-10">
        <button onClick={() => navigate('/dashboard')} className="w-full h-14 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
          <span className="text-white font-bold text-lg">Daftar Sekarang</span>
          <span className="material-symbols-outlined text-white">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};