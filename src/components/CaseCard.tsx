import { useState } from 'react';
import type { ClinicalCase } from '@/data/mockCases';
import { User, Activity, FileText, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  clinicalCase: ClinicalCase;
  onAnswer: (optionId: string, isCorrect: boolean) => void;
}

export default function CaseCard({ clinicalCase, onAnswer }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleConfirm = () => {
    if (!selectedOption) return;
    const option = clinicalCase.options.find(o => o.id === selectedOption);
    if (option) {
      onAnswer(option.id, option.isCorrect);
    }
  };

  return (
    <div className="space-y-4 animate-scale-in">
      {/* Patient Info */}
      <div className="card-game space-y-4">
        <div className="flex items-center gap-2 border-b border-border/50 pb-3">
          <User className="text-primary" size={20} />
          <div>
            <h3 className="font-heading font-semibold text-foreground leading-none">
              {clinicalCase.patient.name}, {clinicalCase.patient.age} anos
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {clinicalCase.patient.gender} • {clinicalCase.patient.occupation || 'Sem ocupação informada'}
            </p>
          </div>
        </div>

        {/* History */}
        <div>
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <FileText size={14} /> História Clínica
          </h4>
          <div className="bg-background/30 rounded-lg p-3 border border-border/30">
            <p className="text-sm text-foreground/90 leading-relaxed text-justify whitespace-pre-wrap">
              {clinicalCase.clinicalHistory}
            </p>
          </div>
        </div>

        {/* Physical Exam */}
        <div>
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Stethoscope size={14} /> Exame Físico
          </h4>
          <div className="bg-background/30 rounded-lg p-3 border border-border/30">
            <p className="text-sm text-foreground/90 leading-relaxed text-justify whitespace-pre-wrap">
              {clinicalCase.physicalExam}
            </p>
          </div>
        </div>

        {/* Vitals */}
        <div className="bg-background/50 rounded-lg p-3 border border-border/50">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Activity size={14} /> Sinais Vitais
          </h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div><span className="text-muted-foreground">PA:</span> <span className="font-mono">{clinicalCase.vitalSigns.bp}</span></div>
            <div><span className="text-muted-foreground">FC:</span> <span className="font-mono">{clinicalCase.vitalSigns.hr} bpm</span></div>
            <div><span className="text-muted-foreground">FR:</span> <span className="font-mono">{clinicalCase.vitalSigns.rr} irpm</span></div>
            <div><span className="text-muted-foreground">Temp:</span> <span className="font-mono">{clinicalCase.vitalSigns.temp}°C</span></div>
            <div><span className="text-muted-foreground">SpO2:</span> <span className="font-mono">{clinicalCase.vitalSigns.spo2}%</span></div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-2">
        <h3 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3 px-1">
          Qual a sua conduta, enfermeiro(a)?
        </h3>
        {clinicalCase.options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={cn(
              "w-full text-left p-4 rounded-xl border transition-all duration-200 text-sm",
              selectedOption === option.id
                ? "bg-primary/20 border-primary text-foreground shadow-[0_0_10px_rgba(0,212,255,0.15)]"
                : "bg-card border-border text-foreground/80 hover:border-primary/50"
            )}
          >
            <span className="font-bold text-primary mr-2">{option.id}.</span>
            {option.text}
          </button>
        ))}
      </div>

      {/* Action */}
      <button
        onClick={handleConfirm}
        disabled={!selectedOption}
        className="w-full btn-neon text-primary-foreground py-4 rounded-xl font-heading text-lg tracking-wider disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        CONFIRMAR CONDUTA
      </button>
    </div>
  );
}
