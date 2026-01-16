import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [insightProgress, setInsightProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setInsightProgress(10), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-white overflow-hidden">
      {/* Fixed Header */}
      <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-5 py-4 border-b border-gray-100 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 shadow-sm">
            <img alt="Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNF_WbTajK4Pem5a0U_BEW3yoA7Efl3upGf7nAVBybST0zlTV3hyTj1JbB6pwkP9zTp-rYk_BYKaXC_ghWLe_Dci1deVtKxO2rB2RG3WM33FuNPq6kcLgCa-mlkrEGdfcArVDNPMUBKFmc2QMzUfWqCV1WnseV3eELlxsm9r33Wetu0NMosStEH3hDUVKS4zqj1zP--Gcut_joFsW0nfRn0zIutmp6g0VlFJQWnhD2s2YMZoHiBxyfB6N-FWrrq4jKqPBM7xvqJXf1" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold leading-tight text-gray-500 dark:text-gray-400">Halo, Salman!</h1>
            <p className="text-xs font-medium text-primary">Premium Member</p>
          </div>
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-background-dark"></span>
        </button>
      </header>

      {/* Scrollable Main Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Wallet Card Section */}
        <div className="px-5 pt-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5b4eff] to-[#2617cf] p-6 shadow-2xl shadow-primary/30">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-white/70 mb-1">Total Saldo</p>
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">Rp 1.500.000</h2>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-2">
                  <span className="material-symbols-outlined text-white">account_balance_wallet</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-yellow-300 fill-current">stars</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">2.500 SakuPoints</span>
                </div>
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">D-PAY Card</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Menu Grid - Updated: Bank Removed, 3 Columns */}
        <div className="px-5 py-8">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: 'add_card', label: 'Top Up', path: '/topup', color: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600' },
              { icon: 'send', label: 'Transfer', path: '/transfer', color: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600' },
              { icon: 'history', label: 'Riwayat', path: '/history', color: 'bg-green-50 dark:bg-green-500/10 text-green-600' }
            ].map((btn, idx) => (
              <button key={idx} onClick={() => btn.path !== '#' && navigate(btn.path)} className="group flex flex-col items-center gap-2">
                <div className={`flex h-14 w-full items-center justify-center rounded-2xl ${btn.color} shadow-sm transition-all group-active:scale-90`}>
                  <span className="material-symbols-outlined">{btn.icon}</span>
                </div>
                <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-tighter">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Insight Section */}
        <div className="px-5">
          <div className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-white/5">
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
                </div>
                <p className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">D-PAY AI Insight</p>
              </div>
              <p className="text-xs font-medium leading-relaxed text-gray-500 dark:text-[#9893c8] mt-1">
                Pengeluaran Anda bulan ini lebih hemat <span className="text-green-500 font-bold">{insightProgress}%</span> dari bulan lalu.
              </p>
            </div>
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full" 
                 style={{ background: `conic-gradient(#2617cf 0% ${insightProgress}%, #272447 ${insightProgress}% 100%)`, transition: 'background 1s ease-out' }}>
              <div className="h-10 w-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center">
                 <span className="text-[10px] font-black">{insightProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content (To test scrolling) */}
        <div className="mt-8 px-5 space-y-4">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Penawaran Spesial</h3>
          <div className="h-40 w-full rounded-2xl bg-cover bg-center shadow-lg relative overflow-hidden group" 
               style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5bpDhgPvArSfv9fxK-Op6SxK0H4WR_AoSW-LPUKXSMmt1rNycke0jpVtACQLqPnhOLmg028yYDsJnxbRVbpvxyqAJc_La9SjHUphNibtuQRB13h32Z4PyWCzud3u0E_O-VRA7i0lp5Y7GPY0WfjsxFI7KrIlbeT-86yUyhNlBfX4i8mbX8oxzwmo8ZjZD81O9dhxDRfBpccmAvNELaAzR1y9ASiA1mhSDFKgMjMrIrY4zCHdJOFbmrPuU3_Smg29BFbsztDoLwXyB")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded bg-red-500 px-2 py-0.5 text-[9px] font-black uppercase text-white mb-2 tracking-widest">Limited Time</span>
              <p className="text-sm font-bold text-white">Cashback 50% untuk Top Up pertama Anda menggunakan Bank BCA!</p>
            </div>
          </div>
          
          <div className="p-5 rounded-2xl border border-dashed border-gray-300 dark:border-white/10 flex flex-col items-center justify-center text-center gap-2 py-8">
             <span className="material-symbols-outlined text-gray-300 dark:text-white/10 text-4xl">inventory_2</span>
             <p className="text-xs font-bold text-gray-400">Belum ada promo lainnya untuk saat ini.</p>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav />
    </div>
  );
};