import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigate } from 'react-router-dom';
import PlayerStats from '@/components/PlayerStats';
import SpecialtySelector from '@/components/SpecialtySelector';
import DifficultySelector from '@/components/DifficultySelector';
import CaseCard from '@/components/CaseCard';
import FeedbackCard from '@/components/FeedbackCard';
import KatiaBubble from '@/components/KatiaBubble';
import Bulario from '@/components/Bulario';
import { useGameState, type Specialty, type Difficulty } from '@/hooks/useGameState';
import { useGenerateCase } from '@/hooks/useGenerateCase';
import { useAuth } from '@/hooks/useAuth';
import type { ClinicalCase } from '@/data/mockCases';
import { toast } from 'sonner';
import { Stethoscope, Clock, Brain, ArrowLeft, Pill } from 'lucide-react';

type Phase = 'home' | 'ready' | 'case' | 'feedback' | 'bulario';

export default function Index() {
  const { user, loading: authLoading, signOut } = useAuth();
  const { addXp, loaded, playedCases, xp, level, title, getCasesRemaining, completedCombinations } = useGameState(user?.email);
  const { generate, saveAnswer, loading: generatingCase } = useGenerateCase();
  const [phase, setPhase] = useState<Phase>('home');
  const [specialty, setSpecialty] = useState<Specialty | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [currentCase, setCurrentCase] = useState<ClinicalCase | null>(null);
  const [lastResult, setLastResult] = useState<{ correct: boolean; xp: number } | null>(null);
  const [showPurchaseOverlay, setShowPurchaseOverlay] = useState(false);

  const isLimitReached = getCasesRemaining() <= 0;
  const combinationKey = specialty && difficulty ? `${specialty}-${difficulty}` : null;
  const isCombinationReached = combinationKey ? completedCombinations[combinationKey] : false;

  const handleGenerateCase = useCallback(async () => {
    if (!specialty || !difficulty) return;
    
    if (completedCombinations[`${specialty}-${difficulty}`]) {
      setShowPurchaseOverlay(true);
      return;
    }

    setPhase('ready');
    const c = await generate(specialty, difficulty, user?.id, playedCases);
    if (c) {
      setCurrentCase(c);
      setPhase('case');
    } else {
      toast.error('Não foi possível gerar o caso. Tente novamente.');
      setPhase('home');
    }
  }, [specialty, difficulty, generate, user, playedCases]);

  const handleAnswer = useCallback((optionId: string, correct: boolean) => {
    if (!difficulty || !currentCase || !user || !specialty) return;
    const xpEarned = addXp(100, difficulty, correct, specialty, currentCase.id);
    setLastResult({ correct, xp: xpEarned });
    setPhase('feedback');
    saveAnswer(currentCase.id, user.id, optionId, correct);
  }, [difficulty, addXp, currentCase, user, saveAnswer, specialty]);

  const handleNextCase = useCallback(() => {
    handleGenerateCase();
  }, [handleGenerateCase]);

  const handleBackHome = useCallback(() => {
    setCurrentCase(null);
    setLastResult(null);
    setPhase('home');
  }, []);

  if (authLoading || !loaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grid effect */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(195 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-lg mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-20">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 animate-fade-in relative">
          <button
            onClick={signOut}
            className="absolute right-0 top-0 text-xs text-muted-foreground hover:text-primary transition-colors font-heading"
          >
            Sair ↗
          </button>
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-primary text-glow-cyan tracking-wider uppercase">
            PLANTÃO SECRETO
          </h1>
          <p className="font-heading text-sm text-muted-foreground mt-0.5">
            Desafio da Professora Kátia - Enfermagem
          </p>
        </div>

        {/* Player stats always visible */}
        <div className="mb-4 sm:mb-6 space-y-4">
          <PlayerStats specialty={specialty} />

          {/* Inline Bulario Button */}
          {phase === 'home' && !generatingCase && (
            <button
              onClick={() => setPhase('bulario')}
              className="flex flex-col items-center gap-1.5 w-max group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-card/10 backdrop-blur-sm border-2 border-primary border-dashed rounded-full shadow-[0_0_15px_rgba(0,212,255,0.1)] hover:bg-primary/10 transition-colors animate-pulse">
                <Pill size={20} className="text-primary" strokeWidth={2} />
              </div>
              <span className="font-heading text-[10px] text-primary font-bold tracking-widest uppercase">
                Bulário
              </span>
            </button>
          )}
        </div>

        {/* Phase: Home - selection */}
        {phase === 'home' && (
          <div className="space-y-5">
            <SpecialtySelector selected={specialty} onSelect={setSpecialty} />
            <DifficultySelector selected={difficulty} onSelect={setDifficulty} />

            {specialty && difficulty && (
              <div className="animate-scale-in text-center space-y-3">
                <button
                  onClick={handleGenerateCase}
                  disabled={generatingCase}
                  className="w-full btn-neon text-primary-foreground py-4 rounded-xl font-heading text-lg tracking-wider animate-pulse-glow disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  <Stethoscope size={20} strokeWidth={1.5} />
                  O QUE TEMOS HOJE POR AQUI?
                </button>
              </div>
            )}
          </div>
        )}

        {/* Phase: Ready - loading */}
        {phase === 'ready' && (
          <div className="text-center space-y-4 animate-scale-in">
            <div className="card-game">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
              <p className="font-heading text-lg text-foreground mb-1 flex items-center justify-center gap-2">
                Gerando o caso do dia... <Brain size={20} strokeWidth={1.5} className="text-primary" />
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">{specialty}</span> • <span className="text-neon-purple font-semibold capitalize">{difficulty}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2 animate-pulse">
                Professora Kátia está preparando tudo para você...
              </p>
            </div>
          </div>
        )}

        {/* Phase: Case */}
        {phase === 'case' && currentCase && (
          <div className="space-y-3">
            <button
              onClick={handleBackHome}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-heading"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              Voltar ao início
            </button>
            <CaseCard clinicalCase={currentCase} onAnswer={handleAnswer} />
          </div>
        )}

        {/* Phase: Feedback */}
        {phase === 'feedback' && currentCase && lastResult && (
          <div className="space-y-3">
            <button
              onClick={handleBackHome}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-heading"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              Voltar ao início
            </button>
            <FeedbackCard
              clinicalCase={currentCase}
              correct={lastResult.correct}
              xpEarned={lastResult.xp}
              onNext={handleNextCase}
            />
          </div>
        )}

        {/* Phase: Bulario */}
        {phase === 'bulario' && (
          <div className="animate-fade-in pb-10 mt-4">
            <button
              onClick={handleBackHome}
              className="mb-8 text-sm text-primary flex items-center gap-1 hover:text-primary/80 transition-colors font-heading bg-primary/10 px-4 py-2 rounded-lg"
            >
              <ArrowLeft size={16} /> VOLTAR AO PLANTÃO
            </button>
            
            <div className="mb-6 space-y-2">
              <h2 className="font-heading text-xl font-bold text-primary tracking-wider uppercase mb-1 flex items-center gap-2">
                <Pill className="text-primary h-5 w-5" /> GUIA FARMACÊUTICO
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Repositório oficial do plantão. Consulta rápida e <span className="text-primary font-bold">100% offline</span> de posologias, vazões e toxicidade de drogas críticas e de alto risco.
              </p>
            </div>
            
            <Bulario />
          </div>
        )}
      </div>

      <KatiaBubble />

      {/* Specialty/Difficulty Combination Limit Overlay (Purchase Intent) */}
      <AnimatePresence>
        {(showPurchaseOverlay || (isCombinationReached && phase === 'home')) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-6 bg-background/60 backdrop-blur-xl overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-full max-w-md bg-card border-2 border-primary/50 shadow-[0_0_50px_rgba(0,212,255,0.4)] rounded-3xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-neon-purple to-primary" />
              
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
                <Brain className="text-primary animate-pulse" size={32} />
              </div>
              
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">
                {phase === 'feedback' ? 'Próximo Nível Bloqueado! 🔓' : 'Nível Concluído! 🏆'}
              </h2>
              
              <div className="space-y-4 mb-8 text-sm">
                <p className="text-foreground/90 leading-relaxed font-medium">
                  {phase === 'feedback' 
                    ? `Parabéns por concluir seu caso em ${specialty}! Na versão demo, você pode testar um caso de cada nível.`
                    : `Você já dominou este nível de ${specialty} na versão demo.`}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Para continuar este plantão com <span className="text-primary font-bold">casos infinitos</span>, feedbacks avançados da Prof. Kátia e acesso ao banco completo de dados, assine agora!
                </p>
              </div>

              <div className="grid gap-3">
                <a 
                  href="https://enfaka.my.canva.site/plantaosecreto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-heading font-bold tracking-wider transition-all uppercase text-sm shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  ACESSAR PLANTÃO COMPLETO
                </a>
                <button
                  onClick={() => {
                    setShowPurchaseOverlay(false);
                    setSpecialty(null);
                    setDifficulty(null);
                    setPhase('home');
                  }}
                  className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors font-heading text-xs uppercase tracking-widest"
                >
                  Tentar outra especialidade do demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Limit Reached Full-screen Overlay */}
      <AnimatePresence>
        {isLimitReached && phase === 'home' && (
          <motion.div
            id="daily-limit-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/40 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-full max-w-md bg-card border-2 border-primary/50 shadow-[0_0_50px_rgba(0,212,255,0.3)] rounded-3xl p-8 text-center relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-neon-purple to-primary" />
              
              <motion.div
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-7xl mb-6 inline-block"
              >
                👋
              </motion.div>
              
              <h2 className="font-heading text-3xl font-bold text-primary mb-4 tracking-tight uppercase">
                Plantão Finalizado!
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-foreground/90 font-medium text-lg leading-relaxed">
                  Você completou o seu <span className="text-primary font-bold">Plantão de 30 Casos</span> de hoje!
                </p>
                <div className="h-px w-24 bg-border/50 mx-auto" />
                <p className="text-muted-foreground text-sm italic">
                  A excelência clínica vem com a constância. Descanse um pouco e nos vemos amanhã para o próximo turno.
                </p>
              </div>

              <div className="grid gap-3">
                <button
                  onClick={signOut}
                  className="w-full py-4 btn-neon text-primary-foreground rounded-xl font-heading font-bold tracking-wider transition-all uppercase text-sm flex items-center justify-center gap-2"
                >
                  Bater Ponto de Saída
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
