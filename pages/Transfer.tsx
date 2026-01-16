import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Transfer: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      {/* Fixed Header */}
      <header className="sticky top-0 z-30 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-white/5">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-black tracking-tight uppercase">Transfer</h2>
        <div className="size-10"></div>
      </header>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-5 py-6">
           <div className="bg-primary text-white p-5 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-between">
              <div>
                 <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">Sumber Dana</p>
                 <p className="text-lg font-bold">D-PAY Wallet</p>
                 <p className="text-xs text-white/80 mt-1">Saldo: Rp 1.500.000</p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-50">account_balance_wallet</span>
           </div>
        </div>

        <div className="px-5 space-y-4">
          <label className="flex flex-col w-full gap-2">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider ml-1">Tujuan Transfer</p>
            <div className="flex items-center gap-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-2 rounded-xl">
               <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined">person</span>
               </div>
               <input 
                  className="flex-1 bg-transparent border-none outline-none text-base font-semibold placeholder:font-normal" 
                  placeholder="Nomor HP atau Rekening" 
                  type="text"
                />
               <button className="w-10 h-10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">contact_page</span>
               </button>
            </div>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3 ml-1">Nominal Transfer</p>
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
          
          <div className="flex flex-col gap-2 pt-4">
             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider ml-1">Terakhir Ditransfer</p>
             <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {[
                  { name: 'Budi', img: 'https://i.pravatar.cc/150?u=1' },
                  { name: 'Siti', img: 'https://i.pravatar.cc/150?u=2' },
                  { name: 'Ahmad', img: 'https://i.pravatar.cc/150?u=3' },
                  { name: 'Dewi', img: 'https://i.pravatar.cc/150?u=4' },
                  { name: 'Rian', img: 'https://i.pravatar.cc/150?u=5' }
                ].map((user, i) => (
                   <button key={i} className="flex flex-col items-center gap-2 shrink-0 w-16 group">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                         <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{user.name}</span>
                   </button>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-5 border-t border-gray-100 dark:border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={() => navigate('/confirmation')} className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
          <span>Lanjut</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};