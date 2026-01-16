import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pin: React.FC = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState(false);

  const handlePress = (num: string) => {
    if (pin.length < 6) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 6) {
      setTimeout(() => {
        if (pin === '123456') { // Mock correct PIN
          navigate('/dashboard');
        } else {
          setError(true);
          setPin('');
          // Visual feedback for error
          setTimeout(() => setError(false), 500);
        }
      }, 300);
    }
  }, [pin, navigate]);

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate(-1)} className="flex size-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-all">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="size-12"></div>
      </div>
      <div className={`flex-1 flex flex-col items-center pt-8 px-6 transition-transform ${error ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}>
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2 animate-bounce">
            <span className="material-symbols-outlined text-primary text-[28px]">lock</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-center text-slate-900 dark:text-white">Masukkan PIN Keamanan</h2>
          <p className={`text-sm text-center transition-colors ${error ? 'text-red-500 font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
            {error ? 'PIN Salah, Silakan Coba Lagi' : 'Gunakan 6 digit kode rahasia Anda'}
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i < pin.length 
                  ? 'bg-primary shadow-[0_0_12px_#2617cf] scale-125' 
                  : 'border-2 border-slate-300 dark:border-slate-700 bg-transparent'
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-full px-6 pb-6 mt-auto">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} onClick={() => handlePress(num.toString())} className="flex h-16 items-center justify-center rounded-xl bg-white dark:bg-[#1E1E1E] shadow-sm hover:bg-slate-50 dark:hover:bg-white/5 active:scale-90 transition-all text-2xl font-semibold text-slate-900 dark:text-white">
              {num}
            </button>
          ))}
          <button className="flex h-16 items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95 text-primary">
            <span className="material-symbols-outlined text-[32px]">face</span>
          </button>
          <button onClick={() => handlePress("0")} className="flex h-16 items-center justify-center rounded-xl bg-white dark:bg-[#1E1E1E] shadow-sm hover:bg-slate-50 dark:hover:bg-white/5 active:scale-90 transition-all text-2xl font-semibold text-slate-900 dark:text-white">
            0
          </button>
          <button onClick={handleBackspace} className="flex h-16 items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95">
            <span className="material-symbols-outlined text-[28px] text-slate-500 dark:text-slate-400">backspace</span>
          </button>
        </div>
        <div className="flex justify-center pb-4">
          <button onClick={() => setError(true)} className="text-sm font-bold text-primary hover:text-primary/80 py-2 px-4 rounded-full transition-colors">Lupa PIN?</button>
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
};