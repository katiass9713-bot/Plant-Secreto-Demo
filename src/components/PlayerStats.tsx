import { useGameState } from '@/hooks/useGameState';
import { useAuth } from '@/hooks/useAuth';
import { Trophy, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PlayerStats({ specialty }: { specialty: any }) {
  const { user } = useAuth();
  const { xp, level, title, getCasesRemaining } = useGameState(user?.email);

  const casesRemaining = getCasesRemaining();
  const casesPlayed = 30 - casesRemaining;

  // Calculate progress to next level
  const getNextLevelXp = (currentLevel: number) => {
    if (currentLevel === 1) return 1000;
    if (currentLevel === 2) return 3000;
    if (currentLevel === 3) return 6000;
    if (currentLevel === 4) return 10000;
    if (currentLevel === 5) return 15000;
    if (currentLevel === 6) return 21000;
    return 21000; // Max level
  };

  const getPrevLevelXp = (currentLevel: number) => {
    if (currentLevel === 1) return 0;
    if (currentLevel === 2) return 1000;
    if (currentLevel === 3) return 3000;
    if (currentLevel === 4) return 6000;
    if (currentLevel === 5) return 10000;
    if (currentLevel === 6) return 15000;
    return 21000;
  };

  const nextLevelXp = getNextLevelXp(level);
  const prevLevelXp = getPrevLevelXp(level);
  const progress = level === 7 ? 100 : Math.max(0, Math.min(100, ((xp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100));

  return (
    <div className="flex flex-col gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-3 sm:p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <span className="font-heading font-bold text-primary text-lg">
              {user?.email?.charAt(0).toUpperCase() || 'E'}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground leading-none mb-1">Enf(a). {user?.email?.split('@')[0] || 'Enfermeiro(a)'}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1 text-neon-gold font-bold">
                <Trophy size={12} /> {title}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-neon-cyan">
                <Star size={12} /> {xp} XP
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar and Daily Limit */}
      <div id="player-progress-section" className="w-full">
        <div className="flex justify-between items-end text-[10px] text-muted-foreground mb-1.5">
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-foreground/70 uppercase tracking-wider text-[9px]">Progresso de Nível</span>
            <span className="text-xs font-bold text-foreground">Nível {level}</span>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="font-semibold text-foreground/70 uppercase tracking-wider text-[9px]">Plantão Diário</span>
            <span className={cn(
              "text-xs font-bold",
              casesRemaining <= 5 ? "text-red-500 animate-pulse" : "text-primary"
            )}>
              {casesPlayed}/30 <span className="text-[10px] opacity-70 font-medium whitespace-nowrap">Casos Totais</span>
            </span>
          </div>
        </div>
        <div id="xp-progress-bar" className="h-2 w-full bg-background/50 rounded-full overflow-hidden border border-border/30 backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-primary via-neon-purple to-neon-cyan transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,212,255,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        {level < 7 && (
          <p className="text-[9px] text-muted-foreground mt-1.5 text-center italic">
            Faltam {nextLevelXp - xp} XP para atingir o Nível {level + 1}
          </p>
        )}
      </div>
    </div>
  );
}
