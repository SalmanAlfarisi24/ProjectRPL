import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Scan: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Simulasi deteksi otomatis QR setelah 3 detik
    const timer = setTimeout(() => {
      handleScan();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScan = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate('/confirmation');
    }, 800);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark h-full w-full overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 z-0 bg-black">
        <img className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm_ETiYB4okYHCkHmJZDgJ9IFAHvLg-U1WUBYxqhhI_3fSwE2-p_9U-rIgNQFh3alBVmEk4C5n8n0ox5wXfgNN3eolQ5qULmvYvNQVYfAAnTzGdo0opJ071IuvgVaSIAUjSbzuh6JVEMzquPRoc9leyIFJNi2f2Z_-4scGqvBwVuiFrSiVVVuPQEIrM5msaZ2tk22Hz2Uz4fPUTIxCX-twp2qz16xOcQsDHr4Qh-ZrDRUjBZk63zT-1P9JzJFhFEk56sq684Elu734" alt="Camera Feed" />
        <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"></div>
      </div>
      
      {isProcessing && (
        <div className="absolute inset-0 z-50 bg-primary/20 backdrop-blur-md flex items-center justify-center animate-pulse">
           <div className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full w-full">
        <div className="flex items-center justify-between p-6 pt-8">
          <button onClick={() => navigate(-1)} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
            <span className="material-symbols-outlined text-white">close</span>
          </button>
          <div className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <span className="text-xs font-bold text-white/90 tracking-widest uppercase">Smart Scan</span>
          </div>
          <div className="w-12"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative w-full">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 group/scanner">
            <div className="absolute inset-0 overflow-hidden rounded-3xl z-0 shadow-2xl ring-1 ring-white/10">
              <img className="w-full h-full object-cover scale-110 brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGBgRu4ewXAvx9EIx94o21GErUHm-tNMHgCKyy6ItiMocFubsYCyAZPh2VKksj6zp5ylJ73UgmedfUn8Ns0Ki11q_qeVmWUYFg8MH7_f6ufcvvRRxWX6L8lSFxe8iVch24SFWq1VoVWZiSmyyXTTN3NfVZOyZEvO7AUokjiX7TWrHd4F98ZEP8U4BsWRL-Fl6cMTcklUgxZvm1NdLvJF6DffpysJ0YcJ8q-KLzkX1BMfbtfq_kI1VOirPVJVPLbwPoZbzLfYqXUnZF" alt="QR Focus" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
            </div>
            <div className="absolute top-0 left-0 w-12 h-12 border-t-[5px] border-l-[5px] border-primary rounded-tl-2xl z-20 shadow-[0_0_15px_rgba(38,23,207,0.6)]"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-[5px] border-r-[5px] border-primary rounded-tr-2xl z-20 shadow-[0_0_15px_rgba(38,23,207,0.6)]"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[5px] border-l-[5px] border-primary rounded-bl-2xl z-20 shadow-[0_0_15px_rgba(38,23,207,0.6)]"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[5px] border-r-[5px] border-primary rounded-br-2xl z-20 shadow-[0_0_15px_rgba(38,23,207,0.6)]"></div>
            <div className="absolute left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-30 shadow-[0_0_25px_#2617cf] animate-[bounce_2.5s_infinite]"></div>
          </div>
          <p className="mt-10 text-white text-sm font-medium bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">Align QR code within frame</p>
        </div>

        <div className="pb-12 px-6 w-full">
          <div className="mx-auto max-w-sm w-full bg-[#1c1a32]/80 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 flex items-center justify-between shadow-2xl relative">
            <button className="flex flex-col items-center justify-center gap-1.5 w-20 opacity-50">
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-transparent">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '22px' }}>image</span>
              </div>
              <span className="text-[11px] text-white/50">Gallery</span>
            </button>
            <button onClick={handleScan} className="relative z-10 -mt-10 group">
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-18 h-18 p-1 rounded-full bg-background-dark/50 backdrop-blur-sm border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#1a0f96] flex items-center justify-center shadow-inner border-2 border-white/10 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '30px' }}>qr_code_scanner</span>
                </div>
              </div>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 w-20 opacity-50">
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-transparent">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '22px' }}>flash_on</span>
              </div>
              <span className="text-[11px] text-white/50">Flash</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};