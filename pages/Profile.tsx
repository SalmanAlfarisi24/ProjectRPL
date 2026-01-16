import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';

export const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden">
      {/* Fixed Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <div className="w-10"></div>
        <h1 className="text-lg font-bold tracking-tight">Profile</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32 px-4">
        <div className="flex flex-col items-center mt-4 mb-8">
          <div className="relative group cursor-pointer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-light dark:border-surface-dark shadow-xl">
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGY0ib0Q78LGzrlhsGvNN-m-OtM_AMrWcrTSdEfpH-iYeN6bVgGxFLaCR35wdsfSe3BLoLSAGcU4piko9-escSq1isw9CoIFUdyXXnMPDuxKA4R-4ka1caGH0Jaywo_f9D6HZUaopF_6uCsDTxGDZgxIJviNkcmXED7A5xuAWCWstUpn63uMrF-tWcucTv5R2Nc8PYRrH7_E3BRfcpTvQNFQBrbEkYdLdsh4IqZVp0MSqVi33GJ6So0dXeoZDQQbmLhVFxW4IuZ-zG")' }}
              >
              </div>
            </div>
            <button className="absolute bottom-1 right-1 flex items-center justify-center w-9 h-9 bg-primary text-white rounded-full border-2 border-background-light dark:border-background-dark shadow-lg hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
          <div className="mt-4 text-center space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Salman</h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[16px] filled">verified</span>
              <span className="text-sm font-semibold text-primary">Premium Member</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            {[
              { icon: 'person', label: 'Personal Information', sub: 'Name, Email, Phone', color: 'text-blue-600 bg-blue-100' },
              { icon: 'fingerprint', label: 'Security Settings', sub: 'PIN & Biometric', color: 'text-teal-600 bg-teal-100' },
              { icon: 'account_balance', label: 'Linked Bank Accounts', sub: 'Manage cards & banks', color: 'text-purple-600 bg-purple-100' },
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <button className="group flex items-center justify-between p-4 w-full active:bg-slate-50 dark:active:bg-white/5 transition-colors text-left">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${item.color} dark:bg-opacity-20`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-none">{item.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </button>
                {idx < 2 && <div className="h-px bg-slate-100 dark:bg-white/5 mx-4"></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            {[
              { icon: 'language', label: 'App Language', sub: 'English (US)', color: 'text-orange-600 bg-orange-100' },
              { icon: 'help', label: 'Help Center', sub: 'FAQ & Support', color: 'text-slate-600 bg-slate-100' },
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <button className="group flex items-center justify-between p-4 w-full active:bg-slate-50 dark:active:bg-white/5 transition-colors text-left">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${item.color} dark:bg-opacity-20`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-none">{item.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </button>
                {idx < 1 && <div className="h-px bg-slate-100 dark:bg-white/5 mx-4"></div>}
              </React.Fragment>
            ))}
          </div>

          <button onClick={() => navigate('/welcome')} className="mt-4 flex items-center justify-center gap-2 p-4 w-full rounded-2xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-500 active:scale-[0.98] transition-all font-bold">
            <span className="material-symbols-outlined">logout</span>
            <span>Log Out</span>
          </button>
          
          <p className="text-center text-xs text-slate-400 dark:text-slate-600 py-4 mb-4">
            App Version 2.4.1
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};