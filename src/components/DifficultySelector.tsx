import type { Difficulty } from '@/hooks/useGameState';
import { cn } from '@/lib/utils';

const difficulties: { id: Difficulty; label: string; color: string }[] = [
  { id: 'fácil', label: 'Iniciante', color: 'text-green-400 border-green-400/50 bg-green-400/10' },
  { id: 'médio', label: 'Intermediário', color: 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10' },
  { id: 'difícil', label: 'Avançado', color: 'text-orange-400 border-orange-400/50 bg-orange-400/10' },
  { id: 'expert', label: 'Expert', color: 'text-red-400 border-red-400/50 bg-red-400/10' },
];

interface Props {
  selected: Difficulty | null;
  onSelect: (d: Difficulty) => void;
}

export default function DifficultySelector({ selected, onSelect }: Props) {
  return (
    <div className="space-y-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
      <h2 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider">
        Nível do Desafio
      </h2>
      <div className="flex gap-2 sm:gap-3">
        {difficulties.map((d) => {
          const isSelected = selected === d.id;
          return (
            <button
              key={d.id}
              onClick={() => onSelect(d.id)}
              className={cn(
                "flex-1 py-3 rounded-xl border transition-all duration-200 text-sm font-medium",
                isSelected 
                  ? `${d.color} shadow-sm scale-[1.02]` 
                  : "bg-card border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {d.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
