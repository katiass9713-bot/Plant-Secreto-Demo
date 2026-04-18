import React, { useState } from 'react';
import { Search, AlertTriangle, Pill, Activity, ShieldAlert, BadgeInfo } from 'lucide-react';
import { medications, type Medication } from '@/data/medications';

export default function Bulario() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMed, setSelectedMed] = useState<Medication | null>(null);

  const filteredMeds = medications.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    med.drugClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.indications.some(ind => ind.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getRarityColor = (rarity: Medication['rarity']) => {
    switch (rarity) {
      case 'Baixo Risco': return 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400';
      case 'Moderado Risco': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500';
      case 'Alto Risco': return 'border-red-500/50 bg-red-500/10 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]';
    }
  };

  return (
    <div className="space-y-4 animate-fade-in relative">
      {!selectedMed ? (
        <>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Buscar por nome, indicação, classe..." 
              className="w-full bg-input/50 backdrop-blur-sm border border-border rounded-xl py-4 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/50 font-sans"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid gap-3">
            {filteredMeds.map(med => (
              <div 
                key={med.id} 
                className={`bg-card overflow-hidden border transition-colors rounded-xl p-4 cursor-pointer relative ${
                  med.rarity === 'Alto Risco' 
                    ? 'border-red-500/30 hover:border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.05)]' 
                    : med.rarity === 'Moderado Risco'
                    ? 'border-yellow-500/30 hover:border-yellow-500/70'
                    : 'border-border/50 hover:border-primary/50'
                }`}
                onClick={() => setSelectedMed(med)}
              >
                {/* Visual Flair for Alto Risco */}
                {med.rarity === 'Alto Risco' && (
                   <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-[0.03]">
                     <ShieldAlert className="w-full h-full text-red-500 transform translate-x-4 -translate-y-4" />
                   </div>
                )}

                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary">{med.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{med.drugClass}</p>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-1 flex items-center gap-1 rounded-sm border ${getRarityColor(med.rarity)}`}>
                    {med.rarity === 'Alto Risco' && <AlertTriangle size={10} />}
                    {med.rarity}
                  </span>
                </div>
              </div>
            ))}
            {filteredMeds.length === 0 && (
              <div className="text-center py-10 opacity-50 border border-dashed border-border rounded-xl">
                 <p className="font-heading text-muted-foreground">Farmácia Vazia. Nenhuma medicação detectada.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={`relative flex-1 bg-card border rounded-2xl shadow-xl overflow-hidden flex flex-col animate-scale-in mb-8 ${selectedMed.rarity === 'Alto Risco' ? 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)]' : 'border-border'}`}>
          <div className="p-5 border-b border-border/50 bg-black/20">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-2 leading-tight">{selectedMed.name}</h2>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm border ${getRarityColor(selectedMed.rarity)} flex items-center gap-1`}>
                {selectedMed.rarity}
              </span>
              <span className="text-xs text-muted-foreground">{selectedMed.drugClass}</span>
            </div>
          </div>

          <div className="p-5 space-y-6 flex-1">
            <section>
              <h4 className="flex items-center gap-2 font-heading text-sm text-muted-foreground uppercase tracking-wider mb-3 border-b border-border/50 pb-2">
                <BadgeInfo size={16} className="text-blue-400" /> Indicações Clínicas (Aprovadas)
              </h4>
              <ul className="list-disc pl-5 space-y-1.5">
                {selectedMed.indications.map((ind, i) => (
                  <li key={i} className="text-sm text-foreground/90">{ind}</li>
                ))}
              </ul>
            </section>

            <div className="relative">
              {/* Blurred Content Section */}
              <div className="space-y-6 blur-[8px] select-none pointer-events-none opacity-40">
                <section className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="flex items-center gap-2 font-heading text-sm text-primary uppercase tracking-wider mb-3 border-b border-primary/10 pb-2">
                    <Pill size={16} /> Posologia e Preparações
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p><strong>Posologia:</strong> {selectedMed.dosage}</p>
                    <p><strong>Preparo / Diluição:</strong> {selectedMed.preparation}</p>
                    <p><strong>Administração:</strong> {selectedMed.administration}</p>
                  </div>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 font-heading text-sm text-amber-500 uppercase tracking-wider mb-3 border-b border-border/50 pb-2">
                    <Activity size={16} /> Cuidados de Enfermagem
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    {selectedMed.nursingCautions.map((caution, i) => (
                      <li key={i} className="text-sm text-foreground/90">{caution}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 font-heading text-sm text-red-500 uppercase tracking-wider mb-3 border-b border-border/50 pb-2">
                    <ShieldAlert size={16} /> Antídoto ou Toxicidade
                  </h4>
                  <div className="bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                    <p className="text-sm text-foreground/90 leading-relaxed italic">
                      {selectedMed.antidoteOrToxicity}
                    </p>
                  </div>
                </section>
              </div>

              {/* Purchase Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-background/20 backdrop-blur-[2px] rounded-2xl z-20">
                <div className="bg-card/90 border border-primary/30 p-6 rounded-2xl shadow-2xl max-w-sm animate-scale-in">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                    <Pill className="text-primary animate-pulse" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight">
                    Domine a Farmacologia no Plantão! 🚀
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Você está a um passo de acessar posologias complexas, preparos detalhados e cuidados críticos que salvam vidas. Não fique na dúvida na hora H!
                  </p>
                  <a 
                    href="https://enfaka.my.canva.site/plantaosecreto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:scale-[1.02] transition-transform active:scale-[0.98]"
                  >
                    GARANTIR ACESSO COMPLETO
                  </a>
                  <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-medium opacity-60">
                    Sua segurança profissional em 1 clique
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50 relative">
                <button onClick={() => setSelectedMed(null)} className="w-full py-4 bg-muted hover:bg-muted/80 text-foreground rounded-xl font-heading tracking-wide transition-colors flex items-center justify-center gap-2">
                  VOLTAR PARA A LISTA
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
