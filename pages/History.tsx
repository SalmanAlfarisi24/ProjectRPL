import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';

export const History: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-white overflow-hidden">
      {/* Fixed Header Container */}
      <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="px-4 pt-4 pb-3 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight flex-1 text-center pr-10">Riwayat Transaksi</h1>
        </div>
        
        {/* Sub-header Filter (also sticky inside header container) */}
        <div className="py-4 px-4 overflow-x-auto no-scrollbar flex gap-3">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 shadow-lg shadow-primary/20 transition-transform active:scale-95">
            <span className="text-white text-sm font-semibold leading-normal">Semua</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#272447] border border-gray-100 dark:border-white/5 px-5 hover:bg-gray-50 dark:hover:bg-[#322e59] transition-colors active:scale-95">
            <span className="text-gray-600 dark:text-gray-200 text-sm font-medium leading-normal">Masuk</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#272447] border border-gray-100 dark:border-white/5 px-5 hover:bg-gray-50 dark:hover:bg-[#322e59] transition-colors active:scale-95">
            <span className="text-gray-600 dark:text-gray-200 text-sm font-medium leading-normal">Keluar</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#272447] border border-gray-100 dark:border-white/5 px-5 hover:bg-gray-50 dark:hover:bg-[#322e59] transition-colors active:scale-95">
            <span className="material-symbols-outlined text-lg">calendar_month</span>
          </button>
        </div>
      </div>

      {/* Scrollable Transaction List */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="flex flex-col">
          <div className="px-5 pt-6 pb-2">
            <p className="text-gray-500 dark:text-[#9893c8] text-xs font-semibold uppercase tracking-wider">Hari ini</p>
          </div>
          
          {[
            { name: 'McDonalds', category: 'Makanan & Minuman', amount: '- Rp 55.000', icon: 'fastfood', color: 'bg-orange-100 text-orange-600' },
            { name: 'Top Up Saldo', category: 'Bank Transfer (BCA)', amount: '+ Rp 500.000', icon: 'account_balance_wallet', color: 'bg-blue-100 text-blue-600' },
            { name: 'Uber Trip', category: 'Transportasi', amount: '- Rp 42.000', icon: 'local_taxi', color: 'bg-gray-100 text-gray-600' },
            { name: 'Starbucks', category: 'Makanan & Minuman', amount: '- Rp 65.000', icon: 'coffee', color: 'bg-green-100 text-green-600' },
            { name: 'PLN Prabayar', category: 'Tagihan', amount: '- Rp 202.500', icon: 'bolt', color: 'bg-yellow-100 text-yellow-600' },
            { name: 'Netflix Subscription', category: 'Hiburan', amount: '- Rp 186.000', icon: 'theaters', color: 'bg-red-100 text-red-600' },
          ].map((item, idx) => (
            <div key={idx} onClick={() => navigate('/result/details')} className="group relative flex items-center gap-4 px-5 py-4 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer border-b border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-4 flex-1">
                <div className={`relative flex items-center justify-center rounded-2xl shrink-0 size-12 ${item.color} dark:bg-opacity-10`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 dark:text-white text-base font-semibold leading-tight line-clamp-1 mb-0.5">{item.name}</p>
                  <p className="text-gray-500 dark:text-[#9893c8] text-sm font-medium leading-normal line-clamp-1">{item.category}</p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className={`text-base font-bold leading-normal ${item.amount.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                  {item.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};