import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const katiaQuotes = [
  "A clínica é soberana, doutor(a)!",
  "Exame complementar não substitui anamnese.",
  "Na dúvida, examine o paciente novamente.",
  "Qual a fisiopatologia disso?",
  "Não trate o exame, trate o paciente.",
  "Quem não sabe o que procura, não entende o que encontra."
];

export default function KatiaBubble() {
  const [quote, setQuote] = useState(katiaQuotes[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(katiaQuotes[Math.floor(Math.random() * katiaQuotes.length)]);
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }, 15000); // Show every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-[250px] transition-all duration-500 z-50",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
    )}>
      <div className="bg-card border border-primary/30 shadow-[0_0_15px_rgba(0,212,255,0.15)] rounded-2xl rounded-br-sm p-3 sm:p-4 relative">
        <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          <MessageCircle size={16} />
        </div>
        <p className="text-xs sm:text-sm font-medium text-foreground/90 italic">
          "{quote}"
        </p>
        <p className="text-[10px] text-primary font-bold mt-1 uppercase tracking-wider text-right">
          - Profª Kátia
        </p>
      </div>
    </div>
  );
}
