import { useState, useEffect, useCallback } from 'react';
import { isToday } from 'date-fns';

export type Specialty = 'Doenças Tropicais' | 'Pediatria' | 'Emergência' | 'Feridas/Estomaterapia' | 'Urgência e Emergência' | 'UTI Adulto' | 'Saúde Mental' | 'Saúde da Mulher' | 'APS';
export type Difficulty = 'fácil' | 'médio' | 'difícil' | 'expert';

interface GameState {
  xp: number;
  level: number;
  title: string;
  casesPlayedToday: Record<Specialty, number>;
  completedCombinations: Record<string, boolean>; // key: "specialty-difficulty"
  lastPlayedDate: string | null;
  playedCases: string[];
}

const getTitleForXp = (xp: number) => {
  if (xp < 1000) return 'Iniciante';
  if (xp < 3000) return 'Estudante Dedicado';
  if (xp < 6000) return 'Interno Promissor';
  if (xp < 10000) return 'Enfermeiro Júnior';
  if (xp < 15000) return 'Enfermeiro Pleno';
  if (xp < 21000) return 'Enfermeiro Sênior';
  return 'Rei da Clínica';
};

const getLevelForXp = (xp: number) => {
  if (xp < 1000) return 1;
  if (xp < 3000) return 2;
  if (xp < 6000) return 3;
  if (xp < 10000) return 4;
  if (xp < 15000) return 5;
  if (xp < 21000) return 6;
  return 7;
};

const getDefaultState = (): GameState => ({
  xp: 0,
  level: 1,
  title: 'Iniciante',
  casesPlayedToday: {
    'Doenças Tropicais': 0,
    'Pediatria': 0,
    'Emergência': 0,
    'Feridas/Estomaterapia': 0,
    'Urgência e Emergência': 0,
    'UTI Adulto': 0,
    'Saúde Mental': 0,
    'Saúde da Mulher': 0,
    'APS': 0
  },
  completedCombinations: {},
  lastPlayedDate: null,
  playedCases: []
});

export function useGameState(userEmail?: string) {
  const [state, setState] = useState<GameState>(getDefaultState());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!userEmail) {
      setState(getDefaultState());
      setLoaded(true);
      return;
    }

    const storageKey = `plantao_state_${userEmail}`;
    try {
      const stored = localStorage.getItem(storageKey);
      
      if (stored) {
        const parsed = JSON.parse(stored);
        // Reset daily limit if it's a new day
        if (parsed.lastPlayedDate && !isToday(new Date(parsed.lastPlayedDate))) {
          parsed.casesPlayedToday = getDefaultState().casesPlayedToday;
        }
        // Ensure title is set for older saves
        if (!parsed.title) {
          parsed.title = getTitleForXp(parsed.xp || 0);
        }
        if (!parsed.playedCases) {
          parsed.playedCases = [];
        }
        if (!parsed.completedCombinations) {
          parsed.completedCombinations = {};
        }
        setState(parsed);
      } else {
        setState(getDefaultState());
      }
    } catch (error) {
      console.error("Error loading game state:", error);
      setState(getDefaultState());
    } finally {
      setLoaded(true);
    }
  }, [userEmail]);

  const addXp = useCallback((baseXp: number, difficulty: Difficulty, correct: boolean, specialty: Specialty, caseId?: string) => {
    if (!userEmail) return 0;
    
    const multiplier = difficulty === 'fácil' ? 1 : difficulty === 'médio' ? 1.5 : difficulty === 'difícil' ? 2 : 3;
    const earnedXp = correct ? Math.round(baseXp * multiplier) : 0;
    
    setState(prev => {
      const newXp = prev.xp + earnedXp;
      const newLevel = getLevelForXp(newXp);
      const newTitle = getTitleForXp(newXp);
      
      const newCasesPlayed = { ...prev.casesPlayedToday };
      newCasesPlayed[specialty] = (newCasesPlayed[specialty] || 0) + 1;

      const newCompletedCombinations = { ...prev.completedCombinations };
      newCompletedCombinations[`${specialty}-${difficulty}`] = true;

      const newPlayedCases = [...prev.playedCases];
      if (caseId && !newPlayedCases.includes(caseId)) {
        newPlayedCases.push(caseId);
      }

      const newState = {
        ...prev,
        xp: newXp,
        level: newLevel,
        title: newTitle,
        casesPlayedToday: newCasesPlayed,
        completedCombinations: newCompletedCombinations,
        lastPlayedDate: new Date().toISOString(),
        playedCases: newPlayedCases
      };
      
      localStorage.setItem(`plantao_state_${userEmail}`, JSON.stringify(newState));
      return newState;
    });
    
    return earnedXp;
  }, [userEmail]);

  const getCasesRemaining = useCallback(() => {
    const totalPlayed = (Object.values(state.casesPlayedToday) as number[]).reduce((sum, val) => sum + val, 0);
    return Math.max(0, 30 - totalPlayed);
  }, [state.casesPlayedToday]);

  return {
    ...state,
    loaded,
    addXp,
    getCasesRemaining
  };
}
