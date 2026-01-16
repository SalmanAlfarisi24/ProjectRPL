import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TopUp: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('100000');

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      {/* Fixed Header */}
      <header className="sticky top-0 z-30 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-black tracking-tight uppercase">Isi Saldo</h2>
        <div className="size-10"></div>
      </header>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="px-5 py-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3e2ea6] to-primary p-6 shadow-xl">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Saldo Saat Ini</p>
            <p className="text-white text-3xl font-black">Rp 1.250.000</p>
          </div>
        </div>

        <div className="px-5">
          <label className="flex flex-col w-full">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3 ml-1">Pilih Nominal</p>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-black">Rp</span>
              <input 
                className="w-full rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 py-5 pl-12 pr-5 text-2xl font-black focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none shadow-sm" 
                placeholder="0" 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="px-5 py-6">
          <div className="grid grid-cols-3 gap-3">
            {['20.000', '50.000', '100.000', '200.000', '500.000', '1.000.000'].map(val => (
              <button key={val} 
                onClick={() => setAmount(val.replace(/\./g, ''))}
                className={`flex h-14 items-center justify-center rounded-xl border font-black text-xs transition-all active:scale-95 ${amount === val.replace(/\./g, '') ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-white/5 text-gray-500'}`}>
                {val}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 pb-8">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 ml-1">Metode Pembayaran</h3>
          <div className="space-y-3">
            <div className="rounded-2xl bg-white dark:bg-surface-dark border border-primary/20 p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Bank Transfer</p>
                  <p className="text-[10px] text-gray-400 font-medium">Otomatis Terverifikasi</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary">check_circle</span>
            </div>
            
            <div className="rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 p-4 flex items-center justify-between opacity-60">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <span className="material-symbols-outlined">store</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Retail Outlet</p>
                  <p className="text-[10px] text-gray-400 font-medium">Alfamart / Indomaret</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-300">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button Container */}
      <div className="p-5 border-t border-gray-100 dark:border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-gray-400 uppercase">Total Bayar</span>
          <span className="text-xl font-black text-primary">Rp {parseInt(amount || '0').toLocaleString('id-ID')}</span>
        </div>
        <button onClick={() => navigate('/result/success')} className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
          <span>Lanjutkan Pembayaran</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};