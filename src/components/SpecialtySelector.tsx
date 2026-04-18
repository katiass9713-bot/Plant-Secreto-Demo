import { Heart, Bug, Brain, Baby, ActivitySquare, Bandage, Ambulance, Bed, HeartPulse, Smile, Flower2, Stethoscope } from 'lucide-react';
import type { Specialty } from '@/hooks/useGameState';
import { cn } from '@/lib/utils';
import type { ElementType } from 'react';

const specialties: { id: Specialty; icon: ElementType; label: string }[] = [
  { id: 'Doenças Tropicais', icon: Bug, label: 'Doenças Tropicais' },
  { id: 'Pediatria', icon: Baby, label: 'Pediatria' },
  { id: 'Emergência', icon: ActivitySquare, label: 'Emergência' },
  { id: 'Feridas/Estomaterapia', icon: Bandage, label: 'Feridas/Estoma' },
  { id: 'Urgência e Emergência', icon: Ambulance, label: 'Urgência' },
  { id: 'UTI Adulto', icon: Bed, label: 'UTI Adulto' },
  { id: 'Saúde Mental', icon: Smile, label: 'Saúde Mental' },
  { id: 'Saúde da Mulher', icon: Flower2, label: 'Saúde da Mulher' },
  { id: 'APS', icon: Stethoscope, label: 'APS' },
];

interface Props {
  selected: Specialty | null;
  onSelect: (s: Specialty) => void;
}

export default function SpecialtySelector({ selected, onSelect }: Props) {
  return (
    <div className="space-y-3 animate-fade-in">
      <h2 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider">
        Especialidade do Plantão
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {specialties.map((s) => {
          const Icon = s.icon;
          const isSelected = selected === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={cn(
                "flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border transition-all duration-200",
                isSelected 
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,212,255,0.2)] scale-[1.02]" 
                  : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:bg-primary/5"
              )}
            >
              <Icon size={24} strokeWidth={1.5} className="mb-2" />
              <span className="text-xs sm:text-sm font-medium">{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
