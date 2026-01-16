import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TransactionResultProps {
  status: 'success' | 'failed' | 'details';
}

export const TransactionResult: React.FC<TransactionResultProps> = ({ status }) => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (status === 'failed') {
    return (
      <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-[#221010] text-slate-900 dark:text-white animate-fade-in">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate('/dashboard')} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold">D-PAY</h2>
          <div className="size-10"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8 text-center">
          <div className="relative size-24 rounded-full bg-red-500/10 flex items-center justify-center animate-[pop-up_0.5s_ease-out]">
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
            <span className="material-symbols-outlined text-6xl text-red-600 z-10">error</span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold mb-2">Pembayaran Gagal!</h1>
            <p className="text-slate-500 dark:text-gray-400">Saldo Anda tidak mencukupi untuk transaksi ini.</p>
          </div>
          <div className="w-full bg-white dark:bg-[#341818] rounded-2xl p-5 border border-red-500/20 shadow-sm">
            <div className="flex justify-between items-center">
               <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Tagihan</p>
                  <p className="text-lg font-bold">Rp 25.000</p>
               </div>
               <button onClick={() => navigate('/topup')} className="text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-lg shadow-md">Isi Saldo</button>
            </div>
          </div>
        </div>
        <div className="p-6 pb-10 space-y-3">
          <button onClick={() => navigate('/scan')} className="w-full h-14 bg-red-600 text-white font-bold rounded-xl active:scale-95 transition-all">Coba Lagi</button>
          <button onClick={() => navigate('/dashboard')} className="w-full h-14 bg-transparent border border-gray-200 dark:border-white/10 text-gray-500 font-bold rounded-xl">Ke Beranda</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-40 relative">
        <div className={`flex flex-col items-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-green-500/10 ring-8 ring-green-500/5 dark:bg-green-500/20">
            <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-[pulse_2s_infinite]"></div>
            <span className="material-symbols-outlined text-[64px] text-green-500 font-bold">check_circle</span>
          </div>
          
          <h1 className="text-center text-2xl font-extrabold tracking-tight">Pembayaran Berhasil!</h1>
          <p className="text-gray-500 mt-1">Kopi Kenangan Senopati</p>
          <h2 className="mt-6 text-center text-4xl font-black tracking-tight text-primary dark:text-white">Rp 25.000</h2>
          
          <div className="mt-10 w-full max-w-sm rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-xl shadow-black/5 border border-gray-100 dark:border-white/5 space-y-4">
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">ID Transaksi</span>
                <span className="font-mono font-bold text-gray-700 dark:text-gray-200">#DPAY-882910</span>
             </div>
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Waktu</span>
                <span className="font-bold text-gray-700 dark:text-gray-200">Today, 14:30 WIB</span>
             </div>
             <div className="h-px bg-dashed border-t border-gray-100 dark:border-white/10 my-2"></div>
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Metode Bayar</span>
                <span className="font-bold text-gray-700 dark:text-gray-200">Saldo D-PAY</span>
             </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md pb-10">
        <div className="max-w-md mx-auto space-y-3">
          <button className="w-full flex items-center justify-center gap-2 py-4 text-sm font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">download</span>
            Simpan Struk
          </button>
          <button onClick={() => navigate('/dashboard')} className="w-full h-14 bg-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 active:scale-95 transition-all">
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};