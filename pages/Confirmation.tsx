import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState(false);

  const handlePay = () => {
    setIsPaying(true);
    setTimeout(() => {
      navigate('/result/success');
    }, 1500);
  };

  return (
    <div className="bg-background-dark h-screen w-full relative overflow-hidden flex flex-col">
      {/* Background kamera simulasi */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover blur-[1px] opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm_ETiYB4okYHCkHmJZDgJ9IFAHvLg-U1WUBYxqhhI_3fSwE2-p_9U-rIgNQFh3alBVmEk4C5n8n0ox5wXfgNN3eolQ5qULmvYvNQVYvAAnTzGdo0opJ071IuvgVaSIAUjSbzuh6JVEMzquPRoc9leyIFJNi2f2Z_-4scGqvBwVuiFrSiVVVuPQEIrM5msaZ2tk22Hz2Uz4fPUTIxCX-twp2qz16xOcQsDHr4Qh-ZrDRUjBZk63zT-1P9JzJFhFEk56sq684Elu734" alt="Camera blur" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10 animate-[slide-up_0.5s_ease-out]">
        <div className="relative w-full bg-white dark:bg-surface-dark rounded-t-[32px] shadow-2xl pb-10 pt-2 flex flex-col items-stretch">
          <div className="w-full flex justify-center py-4">
            <div className="w-12 h-1.5 bg-gray-200 dark:bg-[#383465] rounded-full"></div>
          </div>
          
          <div className="px-6 mb-6 flex flex-col items-center">
             <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Konfirmasi Pembayaran</h4>
             <div className="relative group mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25"></div>
                <div className="relative w-20 h-20 rounded-full border-4 border-white dark:border-[#2d2a45] overflow-hidden shadow-lg">
                   <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVrOxSk_tht8vHuBeCpASn__JnbUOFe5G5tluxqJ3LtBjj-vSrMc34hy59ZGlcXcnn9pCqy3SOdF_25-T26KSLqqVoSpvEthYsFh9oEZp_rzwkYt_gbdLt13zZBnDVWrP0eRkcpkgj81-kotWdFOAeogBFQsj1JPPXY37Ev6xFvy64wIylxaUXOoQLWVLbsC4bwhzpSmkrWEQEbqwN0t8xwM4WiannqElFpdtzpL2bz307Ar4Aug-LrIDaO3tGV9gpkW6kA6fk3NqQ" alt="Merchant" />
                </div>
             </div>
             <h2 className="text-gray-900 dark:text-white text-xl font-bold">Kopi Kenangan</h2>
             <p className="text-gray-500 text-sm mt-0.5">Coffee Shop • Senopati</p>
          </div>

          <div className="px-6 mb-8 text-center">
            <h1 className="text-gray-900 dark:text-white text-4xl font-extrabold tracking-tight">Rp 25.000</h1>
          </div>

          <div className="px-6 space-y-3 mb-8">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Harga Item</span>
              <span className="text-gray-900 dark:text-white font-medium">Rp 25.000</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Biaya Admin</span>
              <span className="text-emerald-500 font-bold">Gratis</span>
            </div>
            <div className="h-px bg-gray-100 dark:bg-[#2d2a45] my-2"></div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-white font-bold">Total Bayar</span>
              <span className="text-primary font-extrabold text-lg">Rp 25.000</span>
            </div>
          </div>

          <div className="px-6 mb-6">
            <div className="bg-gray-50 dark:bg-[#151421] border border-gray-100 dark:border-[#2d2a45] rounded-2xl p-4 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                     <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs font-bold text-gray-900 dark:text-white">Saldo Utama</span>
                     <span className="text-[10px] text-gray-500 mt-0.5">Rp 1.500.000</span>
                  </div>
               </div>
               <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </div>
          </div>

          <div className="px-6">
            <button 
              onClick={handlePay} 
              disabled={isPaying}
              className={`w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-3 active:scale-95 ${isPaying ? 'opacity-80 cursor-wait' : 'hover:brightness-110'}`}
            >
              {isPaying ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <span>Konfirmasi & Bayar</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[12px]">verified_user</span>
              Transaksi Aman dengan D-PAY Shield
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};