import React, { useState } from 'react';
import type { ClinicalCase } from '@/data/mockCases';
import { CheckCircle2, XCircle, ArrowRight, Star, Syringe, Pill, HeartPulse, ChevronDown, ChevronUp, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface ExpandableSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  iconColor: string;
}

function ExpandableSection({ icon, title, content, iconColor }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background/30 rounded-lg p-0 border border-border/30 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 flex items-center justify-between text-left text-sm"
      >
        <div className="flex gap-3 items-center">
          <div className={cn("shrink-0", iconColor)}>{icon}</div>
          <span className="font-medium text-foreground">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-0 text-sm text-muted-foreground text-justify whitespace-pre-wrap">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Props {
  clinicalCase: ClinicalCase;
  correct: boolean;
  xpEarned: number;
  onNext: () => void;
}

const mistakeMessages = [
  "Sem problema, você pode errar aqui, na vida real não.",
  "Ainda bem que estamos simulando! Preste mais atenção na próxima.",
  "Erro anotado. No plantão real isso custaria caro.",
  "Calma, respira. Revise a conduta e tente não repetir o erro.",
  "Aqui o paciente é de mentira, mas o aprendizado é de verdade."
];

export default function FeedbackCard({ clinicalCase, correct, xpEarned, onNext }: Props) {
  const correctOption = clinicalCase.options.find(o => o.isCorrect);
  const randomMistakeMessage = mistakeMessages[Math.floor(Math.random() * mistakeMessages.length)];

  const getFinalDiscussion = () => {
    const rawContent = correctOption?.explanation || "";
    const sanitized = rawContent
        .replace(/^[\(\[]?Prof[ªa] Kátia:?[\)\]]?\s*/i, "")
        .trim();
    
    if (correct) {
        const messages = [
            "Muito bem, esse é o caminho! Vamos entender o caso:",
            "Excelente, conduta precisa! Vamos entender o caso:",
            "Boa escolha! Vamos entender o caso:",
            "Perfeito, é por aí mesmo! Vamos entender o caso:",
            "Parabéns, acerto em cheio! Vamos entender o caso:"
        ];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        return `${msg} ${sanitized.charAt(0).toLowerCase() + sanitized.slice(1)}`;
    } else {
        const messages = [
            "Poxa, você errou! Vamos entender o motivo:",
            "Ops, essa conduta não foi a melhor. Vamos entender o motivo:",
            "Atenção, essa não foi a melhor escolha. Vamos entender o motivo:",
            "Não foi desta vez. Vamos entender o motivo:",
            "Essa conduta precisa de revisão. Vamos entender o motivo:"
        ];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        return `${msg} ${sanitized.charAt(0).toLowerCase() + sanitized.slice(1)}`;
    }
  };
  const discussionContent = getFinalDiscussion();

  return (
    <div className="space-y-4 animate-scale-in">
      <div className={cn(
        "card-game text-center py-6",
        correct ? "border-green-500/50 bg-green-500/5" : "border-red-500/50 bg-red-500/5"
      )}>
        <div className="flex justify-center mb-3">
          {correct ? (
            <CheckCircle2 size={48} className="text-green-500" />
          ) : (
            <XCircle size={48} className="text-red-500" />
          )}
        </div>
        <h2 className={cn(
          "font-heading text-2xl font-bold mb-1",
          correct ? "text-green-400" : "text-red-400"
        )}>
          {correct ? "Conduta Correta!" : "Conduta Incorreta"}
        </h2>
        
        {correct && (
          <p className="text-neon-gold font-bold flex items-center justify-center gap-1 mt-2">
            <Star size={16} className="fill-neon-gold" /> +{xpEarned} XP
          </p>
        )}
      </div>

      <div className="card-game space-y-4">
        {!correct && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-red-400 font-medium italic text-center">
              "{randomMistakeMessage}" - Profª Kátia
            </p>
          </div>
        )}

        {/* Detalhes do Caso */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Informações do Caso
          </h4>

          <ExpandableSection 
            icon={<Brain size={16} />} 
            title="Discussão do caso" 
            content={discussionContent} 
            iconColor="text-primary"
          />

          {!correct && (
            <ExpandableSection
              icon={<CheckCircle2 size={16} />}
              title="Conduta Ideal"
              content={`${correctOption?.id}. ${correctOption?.text}`}
              iconColor="text-green-400"
            />
          )}
          
          {clinicalCase.nursingConduct && (
            <ExpandableSection 
              icon={<HeartPulse size={16} />} 
              title="Conduta de Enfermagem" 
              content={clinicalCase.nursingConduct} 
              iconColor="text-primary"
            />
          )}
          
          {clinicalCase.medicationDosage && (
            <ExpandableSection 
              icon={<Syringe size={16} />} 
              title="Posologia / Medicações" 
              content={clinicalCase.medicationDosage} 
              iconColor="text-neon-purple"
            />
          )}
          
          {clinicalCase.treatment && (
            <ExpandableSection 
              icon={<Pill size={16} />} 
              title="Tratamento" 
              content={clinicalCase.treatment} 
              iconColor="text-neon-gold"
            />
          )}
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full btn-neon text-primary-foreground py-4 rounded-xl font-heading text-lg tracking-wider flex items-center justify-center gap-2 mt-4"
      >
        PRÓXIMO CASO <ArrowRight size={20} />
      </button>

    </div>
  );
}
