import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';

export const Promo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      {/* Fixed Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-5 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <h1 className="text-xl font-extrabold tracking-tight">Promo Spesial</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">confirmation_number</span>
        </button>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 px-5 pt-6">
        <div className="flex flex-col gap-6">
          {/* Featured Promo */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5bpDhgPvArSfv9fxK-Op6SxK0H4WR_AoSW-LPUKXSMmt1rNycke0jpVtACQLqPnhOLmg028yYDsJnxbRVbpvxyqAJc_La9SjHUphNibtuQRB13h32Z4PyWCzud3u0E_O-VRA7i0lp5Y7GPY0WfjsxFI7KrIlbeT-86yUyhNlBfX4i8mbX8oxzwmo8ZjZD81O9dhxDRfBpccmAvNELaAzR1y9ASiA1mhSDFKgMjMrIrY4zCHdJOFbmrPuU3_Smg29BFbsztDoLwXyB" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Main Promo" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block self-start rounded bg-red-600 px-2 py-1 text-[10px] font-black uppercase text-white mb-2 tracking-widest">Hot Deal</span>
                <h2 className="text-xl font-bold text-white leading-tight mb-1">Cashback 50% Top Up BCA</h2>
                <p className="text-sm text-gray-300 font-medium">Berlaku hingga 31 Des</p>
             </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full"></span>
            <h3 className="text-lg font-bold tracking-tight">Voucher Saya</h3>
          </div>

          <div className="flex flex-col gap-4">
             {[
               { title: 'Diskon Kopi Kenangan 20%', valid: 'Valid until 20 Oct', icon: 'coffee', color: 'bg-orange-100 text-orange-600' },
               { title: 'Gratis Biaya Admin Transfer', valid: 'Valid until 25 Oct', icon: 'account_balance', color: 'bg-blue-100 text-blue-600' },
               { title: 'Cashback Tagihan Listrik', valid: 'Valid until 30 Oct', icon: 'bolt', color: 'bg-yellow-100 text-yellow-600' },
             ].map((item, idx) => (
               <div key={idx} className="flex bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 gap-4 items-center">
                  <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                     <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 border-r border-dashed border-gray-200 dark:border-white/10 pr-4">
                     <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">{item.title}</h4>
                     <p className="text-xs text-gray-500 font-medium">{item.valid}</p>
                  </div>
                  <button className="text-xs font-bold text-primary px-2 hover:underline">Gunakan</button>
               </div>
             ))}
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <span className="h-6 w-1 bg-primary rounded-full"></span>
            <h3 className="text-lg font-bold tracking-tight">Promo Lainnya</h3>
          </div>
          
           <div className="grid grid-cols-2 gap-4">
             {[1, 2].map((i) => (
                <div key={i} className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm">
                   <div className="h-24 bg-gray-200 dark:bg-white/5 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-white/20">local_mall</span>
                      </div>
                   </div>
                   <div className="p-3">
                      <h4 className="font-bold text-sm mb-1 leading-tight">Promo Belanja Hemat</h4>
                      <p className="text-[10px] text-gray-500">Min. transaksi 50rb</p>
                   </div>
                </div>
             ))}
           </div>

        </div>
      </main>
      <BottomNav />
    </div>
  );
};