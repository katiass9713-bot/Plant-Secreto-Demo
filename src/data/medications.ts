export type Rarity = 'Baixo Risco' | 'Moderado Risco' | 'Alto Risco';

export interface Medication {
  id: string;
  name: string;
  drugClass: string;
  indications: string[];
  dosage: string;
  preparation: string;
  administration: string;
  nursingCautions: string[];
  antidoteOrToxicity: string;
  rarity: Rarity;
}

export const medications: Medication[] = [
  {
    id: "med-acido-folico",
    name: "Ácido Fólico",
    drugClass: "Vitamina (B9)",
    indications: [
      "Prevenção de defeitos do tubo neural",
      "Gestação",
      "Anemia megaloblástica"
    ],
    dosage: "0,4–5 mg VO/dia dependendo da indicação",
    preparation: "Comprimidos",
    administration: "Via oral, preferencialmente antes das refeições",
    nursingCautions: [
      "Iniciar antes da concepção quando possível",
      "Monitorar níveis hematológicos",
      "Importante na APS pré-natal",
      "Baixo risco de efeitos adversos"
    ],
    antidoteOrToxicity: "Baixa toxicidade",
    rarity: "Baixo Risco"
  },
  {
id: "med-adrenalina-geral",
name: "Adrenalina",
drugClass: "Agonista adrenérgico (α e β)",
indications: [
"Parada cardiorrespiratória (FV/TV/assistolia/AESP)",
"Anafilaxia grave",
"Choque refratário"
],
dosage: "PCR: 1 mg IV a cada 3-5 min; Anafilaxia: 0,3-0,5 mg IM (1:1000) no vasto lateral; Infusão: 0,05–0,5 mcg/kg/min",
preparation: "PCR: ampola 1 mg/mL diluir em 9 mL SF (1:10.000); Infusão: 1 mg em 250 mL SG 5%",
administration: "IV em bolus rápido na PCR seguido de flush; IM profunda na anafilaxia; infusão contínua em bomba para choque",
nursingCautions: [
"Monitorização contínua de ECG, PA e perfusão periférica",
"Risco elevado de arritmias ventriculares e isquemia miocárdica",
"Extravasamento pode causar necrose tecidual grave",
"Avaliar resposta clínica (retorno da circulação, melhora da PA)"
],
antidoteOrToxicity: "Fentolamina 5–10 mg diluída em 10 mL SF infiltrada localmente no extravasamento; suporte hemodinâmico em toxicidade",
rarity: "Alto Risco"
},
  {
    id: "med-age",
    name: "AGE (Ácidos Graxos Essenciais)",
    drugClass: "Regenerador cutâneo",
    indications: [
      "Prevenção de lesão por pressão",
      "Hidratação da pele"
    ],
    dosage: "Aplicação diária",
    preparation: "Óleo tópico",
    administration: "Uso tópico",
    nursingCautions: [
      "Não aplicar em feridas abertas profundas",
      "Uso preventivo"
    ],
    antidoteOrToxicity: "Não aplicável",
    rarity: "Baixo Risco"
  },
  {
    id: "med-alginato-calcio",
    name: "Alginato de Cálcio",
    drugClass: "Cobertura absorvente",
    indications: [
      "Feridas exsudativas",
      "Úlceras"
    ],
    dosage: "Aplicação conforme exsudato",
    preparation: "Placas ou fitas",
    administration: "Uso tópico",
    nursingCautions: [
      "Alta absorção",
      "Necessita cobertura secundária"
    ],
    antidoteOrToxicity: "Não aplicável",
    rarity: "Baixo Risco"
  },
  {
    id: "med-alprazolam-geral",
    name: "Alprazolam",
    drugClass: "Benzodiazepínico",
    indications: [
      "Transtorno de ansiedade",
      "Ataques de pânico"
    ],
    dosage: "Adultos: 0,25 a 0,5 mg via oral, três vezes ao dia.",
    preparation: "Comprimidos de 0,25mg, 0,5mg ou conforme prescrição.",
    administration: "Via oral; dose aumentada gradualmente conforme tolerado.",
    nursingCautions: [
      "Alto potencial para causar sedação, sonolência e dependência.",
      "Pode interagir com antidepressivos e antipsicóticos, aumentando a depressão respiratória.",
      "Evitar uso prolongado sem supervisão rigorosa."
    ],
    antidoteOrToxicity: "Antídoto: Flumazenil; suporte ventilatório em superdosagem.",
    rarity: "Alto Risco"
  },
  {
id: "med-amiodarona-geral",
name: "Amiodarona",
drugClass: "Antiarrítmico classe III",
indications: [
"Fibrilação ventricular",
"Taquicardia ventricular sem pulso",
"Arritmias supraventriculares e ventriculares estáveis"
],
dosage: "PCR: 300 mg IV bolus, repetir 150 mg; Infusão: 150 mg em 10 min → 1 mg/min por 6h → 0,5 mg/min",
preparation: "Diluir em SG 5% (não usar SF para infusão prolongada)",
administration: "Bolus em acesso periférico (rápido) ou infusão contínua em bomba",
nursingCautions: [
"Monitorar ECG contínuo (QT prolongado)",
"Risco de hipotensão em infusão rápida",
"Observar sinais de flebite",
"Uso prolongado: monitorar função hepática e tireoidiana"
],
antidoteOrToxicity: "Não há antídoto específico; tratar arritmias e suporte clínico",
rarity: "Alto Risco"
},
  {
    id: "med-mental-06",
    name: "Amitriptilina",
    drugClass: "Antidepressivo tricíclico",
    indications: [
      "Depressão",
      "Dor neuropática",
      "Fibromialgia",
      "Enxaqueca (profilaxia)",
      "Insônia associada à depressão"
    ],
    dosage: "Início: 25 mg VO à noite, podendo aumentar gradualmente até 75–150 mg/dia.",
    preparation: "Comprimidos de 25 mg e 75 mg.",
    administration: "Via oral, preferencialmente à noite (efeito sedativo).",
    nursingCautions: [
      "Monitorar sedação e sonolência excessiva",
      "Observar efeitos anticolinérgicos (boca seca, constipação, retenção urinária)",
      "Risco de arritmias (monitorar ECG em doses elevadas)",
      "Cuidado em idosos (delirium, quedas)",
      "Alto risco em overdose (cardiotoxicidade)"
    ],
    antidoteOrToxicity: "Intoxicação grave: arritmias, convulsões, coma. Tratamento: suporte intensivo e bicarbonato de sódio IV.",
    rarity: "Alto Risco"
  },
  {
    id: "med-amoxicilina",
    name: "Amoxicilina",
    drugClass: "Antibiótico penicilínico",
    indications: [
      "Infecções de vias aéreas superiores",
      "Otite média",
      "Sinusite",
      "Infecção urinária não complicada"
    ],
    dosage: "500 mg VO 8/8h ou 875 mg 12/12h por 7–10 dias",
    preparation: "Comprimidos ou suspensão oral",
    administration: "Via oral, com ou sem alimentos",
    nursingCautions: [
      "Verificar histórico de alergia à penicilina",
      "Orientar completar o tratamento",
      "Observar efeitos gastrointestinais",
      "Monitorar sinais de melhora clínica",
      "Evitar uso inadequado (resistência bacteriana)"
    ],
    antidoteOrToxicity: "Antídoto: suporte em caso de alergia grave (adrenalina); reações: rash, anafilaxia",
    rarity: "Baixo Risco"
  },
  {
    id: "med-neo-03",
    name: "Ampicilina",
    drugClass: "Antibiótico betalactâmico (penicilina)",
    indications: [
      "Sepse neonatal precoce",
      "Infecções bacterianas (Streptococcus grupo B, Listeria)",
      "Pneumonia neonatal",
      "Meningite (em associação)"
    ],
    dosage: "RN: 50 mg/kg/dose IV a cada 8–12h (varia conforme idade gestacional e dias de vida).",
    preparation: "Frasco-ampola (ex: 500 mg). Reconstituir com diluente e diluir em SF 0,9%.",
    administration: "IV lento ou infusão.",
    nursingCautions: [
      "Monitorar sinais de infecção (temperatura, perfusão, letargia)",
      "Observar reações alérgicas",
      "Ajustar intervalo conforme idade gestacional",
      "Avaliar função renal",
      "Garantir diluição correta para evitar flebite"
    ],
    antidoteOrToxicity: "Intoxicação: convulsões (raro, doses elevadas). Tratamento de suporte.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-atenolol",
    name: "Atenolol",
    drugClass: "Betabloqueador seletivo (β1)",
    indications: [
      "Hipertensão arterial",
      "Angina estável",
      "Controle de frequência em arritmias",
      "Pós-infarto do miocárdio"
    ],
    dosage: "25–50 mg VO 1x/dia; podendo aumentar até 100 mg/dia",
    preparation: "Comprimidos 25 mg, 50 mg e 100 mg",
    administration: "Via oral, com ou sem alimentos",
    nursingCautions: [
      "Monitorar frequência cardíaca (risco de bradicardia)",
      "Avaliar pressão arterial regularmente",
      "Não suspender abruptamente (risco de efeito rebote)",
      "Cautela em asmáticos (pode broncoespasmo)",
      "Monitorar sinais de fadiga e tontura"
    ],
    antidoteOrToxicity: "Antídoto: Glucagon em intoxicação; toxicidade: bradicardia, hipotensão, bloqueio AV",
    rarity: "Baixo Risco"
  },
  {
    id: "med-atorvastatina-prev",
    name: "Atorvastatina",
    drugClass: "Estatina / Antilipêmico",
    indications: [
      "Redução de níveis de colesterol LDL e triglicerídeos",
      "Prevenção de doenças cardiovasculares em pacientes de alto risco"
    ],
    dosage: "Adultos: 10 mg a 80 mg via oral, uma vez ao dia.",
    preparation: "Comprimidos orais.",
    administration: "Via oral, geralmente administrada à noite para melhor eficácia.",
    nursingCautions: [
      "Monitorar sintomas de dor muscular ou fraqueza (risco de miopatia).",
      "Avaliar níveis de enzimas hepáticas periodicamente.",
      "Interação com antibióticos macrolídeos pode elevar o risco de efeitos musculares graves."
    ],
    antidoteOrToxicity: "Suporte clínico; suspensão imediata se houver sinais de rabdomiólise.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-azitromicina-aps",
    name: "Azitromicina",
    drugClass: "Macrolídeo",
    indications: [
      "Infecções respiratórias",
      "ISTs (clamídia)",
      "Infecções de pele"
    ],
    dosage: "500 mg/dia por 3–5 dias ou dose única 1g",
    preparation: "Comprimidos ou suspensão",
    administration: "Via oral",
    nursingCautions: [
      "Monitorar efeitos GI",
      "Cautela em cardiopatas (QT longo)",
      "Boa adesão devido posologia curta"
    ],
    antidoteOrToxicity: "Sem antídoto específico",
    rarity: "Baixo Risco"
  },
  {
    id: "med-bacitracina",
    name: "Bacitracina",
    drugClass: "Antibiótico tópico",
    indications: [
      "Infecções cutâneas leves",
      "Feridas superficiais"
    ],
    dosage: "Aplicar 2–3x/dia",
    preparation: "Pomada",
    administration: "Uso tópico",
    nursingCautions: [
      "Uso restrito a pequenas áreas",
      "Evitar uso prolongado"
    ],
    antidoteOrToxicity: "Baixa toxicidade",
    rarity: "Baixo Risco"
  },
  {
    id: "med-betametasona-obs",
    name: "Betametasona",
    drugClass: "Corticosteroide",
    indications: [
      "Maturação pulmonar fetal",
      "Risco de parto prematuro (24–34 semanas)",
      "Redução da síndrome do desconforto respiratório neonatal"
    ],
    dosage: "12 mg IM, repetir após 24 horas (total 2 doses)",
    preparation: "Ampola pronta para uso (geralmente 4 mg/mL ou 6 mg/mL)",
    administration: "Via intramuscular profunda",
    nursingCautions: [
      "Administrar no intervalo correto (24h entre doses)",
      "Monitorar glicemia materna (especialmente em diabéticas)",
      "Avaliar sinais de infecção",
      "Orientar paciente sobre finalidade fetal do medicamento",
      "Registrar idade gestacional corretamente"
    ],
    antidoteOrToxicity: "Sem antídoto específico; efeitos: hiperglicemia, imunossupressão transitória",
    rarity: "Baixo Risco"
  },
  {
    id: "med-bromazepam-ans",
    name: "Bromazepam",
    drugClass: "Benzodiazepínico / Tranquilizante",
    indications: [
      "Tratamento da ansiedade e distúrbios relacionados",
      "Promoção de relaxamento muscular e sedação"
    ],
    dosage: "Adultos: 1,5 mg a 6 mg por dia, divididos em duas ou três doses.",
    preparation: "Comprimidos orais.",
    administration: "Via oral.",
    nursingCautions: [
      "Causa sonolência, tonturas e problemas de coordenação motora.",
      "Risco de dependência física e psicológica em uso prolongado.",
      "Interage com álcool e outros depressores do sistema nervoso central."
    ],
    antidoteOrToxicity: "Antídoto: Flumazenil.",
    rarity: "Alto Risco"
  },
  {
    id: "med-budesonida",
    name: "Budesonida",
    drugClass: "Corticosteroide inalatório",
    indications: [
      "Asma persistente",
      "DPOC (associado)",
      "Crise asmática (uso complementar)",
      "Laringite/bronquiolite em pediatria"
    ],
    dosage: "0,5–1 mg por nebulização 1–2x/dia (pode ajustar conforme gravidade)",
    preparation: "Suspensão para nebulização (0,25 mg/mL ou 0,5 mg/2 mL)",
    administration: "Via inalatória por nebulização; não necessita diluição obrigatória, mas pode ser associada ao SF 0,9%",
    nursingCautions: [
      "Não é broncodilatador de alívio imediato (efeito anti-inflamatório)",
      "Orientar higiene oral após uso (prevenir candidíase)",
      "Monitorar melhora progressiva da dispneia",
      "Uso contínuo em APS para controle da asma",
      "Avaliar adesão ao tratamento"
    ],
    antidoteOrToxicity: "Baixa toxicidade sistêmica; uso prolongado pode causar supressão adrenal leve",
    rarity: "Baixo Risco"
  },
  {
    id: "med-bupivacaina-anes",
    name: "Bupivacaína",
    drugClass: "Anestésico local",
    indications: [
      "Anestesia em procedimentos cirúrgicos",
      "Analgesia durante o trabalho de parto"
    ],
    dosage: "Dose variável conforme o procedimento e concentração (0,25% a 0,5%).",
    preparation: "Solução injetável (isobárica, hiperbárica ou pura).",
    administration: "Vias subcutânea, intramuscular, intravenosa ou peridural.",
    nursingCautions: [
      "Risco elevado de convulsões e parada cardíaca se houver injeção intravascular inadvertida.",
      "Monitorar sinais vitais e nível de consciência continuamente.",
      "Uso cauteloso em pacientes com problemas hepáticos ou cardíacos."
    ],
    antidoteOrToxicity: "Suporte hemodinâmico imediate; emulsão lipídica (protocolo de resgate).",
    rarity: "Alto Risco"
  },
  {
    id: "med-ps-18",
    name: "Butilbrometo de Escopolamina (Buscopan)",
    drugClass: "Antiespasmódico anticolinérgico",
    indications: [
      "Cólica abdominal (intestinal, biliar, renal)",
      "Espasmos do trato gastrointestinal",
      "Dor associada a distensão visceral",
      "Síndrome do intestino irritável"
    ],
    dosage: "Adulto: 20 mg IV/IM lento, podendo repetir a cada 6–8 horas. VO: 10–20 mg 3–5x/dia.",
    preparation: "Ampola 20 mg/mL. Pode ser administrado puro IV lento ou IM.",
    administration: "IV lento (evitar administração rápida), IM ou VO.",
    nursingCautions: [
      "Monitorar alívio da dor e redução de espasmos",
      "Observar efeitos anticolinérgicos (boca seca, taquicardia, retenção urinária)",
      "Cuidado em pacientes com glaucoma ou hiperplasia prostática",
      "Evitar uso em íleo paralítico",
      "Avaliar distensão abdominal antes e após administração"
    ],
    antidoteOrToxicity: "Intoxicação: efeitos anticolinérgicos intensos (taquicardia, delírio). Tratamento de suporte.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-neo-02",
    name: "Cafeína Citrato",
    drugClass: "Estimulante do SNC (metilxantina)",
    indications: [
      "Apneia da prematuridade",
      "Estimulação respiratória em RN prematuros",
      "Facilitar desmame de ventilação mecânica"
    ],
    dosage: "Dose de ataque: 20 mg/kg IV/VO. Manutenção: 5–10 mg/kg/dia.",
    preparation: "Solução pronta (20 mg/mL). Pode ser diluída em SF 0,9% se necessário.",
    administration: "IV lento ou VO.",
    nursingCautions: [
      "Monitorar frequência cardíaca (risco de taquicardia)",
      "Observar irritabilidade e agitação",
      "Avaliar padrão respiratório e redução de apneias",
      "Monitorar níveis séricos em uso prolongado",
      "Ajustar dose conforme peso e idade gestacional"
    ],
    antidoteOrToxicity: "Intoxicação: taquicardia, irritabilidade, vômitos. Tratamento de suporte.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-captopril-geral",
    name: "Captopril",
    drugClass: "Inibidor da ECA (IECA)",
    indications: [
      "Hipertensão arterial sistêmica",
      "Crise hipertensiva (uso em pronto atendimento)",
      "Insuficiência cardíaca"
    ],
    dosage: "25 mg VO ou sublingual, podendo repetir conforme resposta clínica",
    preparation: "Comprimidos de 12,5 mg, 25 mg e 50 mg",
    administration: "Via oral ou sublingual (efeito mais rápido)",
    nursingCautions: [
      "Monitorar pressão arterial antes e após administração (queda pode ser abrupta)",
      "Avaliar risco de hipotensão, principalmente em idosos",
      "Monitorar função renal e potássio em uso contínuo",
      "Pode causar tosse seca persistente",
      "Manter paciente em repouso após administração em crise hipertensiva"
    ],
    antidoteOrToxicity: "Sem antídoto específico; em hipotensão → reposição volêmica e suporte",
    rarity: "Baixo Risco"
  },
  {
    id: "med-carbamazepina-anticon",
    name: "Carbamazepina",
    drugClass: "Anticonvulsivante / Estabilizador de humor",
    indications: [
      "Epilepsia",
      "Neuralgia do trigêmeo",
      "Transtorno bipolar"
    ],
    dosage: "Adultos: Inicial de 200 mg a 400 mg por dia, dividida em várias doses.",
    preparation: "Comprimidos ou suspensão oral.",
    administration: "Via oral.",
    nursingCautions: [
      "Interação com Diltiazem e Verapamil pode aumentar as concentrações plasmáticas da droga.",
      "Monitorar efeitos colaterais como sonolência, visão dupla e ataxia.",
      "Pode diminuir a eficácia de anticoagulantes orais."
    ],
    antidoteOrToxicity: "Monitoramento de níveis séricos e suporte sintomático em toxicidade.",
    rarity: "Alto Risco"
  },
  {
    id: "med-carbonato-calcio",
    name: "Carbonato de Cálcio",
    drugClass: "Suplemento mineral",
    indications: [
      "Prevenção de osteoporose",
      "Gestação",
      "Hipocalcemia"
    ],
    dosage: "500–1500 mg/dia de cálcio elementar",
    preparation: "Comprimidos mastigáveis ou revestidos",
    administration: "Via oral, preferencialmente com refeições",
    nursingCautions: [
      "Evitar associação com ferro no mesmo horário",
      "Monitorar constipação",
      "Orientar ingestão hídrica adequada"
    ],
    antidoteOrToxicity: "Hipercalcemia em excesso",
    rarity: "Baixo Risco"
  },
  {
    id: "med-mental-05",
    name: "Carbonato de Lítio",
    drugClass: "Estabilizador de humor",
    indications: [
      "Transtorno bipolar (fase maníaca e manutenção)",
      "Prevenção de recaídas",
      "Adjuvante em depressão resistente"
    ],
    dosage: "Inicial: 300 mg VO 2–3x/dia. Ajustar conforme níveis séricos (0,6–1,2 mEq/L).",
    preparation: "Comprimidos de 300 mg.",
    administration: "Via oral, com alimentos para reduzir irritação gástrica.",
    nursingCautions: [
      "Monitorar níveis séricos regularmente (janela terapêutica estreita)",
      "Observar sinais de intoxicação (tremor, náusea, confusão)",
      "Avaliar função renal e tireoidiana",
      "Manter hidratação adequada",
      "Evitar uso com diuréticos e AINEs sem controle"
    ],
    antidoteOrToxicity: "Intoxicação: tremor, ataxia, confusão, convulsões. Tratamento: hidratação e, em casos graves, hemodiálise.",
    rarity: "Alto Risco"
  },
  {
    id: "med-cefalexina-aps",
    name: "Cefalexina",
    drugClass: "Cefalosporina de 1ª geração",
    indications: [
      "Infecções urinárias",
      "Infecções de pele",
      "Infecções respiratórias leves"
    ],
    dosage: "500 mg VO a cada 6–12h",
    preparation: "Cápsulas ou suspensão",
    administration: "Via oral",
    nursingCautions: [
      "Avaliar alergia a penicilina",
      "Monitorar resposta",
      "Completar tratamento"
    ],
    antidoteOrToxicity: "Sem antídoto específico",
    rarity: "Baixo Risco"
  },
  {
    id: "med-cefepime-antib",
    name: "Cefepime (Cefeprime)",
    drugClass: "Antibiótico (Cefalosporina de 4ª geração)",
    indications: [
      "Pneumonia e infecções intra-abdominais",
      "Infecções do trato urinário e de pele",
      "Sepse e infecções graves"
    ],
    dosage: "Adultos: 1 g a 2 g via intravenosa ou intramuscular a cada 8 a 12 horas.",
    preparation: "Reconstituir 1g com 10mL AD (volume final 11,11mL). Diluir em 100mL SF ou SG.",
    administration: "Intravenosa (infusão de 30 min) ou Intramuscular profunda.",
    nursingCautions: [
      "Estabilidade de 24 horas em temperatura ambiente e 7 dias sob refrigeração.",
      "Monitorar rigorosamente a função renal em pacientes idosos.",
      "Observar risco de diarreia por Clostridioides difficile."
    ],
    antidoteOrToxicity: "Suporte em reações anafiláticas; ajuste de dose por depuração de creatinina.",
    rarity: "Moderado Risco"
  },
  {
    id: "med-ceftriaxona-obs",
    name: "Ceftriaxona",
    drugClass: "Antibiótico cefalosporina de 3ª geração",
    indications: [
      "Infecções urinárias na gestação",
      "Sepse obstétrica",
      "Corioamnionite",
      "Profilaxia cirúrgica (cesariana)"
    ],
    dosage: "1–2 g IV/IM 1x/dia; até 2 g 12/12h em infecções graves",
    preparation: "Frasco-ampola 1 g; reconstituir com água para injeção e diluir em SF 0,9%",
    administration: "IV lento (30 minutos) ou IM profunda",
    nursingCautions: [
      "Verificar alergia a beta-lactâmicos",
      "Monitorar sinais de reação alérgica",
      "Avaliar função renal e hepática",
      "Observar resposta clínica (febre, leucócitos)",
      "Evitar mistura com soluções contendo cálcio"
    ],
    antidoteOrToxicity: "Sem antídoto específico; reações: alergias, diarreia, colite associada a antibióticos",
    rarity: "Baixo Risco"
  },
  {
    id: "med-cetoprofeno",
    name: "Cetoprofeno",
    drugClass: "AINE (anti-inflamatório não esteroidal)",
    indications: [
      "Dor aguda (musculoesquelética, cólica)",
      "Processos inflamatórios",
      "Dor pós-trauma"
    ],
    dosage: "100 mg IV/IM a cada 12h (máx. 300 mg/dia)",
    preparation: "Ampola 100 mg/2 mL; para IV, diluir em 100 mL de SF 0,9%",
    administration: "IV em infusão lenta (20–30 min) ou IM profunda",
    nursingCautions: [
      "Monitorar dor (escala EVA) antes e após administração",
      "Risco de sangramento gastrointestinal",
      "Cautela em idosos e pacientes com insuficiência renal",
      "Evitar associação com outros AINEs",
      "Administrar preferencialmente após alimentação (via VO)"
    ],
    antidoteOrToxicity: "Não há antídoto específico; suporte clínico em intoxicação",
    rarity: "Baixo Risco"
  },
  {
    id: "med-ps-19",
    name: "Cimetidina",
    drugClass: "Antagonista dos receptores H2 (antiulceroso)",
    indications: [
      "Úlcera gástrica e duodenal",
      "Refluxo gastroesofágico (DRGE)",
      "Profilaxia de úlcera de estresse",
      "Gastrite"
    ],
    dosage: "Adulto: 200–400 mg IV a cada 6–8 horas ou 400 mg VO 2x/dia.",
    preparation: "Ampola 300 mg/2 mL. Diluir em 100 mL de SF 0,9% para infusão.",
    administration: "IV lento (mínimo 5 minutos) ou infusão. VO conforme prescrição.",
    nursingCautions: [
      "Monitorar sintomas gástricos (dor epigástrica, pirose)",
      "Observar possíveis interações medicamentosas (inibe CYP450)",
      "Avaliar função hepática e renal",
      "Pode causar confusão mental em idosos",
      "Monitorar sinais de sangramento digestivo"
    ],
    antidoteOrToxicity: "Intoxicação: confusão, arritmias raras. Tratamento de suporte.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-clindamicina-aps",
    name: "Clindamicina",
    drugClass: "Antibiótico lincosamida",
    indications: [
      "Infecções de pele",
      "Infecções anaeróbias",
      "Infecções odontológicas"
    ],
    dosage: "300–600 mg VO/IV a cada 6–8h",
    preparation: "Cápsulas ou solução injetável",
    administration: "Via oral ou IV",
    nursingCautions: [
      "Risco de colite pseudomembranosa",
      "Monitorar diarreia",
      "Avaliar resposta clínica"
    ],
    antidoteOrToxicity: "Sem antídoto específico",
    rarity: "Moderado Risco"
  },
  {
    id: "med-mental-09",
    name: "Clonazepam",
    drugClass: "Benzodiazepínico de longa duração",
    indications: [
      "Transtorno de ansiedade",
      "Transtorno do pânico",
      "Epilepsia",
      "Agitação",
      "Insônia associada à ansiedade"
    ],
    dosage: "Ansiedade: 0,25–0,5 mg VO 2x/dia, podendo ajustar até 2 mg/dia ou mais conforme necessidade clínica.",
    preparation: "Comprimidos de 0,5 mg e 2 mg, solução oral (gotas).",
    administration: "Via oral, podendo ser fracionado ao longo do dia.",
    nursingCautions: [
      "Monitorar sedação e risco de quedas",
      "Avaliar dependência e uso prolongado",
      "Observar depressão respiratória em doses elevadas",
      "Cuidado em idosos",
      "Evitar associação com álcool e opioides"
    ],
    antidoteOrToxicity: "Antídoto: Flumazenil (uso cauteloso). Intoxicação: sedação profunda e depressão respiratória.",
    rarity: "Alto Risco"
  },
  {
    id: "med-clopidogrel-antiplag",
    name: "Clopidogrel",
    drugClass: "Antiagregante plaquetário",
    indications: [
      "Prevenção de eventos trombóticos (infarto, AVC)",
      "Síndrome Coronariana Aguda (SCA)"
    ],
    dosage: "Manutenção: 75 mg via oral, uma vez ao dia. Carga: 300 a 600 mg.",
    preparation: "Comprimidos de 75 mg.",
    administration: "Via oral.",
    nursingCautions: [
      "O Omeprazol pode reduzir significativamente a ação antiplaquetária da droga.",
      "Monitorar sinais de sangramento oculto ou visível.",
      "Pode causar desconforto abdominal e cefaleia."
    ],
    antidoteOrToxicity: "Transfusão de plaquetas em cases de hemorragia grave por toxicidade.",
    rarity: "Alto Risco"
  },
  {
    id: "med-ps-20",
    name: "Dexametasona",
    drugClass: "Corticosteroide potente de longa duração",
    indications: [
      "Reações alérgicas graves",
      "Edema cerebral",
      "Crise asmática",
      "Doenças inflamatórias e autoimunes",
      "Náuseas e vômitos (adjuvante)"
    ],
    dosage: "Adulto: 4–10 mg IV/IM, podendo repetir conforme quadro clínico. Edema cerebral: doses maiores conforme protocolo.",
    preparation: "Ampola 4 mg/mL. Pode ser administrada sem diluição IV lento ou diluída em SF.",
    administration: "IV lento, IM ou VO.",
    nursingCautions: [
      "Monitorar glicemia (risco de hiperglicemia)",
      "Observar sinais de infecção (imunossupressão)",
      "Avaliar pressão arterial",
      "Uso prolongado pode causar supressão adrenal",
      "Monitorar retenção hídrica e edema"
    ],
    antidoteOrToxicity: "Uso prolongado: síndrome de Cushing, imunossupressão. Suspensão deve ser gradual.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-diclofenaco",
    name: "Diclofenaco Sódico",
    drugClass: "AINE (anti-inflamatório não esteroidal)",
    indications: [
      "Dor musculoesquelética",
      "Processos inflamatórios agudos",
      "Cólica renal ou biliar",
      "Dor pós-trauma"
    ],
    dosage: "75 mg IM profunda 1–2x/dia (máx. 150 mg/dia)",
    preparation: "Ampola 75 mg/3 mL",
    administration: "IM profunda (preferencialmente glúteo); evitar via IV em rotina",
    nursingCautions: [
      "Aplicação profunda para evitar necrose tecidual",
      "Monitorar dor e resposta clínica",
      "Risco de sangramento gastrointestinal",
      "Cautela em pacientes com doença renal ou gastrite",
      "Evitar uso concomitante com outros AINEs"
    ],
    antidoteOrToxicity: "Sem antídoto específico; em intoxicação → suporte clínico e proteção gástrica",
    rarity: "Baixo Risco"
  },
  {
    id: "med-digoxina-ic",
    name: "Digoxina",
    drugClass: "Glicosídeo cardíaco / Inotrópico",
    indications: [
      "Insuficiência cardíaca congestiva",
      "Controle de arritmias (fibrilação atrial)"
    ],
    dosage: "Adultos: 0,125 mg a 0,25 mg via oral uma vez ao dia.",
    preparation: "Comprimidos ou solução injetável.",
    administration: "Via oral (absorção em 2-3h) ou Intravenosa lenta.",
    nursingCautions: [
      "Amiodarona pode elevar a concentração sérica em até 100%, exigindo redução da dose.",
      "Monitorar sinais de intoxicação (náuseas, vômitos, visão amarelada e bradicardia).",
      "A hipocalemia aumenta o risco de toxicidade digitálica."
    ],
    antidoteOrToxicity: "Anticorpos específicos contra digoxina (DigiFab) em toxicidade grave.",
    rarity: "Alto Risco"
  },
  {
    id: "med-dipirona-obs",
    name: "Dipirona",
    drugClass: "Analgésico e antipirético",
    indications: [
      "Dor leve a moderada",
      "Febre",
      "Cefaleia",
      "Dor musculoesquelética"
    ],
    dosage: "500–1000 mg VO 6/6h se necessário; máximo 4 g/dia",
    preparation: "Comprimidos, gotas ou solução injetável",
    administration: "Via oral ou IV/IM em casos específicos",
    nursingCautions: [
      "Monitorar resposta à dor e febre",
      "Observar reações alérgicas",
      "Cautela em pacientes com histórico de agranulocitose",
      "Orientar uso conforme necessidade",
      "Evitar uso prolongado sem avaliação"
    ],
    antidoteOrToxicity: "Sem antídoto específico; raramente pode causar agranulocitose e choque anafilático",
    rarity: "Baixo Risco"
  },
  {
    id: "med-dipirona-geral-aps",
    name: "Dipirona (Metamizol)",
    drugClass: "Analgésico e antitérmico",
    indications: [
      "Dor aguda (leve a moderada)",
      "Febre alta",
      "Dor pós-operatória ou infecciosa"
    ],
    dosage: "1 g IV a cada 6–8h (máx. 4 g/dia)",
    preparation: "Ampola 1 g/2 mL; pode ser diluída em 100 mL de SF 0,9%",
    administration: "IV lenta (mínimo 5 minutos) ou em infusão; também pode ser IM",
    nursingCautions: [
      "Administrar lentamente para evitar hipotensão",
      "Monitorar PA durante infusão",
      "Observar sinais de reação alérgica",
      "Raro risco de agranulocitose (uso prolongado)",
      "Avaliar eficácia analgésica após administração"
    ],
    antidoteOrToxicity: "Sem antídoto específico; tratar suporte hemodinâmico",
    rarity: "Baixo Risco"
  },
  {
    id: "med-contr-05",
    name: "DIU de Cobre",
    drugClass: "Contraceptivo não hormonal intrauterino",
    indications: [
      "Contracepção de longa duração (até 10 anos)",
      "Método não hormonal",
      "Contracepção de emergência (até 5 dias pós relação)"
    ],
    dosage: "Dispositivo único inserido no útero, com ação contínua.",
    preparation: "Dispositivo em formato de T com cobre.",
    administration: "Inserção intrauterina por profissional capacitado.",
    nursingCautions: [
      "Avaliar contraindicações (infecção pélvica ativa, gravidez)",
      "Monitorar aumento do fluxo menstrual e cólicas",
      "Orientar sobre verificação dos fios do DIU",
      "Observar sinais de expulsão ou perfuração (raros)",
      "Avaliar risco de IST (não protege contra infecções)"
    ],
    antidoteOrToxicity: "Complicações: sangramento aumentado, dor pélvica. Conduta: avaliação e possível retirada.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-dopamina-upa",
    name: "Dopamina (Cloridrato)",
    drugClass: "Agonista adrenérgico e dopaminérgico",
    indications: [
      "Choque circulatório (séptico, cardiogênico)",
      "Hipotensão grave ou insuficiência renal funcional"
    ],
    dosage: "Dose inicial usual: 2 a 5 mcg/kg/min, ajustada conforme resposta hemodinâmica.",
    preparation: "Diluir 200 mg (1 ampola) em 250 mL de SG 5% ou SF.",
    administration: "Exclusivamente via intravenosa através de bomba de infusão contínua.",
    nursingCautions: [
      "Não administrar puro; risco de arritmias cardíacas e taquicardia.",
      "Extravasamento causa necrose tecidual grave (usar veia de grosso calibre).",
      "Monitorar rigorosamente a pressão arterial e a diurese."
    ],
    antidoteOrToxicity: "Fentolamina infiltrada localmente em caso de extravasamento.",
    rarity: "Alto Risco"
  },
  {
    id: "med-ergometrina-obs",
    name: "Ergometrina",
    drugClass: "Uterotônico (alcaloide do ergot)",
    indications: [
      "Prevenção de hemorragia pós-parto",
      "Tratamento de atonia uterina",
      "Controle de sangramento uterino pós-parto"
    ],
    dosage: "0,2 mg IM após dequitação; pode repetir a cada 2–4h conforme necessidade",
    preparation: "Ampola 0,2 mg/mL",
    administration: "Via IM (preferencial) ou IV lento sob monitoramento",
    nursingCautions: [
      "Contraindicada em hipertensão e pré-eclâmpsia",
      "Monitorar pressão arterial (risco de crise hipertensiva)",
      "Avaliar contração uterina e sangramento",
      "Observar dor intensa ou sinais de vasoespasmo",
      "Manter monitorização materna contínua"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: hipertensão grave, náuseas, vômitos, vasoespasmo",
    rarity: "Moderado Risco"
  },
  {
  id: "med-espironolactona-geral",
  name: "Espironolactona",
  drugClass: "Diurético poupador de potássio (antagonista da aldosterona)",
  indications: [
    "Insuficiência cardíaca",
    "Hipertensão essencial",
    "Edema e ascite",
    "Hiperaldosteronismo primário"
  ],
  dosage: "Adultos: 25 mg a 200 mg via oral, dependendo da indicação.",
  preparation: "Comprimidos orais.",
  administration: "Via oral, preferencialmente com alimentos.",
  nursingCautions: [
    "Monitorar níveis de potássio (risco de hipercalemia).",
    "Avaliar função renal.",
    "Observar sinais de desidratação e hipotensão.",
    "Monitorar ginecomastia (efeito colateral em homens)."
  ],
  antidoteOrToxicity: "Suporte clínico; correção de distúrbios eletrolíticos.",
  rarity: "Baixo Risco"
},
  {
    id: "med-etilefrina",
    name: "Etilefrina (Efortil)",
    drugClass: "Agonista adrenérgico (vasopressor)",
    indications: [
      "Hipotensão arterial",
      "Hipotensão postural",
      "Suporte hemodinâmico em queda de pressão"
    ],
    dosage: "5–10 mg IV lento ou IM; VO: 10–20 mg conforme necessidade",
    preparation: "Ampola 10 mg/mL",
    administration: "IV lento ou IM; VO quando indicado",
    nursingCautions: [
      "Monitorar pressão arterial e frequência cardíaca",
      "Observar risco de hipertensão reflexa",
      "Evitar em pacientes com doença cardíaca grave",
      "Avaliar perfusão periférica",
      "Usar com cautela em gestantes (avaliar risco-benefício)"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: hipertensão, taquicardia, arritmias",
    rarity: "Alto Risco"
  },
  {
    id: "med-contr-01",
    name: "Etinilestradiol + Levonorgestrel",
    drugClass: "Contraceptivo hormonal combinado oral",
    indications: [
      "Prevenção da gravidez",
      "Regulação do ciclo menstrual",
      "Tratamento de dismenorreia",
      "Controle de acne leve a moderada"
    ],
    dosage: "1 comprimido VO ao dia, por 21 dias, seguido de pausa de 7 dias (ou esquema contínuo conforme prescrição).",
    preparation: "Cartelas com 21 ou 28 comprimidos contendo doses combinadas.",
    administration: "Via oral, no mesmo horário diariamente.",
    nursingCautions: [
      "Avaliar fatores de risco para trombose (tabagismo, idade >35 anos)",
      "Monitorar PA antes e durante uso",
      "Orientar adesão rigorosa (esquecimento reduz eficácia)",
      "Observar efeitos colaterais (náuseas, cefaleia, mastalgia)",
      "Contraindicado em histórico de tromboembolismo"
    ],
    antidoteOrToxicity: "Superdose: náuseas e vômitos. Risco principal é tromboembolismo em uso prolongado.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-contr-04",
    name: "Etonogestrel (Implante Subdérmico)",
    drugClass: "Contraceptivo hormonal de longa duração (progestagênio)",
    indications: [
      "Contracepção de longa duração (até 3 anos)",
      "Alternativa para quem não pode usar estrogênio",
      "Alta eficácia contraceptiva"
    ],
    dosage: "Implante único contendo 68 mg, com liberação contínua por até 3 anos.",
    preparation: "Dispositivo pré-carregado para inserção subdérmica.",
    administration: "Inserção subdérmica na face interna do braço (procedimento ambulatorial).",
    nursingCautions: [
      "Confirmar ausência de gestação antes da inserção",
      "Monitorar irregularidade menstrual (sangramentos irregulares são comuns)",
      "Verificar posicionamento do implante após inserção",
      "Orientar sobre retorno rápido da fertilidade após retirada",
      "Observar sinais de infecção local"
    ],
    antidoteOrToxicity: "Eventos: sangramento irregular, cefaleia. Conduta: manejo clínico ou retirada do implante.",
    rarity: "Moderado Risco"
  },
  {
    id: "med-neuro-01",
    name: "Fenitoína",
    drugClass: "Anticonvulsivante (bloqueador de canais de sódio)",
    indications: [
      "Crises convulsivas tônico-clônicas",
      "Status epilepticus (após benzodiazepínico)",
      "Profilaxia de convulsões (TCE, neurocirurgia)"
    ],
    dosage: "Ataque: 15–20 mg/kg IV (máx. 50 mg/min). Manutenção: 100 mg IV/VO a cada 8 horas.",
    preparation: "Ampola 50 mg/mL. Diluir apenas em SF 0,9% (não usar SG).",
    administration: "IV lento com bomba de infusão e filtro. Monitorização contínua.",
    nursingCautions: [
      "Monitorar ECG e PA durante infusão (risco de arritmias e hipotensão)",
      "Nunca administrar rápido (risco de colapso cardiovascular)",
      "Observar sinais de extravasamento (síndrome da luva roxa)",
      "Monitorar níveis séricos (10–20 mcg/mL)",
      "Avaliar controle das crises"
    ],
    antidoteOrToxicity: "Intoxicação: ataxia, nistagmo, confusão, arritmias. Tratamento de suporte.",
    rarity: "Alto Risco"
  },
  {
  id: "med-fenobarbital-geral",
  name: "Fenobarbital",
  drugClass: "Anticonvulsivante (Barbitúrico)",
  indications: [
    "Crises convulsivas tônico-clônicas",
    "Status epilepticus (como alternativa)",
    "Sedação pré-operatória"
  ],
  dosage: "Adultos: 100 mg a 320 mg/dia via oral ou IV; Crianças: conforme peso.",
  preparation: "Comprimidos e soluções injetáveis.",
  administration: "Via oral, IM ou IV lento (máximo 60 mg/min).",
  nursingCautions: [
    "Monitorar depressão respiratória em administração IV.",
    "Observar sedação excessiva e sonolência.",
    "Não suspender abruptamente (risco de convulsões de rebote).",
    "Monitorar sinais vitais e nível de consciência."
  ],
  antidoteOrToxicity: "Suporte respiratório e hemodinâmico; carvão ativado em intoxicação aguda.",
  rarity: "Alto Risco"
},
  {
  id: "med-flecainida-geral",
  name: "Flecainida",
  drugClass: "Antiarrítmico classe Ic",
  indications: [
    "Fibrilação atrial persistente",
    "Taquicardia supraventricular paroxística",
    "Arritmias ventriculares graves"
  ],
  dosage: "Adultos: 50 mg a 150 mg via oral, duas vezes ao dia.",
  preparation: "Comprimidos orais.",
  administration: "Via oral.",
  nursingCautions: [
    "Risco pró-arrítmico elevado em pacientes com doenças cardíacas estruturais.",
    "Monitorar ECG (intervalo PR e QRS).",
    "Uso restrito a pacientes sem falência cardíaca.",
    "Monitorar níveis plasmáticos se possível."
  ],
  antidoteOrToxicity: "Suporte avançado de vida e controle de arritmias.",
  rarity: "Alto Risco"
},
  {
    id: "med-fluconazol-aps",
    name: "Fluconazol",
    drugClass: "Antifúngico triazólico",
    indications: [
      "Candidíase vaginal",
      "Candidíase oral",
      "Infecções fúngicas sistêmicas"
    ],
    dosage: "150 mg VO dose única (vaginal)",
    preparation: "Cápsulas",
    administration: "Via oral",
    nursingCautions: [
      "Monitorar função hepática",
      "Evitar em gestantes sem avaliação",
      "Interações medicamentosas"
    ],
    antidoteOrToxicity: "Sem antídoto específico",
    rarity: "Baixo Risco"
  },
  {
id: "med-furosemida-crit",
name: "Furosemida",
drugClass: "Diurético de alça (inibe cotransportador Na+/K+/2Cl- na alça de Henle)",
indications: [
"Edema agudo de pulmão",
"Insuficiência cardíaca descompensada",
"Sobrecarga hídrica em pacientes renais",
"Hipertensão com retenção volêmica"
],
dosage: "20–40 mg IV inicial, podendo dobrar a cada 2h conforme resposta; em pacientes crônicos pode necessitar doses maiores (até 80–200 mg/dia)",
preparation: "Pode ser administrado puro ou diluído em SF 0,9%; concentração usual: 10 mg/mL",
administration: "IV lento (1–2 minutos para doses até 40 mg; doses maiores em infusão lenta)",
nursingCautions: [
"Monitorar balanço hídrico rigoroso (entrada/saída)",
"Avaliar eletrólitos: risco de hipocalemia, hiponatremia e hipomagnesemia",
"Monitorar pressão arterial (risco de hipotensão)",
"Administrar lentamente para evitar ototoxicidade (principalmente em altas doses)",
"Avaliar função renal (creatinina e ureia)",
"Observar sinais de desidratação: mucosas secas, hipotensão postural"
],
antidoteOrToxicity: "Não há antídoto específico; corrigir distúrbios hidroeletrolíticos e suspender ou reduzir dose conforme necessidade",
rarity: "Baixo Risco"
},
  {
  id: "med-gabapentina-geral",
  name: "Gabapentina",
  drugClass: "Anticonvulsivante / Tratamento de dor neuropática",
  indications: [
    "Epilepsia focal",
    "Dor neuropática (ex: neuralgia pós-herpética)",
    "Síndrome das pernas inquietas"
  ],
  dosage: "Inicial: 300 mg VO no dia 1, aumentando gradualmente até 900–3600 mg/dia.",
  preparation: "Cápsulas ou comprimidos.",
  administration: "Via oral, independente das refeições.",
  nursingCautions: [
    "Observar sonolência e tontura.",
    "Monitorar ideação suicida.",
    "Ajustar dose em pacientes com insuficiência renal.",
    "Não suspender abruptamente."
  ],
  antidoteOrToxicity: "Hemodiálise em casos de superdosagem grave com insuficiência renal.",
  rarity: "Baixo Risco"
},
  {
id: "med-gluconato-calcio-geral",
name: "Gluconato de Cálcio 10%",
drugClass: "Repositor eletrolítico (cálcio)",
indications: [
"Hipocalcemia sintomática",
"Hipercalemia com alterações no ECG",
"Intoxicação por bloqueadores de canal de cálcio",
"Hiperfosfatemia grave"
],
dosage: "10 mL (1 ampola) IV lento em 5–10 minutos; pode repetir conforme resposta clínica e ECG",
preparation: "Pode ser administrado sem diluição ou diluído em 50–100 mL de SF",
administration: "IV lento em acesso seguro (preferencialmente central se uso repetido)",
nursingCautions: [
"Monitorar ECG contínuo durante administração (risco de arritmias)",
"Não administrar rapidamente (risco de parada cardíaca)",
"Evitar extravasamento (risco de necrose tecidual)",
"Não misturar com bicarbonato na mesma via (precipitação)",
"Avaliar cálcio sérico e função renal",
"Uso cauteloso em pacientes em uso de digitálicos"
],
antidoteOrToxicity: "Em hipercalcemia induzida: hidratação e diuréticos; suporte clínico conforme necessidade",
rarity: "Alto Risco"
},
  {
    id: "med-guaco",
    name: "Guaco",
    drugClass: "Fitoterápico expectorante",
    indications: [
      "Tosse produtiva",
      "Bronquite leve",
      "Uso em APS"
    ],
    dosage: "Xarope: 5–10 mL 2–3x/dia",
    preparation: "Xarope fitoterápico",
    administration: "Via oral",
    nursingCautions: [
      "Evitar em crianças muito pequenas sem avaliação",
      "Monitorar resposta clínica",
      "Uso complementar, não substitui tratamento antibiótico"
    ],
    antidoteOrToxicity: "Baixa toxicidade",
    rarity: "Baixo Risco"
  },
  {
id: "med-haloperidol-geral",
name: "Haloperidol",
drugClass: "Antipsicótico típico (bloqueador dopaminérgico D2)",
indications: [
"Delirium hiperativo em UTI",
"Agitação psicomotora",
"Psicoses agudas",
"Náuseas refratárias (uso off-label)"
],
dosage: "2–5 mg IV/IM, repetir a cada 4–8h conforme necessidade; em idosos iniciar com 0,5–1 mg",
preparation: "Solução pronta para uso; pode ser diluído em SF para administração IV lenta",
administration: "IV lento (preferencial) ou IM profunda",
nursingCautions: [
"Monitorar ECG (risco de prolongamento do QT e torsades de pointes)",
"Avaliar nível de consciência e resposta comportamental",
"Observar sinais extrapiramidais (rigidez, acatisia, distonia)",
"Cautela em idosos (risco aumentado de eventos adversos)",
"Evitar associação com outras drogas que prolongam QT",
"Monitorar pressão arterial (risco de hipotensão)"
],
antidoteOrToxicity: "Sintomas extrapiramidais: biperideno ou difenidramina; em arritmias, suporte avançado",
rarity: "Alto Risco"
},
  {
id: "med-heparina-crit",
name: "Heparina não fracionada",
drugClass: "Anticoagulante (potencializa antitrombina III)",
indications: [
"Trombose venosa profunda (TVP)",
"Tromboembolismo pulmonar (TEP)",
"Síndrome coronariana aguda (SCA)",
"Profilaxia tromboembólica em pacientes críticos"
],
dosage: "Bolus inicial: 60–80 UI/kg IV (máx. 5000 UI), seguido de infusão contínua 12–18 UI/kg/h, ajustada conforme TTPa (alvo: 1,5–2,5x controle)",
preparation: "Diluir 25.000 UI em 250 mL de SF 0,9% (100 UI/mL) ou conforme protocolo institucional",
administration: "Infusão contínua em bomba de infusão exclusiva; evitar administração IM",
nursingCautions: [
"Monitorar TTPa a cada 6h até estabilização, depois diariamente",
"Avaliar sinais de sangramento: gengivorragia, hematúria, melena, equimoses",
"Monitorar plaquetas (risco de trombocitopenia induzida por heparina – HIT)",
"Evitar punções desnecessárias e IM",
"Ajustar dose em idosos e pacientes com maior risco hemorrágico",
"Manter vigilância rigorosa em pacientes com insuficiência renal/hepática"
],
antidoteOrToxicity: "Protamina: 1 mg neutraliza aproximadamente 100 UI de heparina (máx. 50 mg); administrar lentamente para evitar hipotensão",
rarity: "Baixo Risco"
},
  {
    id: "med-hidralazina-obs-crise",
    name: "Hidralazina",
    drugClass: "Vasodilatador arterial direto",
    indications: [
      "Crise hipertensiva na gestação",
      "Pré-eclâmpsia grave",
      "Controle agudo da pressão arterial"
    ],
    dosage: "5–10 mg IV lento; repetir a cada 20–30 min conforme resposta",
    preparation: "Ampola 20 mg/mL; pode ser diluída em SF 0,9%",
    administration: "IV lento sob monitorização contínua",
    nursingCautions: [
      "Monitorar PA a cada 5 minutos após administração",
      "Observar taquicardia reflexa",
      "Manter paciente em repouso",
      "Avaliar sinais de hipotensão",
      "Monitorar BCF em gestantes"
    ],
    antidoteOrToxicity: "Sem antídoto específico; efeitos: hipotensão, taquicardia, cefaleia",
    rarity: "Baixo Risco"
  },
  {
    id: "med-hidroclorotiazida",
    name: "Hidroclorotiazida",
    drugClass: "Diurético tiazídico",
    indications: [
      "Hipertensão arterial",
      "Edema leve",
      "Coadjuvante em insuficiência cardíaca"
    ],
    dosage: "12,5–25 mg VO 1x/dia pela manhã",
    preparation: "Comprimidos 12,5 mg e 25 mg",
    administration: "Via oral, preferencialmente pela manhã",
    nursingCautions: [
      "Monitorar pressão arterial",
      "Controlar eletrólitos (potássio, sódio)",
      "Observar sinais de desidratação",
      "Orientar evitar uso noturno (diurese)",
      "Avaliar função renal"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: hipocalemia, hiponatremia, desidratação",
    rarity: "Baixo Risco"
  },
  {
    id: "med-ps-21",
    name: "Hidrocortisona",
    drugClass: "Corticosteroide (glicocorticoide e mineralocorticoide)",
    indications: [
      "Choque séptico (refratário)",
      "Insuficiência adrenal aguda",
      "Reações alérgicas graves",
      "Asma grave",
      "Doenças inflamatórias sistêmicas"
    ],
    dosage: "Adulto: 100–200 mg IV a cada 6–8 horas (choque ou insuficiência adrenal). Ajustar conforme resposta.",
    preparation: "Frasco-ampola 100 mg (pó). Reconstituir com diluente e diluir em SF 0,9%.",
    administration: "IV lento ou infusão. Também pode ser IM.",
    nursingCautions: [
      "Monitorar sinais vitais (especialmente PA em choque)",
      "Avaliar glicemia frequentemente",
      "Observar sinais de infecção",
      "Monitorar balanço hídrico (retenção de sódio e água)",
      "Importante em pacientes com insuficiência adrenal (não atrasar administração)"
    ],
    antidoteOrToxicity: "Uso prolongado: síndrome de Cushing, retenção hídrica, hiperglicemia. Retirada gradual.",
    rarity: "Alto Risco"
  },
  {
    id: "med-hidrogel",
    name: "Hidrogel",
    drugClass: "Cobertura para feridas",
    indications: [
      "Feridas secas",
      "Desbridamento autolítico"
    ],
    dosage: "Aplicação conforme necessidade",
    preparation: "Gel",
    administration: "Uso tópico",
    nursingCautions: [
      "Manter ambiente úmido",
      "Cobrir com curativo secundário"
    ],
    antidoteOrToxicity: "Não aplicável",
    rarity: "Baixo Risco"
  },
  {
    id: "med-ibuprofeno",
    name: "Ibuprofeno",
    drugClass: "Anti-inflamatório não esteroidal (AINE)",
    indications: [
      "Dor leve a moderada",
      "Processos inflamatórios",
      "Febre",
      "Dismenorreia"
    ],
    dosage: "200–400 mg VO 6/6h a 8/8h; máximo 1200–2400 mg/dia",
    preparation: "Comprimidos 200 mg, 400 mg, 600 mg",
    administration: "Via oral, preferencialmente após refeições",
    nursingCautions: [
      "Administrar com alimentos (reduzir irritação gástrica)",
      "Evitar em pacientes com úlcera ou gastrite",
      "Monitorar função renal em uso prolongado",
      "Observar sinais de sangramento gastrointestinal",
      "Cautela em idosos e hipertensos"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: gastrite, sangramento GI, insuficiência renal",
    rarity: "Baixo Risco"
  },
  {
id: "med-insulina-regular-crit",
name: "Insulina Regular",
drugClass: "Hormônio hipoglicemiante de ação rápida",
indications: [
"Cetoacidose diabética (CAD)",
"Estado hiperosmolar hiperglicêmico (EHH)",
"Controle glicêmico em pacientes críticos (alvo 140–180 mg/dL)",
"Hipercalemia (uso associado à glicose)"
],
dosage: "CAD/EHH: bolus opcional de 0,1 U/kg IV seguido de infusão contínua 0,1 U/kg/h; ajustar para queda glicêmica de 50–70 mg/dL/h; Hipercalemia: 10 U IV + 25 g glicose",
preparation: "Diluir 100 UI de insulina regular em 100 mL de SF 0,9% (1 UI/mL); desprezar os primeiros 20 mL para saturar equipo (evitar adsorção)",
administration: "Infusão contínua em bomba de infusão exclusiva; não administrar em Y com outras drogas",
nursingCautions: [
"Monitorar glicemia capilar de hora em hora (ou conforme protocolo)",
"Monitorar potássio sérico (risco de hipocalemia grave)",
"Associar reposição de K+ se <5,3 mEq/L antes de iniciar insulina na CAD",
"Evitar interrupção súbita (risco de rebote hiperglicêmico)",
"Ao atingir glicemia ~200 mg/dL (CAD), associar SG 5% para evitar hipoglicemia",
"Monitorar sinais de hipoglicemia: sudorese, confusão, taquicardia"
],
antidoteOrToxicity: "Hipoglicemia: glicose IV (SG 50% 20–50 mL) ou SG 10% contínuo; monitorização intensiva até estabilização",
rarity: "Baixo Risco"
},
  {
    id: "med-ipratropio",
    name: "Ipratrópio",
    drugClass: "Anticolinérgico broncodilatador de curta duração",
    indications: [
      "DPOC (principal indicação)",
      "Broncoespasmo associado à asma",
      "Dispneia com sibilância em pronto socorro"
    ],
    dosage: "0,25–0,5 mg (250–500 mcg) por nebulização a cada 6–8h; pode associar ao salbutamol",
    preparation: "Solução para nebulização (0,25 mg/mL ou 0,5 mg/2 mL), pode ser diluído em SF 0,9% até 3–5 mL",
    administration: "Via inalatória por nebulização com máscara ou bocal; orientar respiração lenta e profunda durante administração",
    nursingCautions: [
      "Avaliar padrão respiratório antes e após uso (FR, uso de musculatura acessória, sibilos)",
      "Monitorar saturação de O2 durante nebulização",
      "Pode causar boca seca e gosto amargo",
      "Evitar contato com olhos (risco de midríase/glaucoma)",
      "Melhor efeito quando associado a beta-agonistas (ex: salbutamol)"
    ],
    antidoteOrToxicity: "Raramente tóxico; em superdose → suporte clínico",
    rarity: "Baixo Risco"
  },
  {
  id: "med-itraconazol-geral",
  name: "Itraconazol",
  drugClass: "Antifúngico triazólico",
  indications: [
    "Micoses sistêmicas (blastomicose, histoplasmose)",
    "Dermatofitoses severas",
    "Candidíase oral ou esofágica"
  ],
  dosage: "Adultos: 100 mg a 400 mg/dia via oral, conforme a infecção.",
  preparation: "Cápsulas orais.",
  administration: "Via oral, preferencialmente após refeições para absorção ideal.",
  nursingCautions: [
    "Monitorar função hepática em uso prolongado.",
    "Observar sinais de insuficiência cardíaca (pode ter efeito inotrópico negativo).",
    "Numerosas interações medicamentosas via CYP3A4.",
    "Avaliar sinais de hipersensibilidade."
  ],
  antidoteOrToxicity: "Suporte clínico em superdosagem.",
  rarity: "Baixo Risco"
},
  {
    id: "med-neuro-03",
    name: "Levetiracetam",
    drugClass: "Anticonvulsivante (modulador da proteína SV2A)",
    indications: [
      "Crises epilépticas focais e generalizadas",
      "Status epilepticus (alternativa)",
      "Profilaxia de convulsões",
      "Uso em UTI neurológica"
    ],
    dosage: "Ataque: 1000–3000 mg IV. Manutenção: 500–1500 mg VO/IV 2x/dia.",
    preparation: "Frasco para diluição IV (ex: 500 mg/5 mL). Diluir em SF 0,9% ou SG 5%.",
    administration: "IV em infusão (15 min) ou VO.",
    nursingCautions: [
      "Monitorar nível de consciência e sedação",
      "Observar alterações comportamentais (agitação, irritabilidade)",
      "Ajustar dose em insuficiência renal",
      "Boa opção por menor interação medicamentosa",
      "Avaliar controle das crises"
    ],
    antidoteOrToxicity: "Intoxicação: sonolência, tontura, agitação. Tratamento de suporte.",
    rarity: "Alto Risco"
  },
  {
    id: "med-contr-03",
    name: "Levonorgestrel (Pílula do Dia Seguinte)",
    drugClass: "Contraceptivo de emergência (progestagênio)",
    indications: [
      "Prevenção de gravidez após relação sexual desprotegida",
      "Falha do método contraceptivo",
      "Violência sexual"
    ],
    dosage: "1,5 mg VO em dose única (ou 0,75 mg 2x com intervalo de 12h). Usar até 72h (ideal <24h).",
    preparation: "Comprimido de 1,5 mg ou 0,75 mg.",
    administration: "Via oral, dose única.",
    nursingCautions: [
      "Orientar uso o mais precoce possível para maior eficácia",
      "Pode causar náuseas e vômitos (avaliar necessidade de antiemético)",
      "Não substitui método contraceptivo regular",
      "Orientar sobre retorno do ciclo menstrual",
      "Investigar possibilidade de gravidez se atraso menstrual"
    ],
    antidoteOrToxicity: "Baixo risco de toxicidade. Efeitos comuns: náusea, cefaleia, alteração do ciclo.",
    rarity: "Alto Risco"
  },
  {
    id: "med-levotiroxina",
    name: "Levotiroxina",
    drugClass: "Hormônio tireoidiano sintético (T4)",
    indications: [
      "Hipotireoidismo",
      "Tireoidectomia",
      "Bócio",
      "Reposição hormonal tireoidiana"
    ],
    dosage: "Inicial: 25–50 mcg VO/dia; ajuste conforme TSH (dose média: 1,6 mcg/kg/dia)",
    preparation: "Comprimidos 25 mcg, 50 mcg, 75 mcg, 100 mcg",
    administration: "Via oral em jejum, 30–60 min antes do café",
    nursingCautions: [
      "Orientar uso em jejum e horário fixo",
      "Evitar associação com ferro/cálcio no mesmo horário",
      "Monitorar TSH periodicamente",
      "Observar sinais de hiper/hipotireoidismo",
      "Ajustar dose conforme resposta clínica e laboratorial"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: taquicardia, insônia, perda de peso (hipertireoidismo iatrogênico)",
    rarity: "Baixo Risco"
  },
  {
  id: "med-lidocaina-geral",
  name: "Lidocaína",
  drugClass: "Anestésico local / Antiarrítmico classe Ib",
  indications: [
    "Anestesia local ou regional",
    "Arritmias ventriculares agudas (IAM, cirurgia cardíaca)",
    "Pós-estabilização de arritmias em PCR"
  ],
  dosage: "Antiarrítmico: 1–1,5 mg/kg IV bolus, seguido de infusão 1–4 mg/min.",
  preparation: "Frascos com ou sem vasoconstritor (adrenalina). Gel ou spray tópico.",
  administration: "Infiltração local, sprays, IV bolus ou infusão contínua.",
  nursingCautions: [
    "Monitorar sinais de toxicidade do SNC (tremores, convulsões, confusão).",
    "Avaliar monitorização cardíaca contínua em uso IV.",
    "Cuidado para não administrar formulação com adrenalina via IV.",
    "Monitorar níveis de consciência e fala arrastada."
  ],
  antidoteOrToxicity: "Emulsão lipídica 20% IV para intoxicação sistêmica grave por anestésicos locais.",
  rarity: "Alto Risco"
},
  {
    id: "med-losartana",
    name: "Losartana",
    drugClass: "Antagonista do receptor de angiotensina II (BRA)",
    indications: [
      "Hipertensão arterial sistêmica",
      "Proteção renal em diabéticos",
      "Insuficiência cardíaca leve"
    ],
    dosage: "50 mg VO 1x/dia; podendo aumentar para 100 mg/dia",
    preparation: "Comprimidos 25 mg, 50 mg e 100 mg",
    administration: "Via oral, com ou sem alimentos",
    nursingCautions: [
      "Monitorar pressão arterial regularmente",
      "Avaliar função renal (creatinina, ureia)",
      "Monitorar potássio sérico (risco de hipercalemia)",
      "Orientar adesão ao tratamento contínuo",
      "Contraindicada na gestação"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: hipotensão, hipercalemia, insuficiência renal em casos graves",
    rarity: "Baixo Risco"
  },
  {
      id: "med-enalapril-antihip",
        name: "Maleato de Enalapril",
        drugClass: "Inibidor da ECA (IECA)",
        indications: [
      "Hipertensão arterial sistêmica",
      "Insuficiência cardíaca"
    ],
        dosage: "Adultos: 5 mg a 40 mg por dia, em uma ou duas tomadas.",
        preparation: "Comprimidos de 5mg, 10mg e 20mg.",
        administration: "Via oral.",
        nursingCautions: [
      "Efeito colateral comum: tosse seca persistente.",
      "Risco de hiperpotassemia (elevação do potássio); evitar suplementos de potássio sem monitoria.",
      "Uso concomitante with AINEs pode agravar a função renal."
    ],
        antidoteOrToxicity: "Suporte clínico em casos de hipotensão grave; expansão de volume.",
        rarity: "Baixo Risco"
  },
  {
    id: "med-neuro-02",
    name: "Manitol",
    drugClass: "Diurético osmótico",
    indications: [
      "Hipertensão intracraniana",
      "Edema cerebral",
      "Traumatismo cranioencefálico",
      "Acidente vascular cerebral com edema"
    ],
    dosage: "0,25–1 g/kg IV em bolus, podendo repetir conforme resposta clínica.",
    preparation: "Solução 20%. Verificar cristais antes do uso (aquecer se necessário).",
    administration: "IV em bolus ou infusão rápida controlada.",
    nursingCautions: [
      "Monitorar pressão intracraniana (quando disponível)",
      "Avaliar diurese e balanço hídrico",
      "Monitorar osmolaridade sérica (<320 mOsm/kg)",
      "Observar sinais de desidratação e hipovolemia",
      "Cuidado em insuficiência renal (risco de sobrecarga)"
    ],
    antidoteOrToxicity: "Complicações: edema pulmonar, desequilíbrio eletrolítico. Tratamento de suporte.",
    rarity: "Alto Risco"
  },
  {
    id: "med-contr-02",
    name: "Medroxiprogesterona (Acetato de Depo)",
    drugClass: "Contraceptivo hormonal injetável (progestagênio)",
    indications: [
      "Contracepção de longa duração",
      "Alternativa para mulheres que não podem usar estrogênio",
      "Redução de sangramento menstrual"
    ],
    dosage: "150 mg IM a cada 3 meses (12 semanas).",
    preparation: "Ampola ou seringa pré-preenchida 150 mg/mL.",
    administration: "IM profundo (glúteo ou deltoide).",
    nursingCautions: [
      "Orientar atraso no retorno da fertilidade após suspensão",
      "Monitorar ganho de peso",
      "Pode causar irregularidade menstrual ou amenorreia",
      "Avaliar risco de osteopenia em uso prolongado",
      "Garantir intervalo correto entre aplicações"
    ],
    antidoteOrToxicity: "Eventos adversos: sangramento irregular, ganho de peso. Tratamento sintomático.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-metildopa-gest-agudo",
    name: "Metildopa",
    drugClass: "Anti-hipertensivo (agonista alfa-2 central)",
    indications: [
      "Hipertensão arterial na gestação",
      "Pré-eclâmpsia leve",
      "Controle pressórico crônico em gestantes"
    ],
    dosage: "250–500 mg VO 2–3x/dia; máximo: 2 g/dia",
    preparation: "Comprimidos 250 mg ou 500 mg",
    administration: "Via oral, com ou sem alimentos",
    nursingCautions: [
      "Monitorar pressão arterial regularmente",
      "Observar sedação e sonolência",
      "Avaliar função hepática em uso prolongado",
      "Orientar adesão ao tratamento",
      "Monitorar sinais de depressão (efeito colateral possível)"
    ],
    antidoteOrToxicity: "Sem antídoto específico; efeitos: sedação, hipotensão, elevação de enzimas hepáticas",
    rarity: "Baixo Risco"
  },
  {
  id: "med-metotrexato-geral",
  name: "Metotrexato",
  drugClass: "Antirreumático modificador da doença (ARMD) / Antineoplásico",
  indications: [
    "Artrite reumatoide",
    "Psoríase severa",
    "Leucemias e linfomas",
    "Gravidez ectópica"
  ],
  dosage: "Artrite: 7,5 mg a 25 mg VO/IM uma vez por semana.",
  preparation: "Comprimidos e frascos injetáveis.",
  administration: "Via oral, IM ou IV. Crítico: dose semal para artrite/psoríase.",
  nursingCautions: [
    "Monitorar hemograma completo (risco de mielossupressão).",
    "Avaliar função hepática e renal.",
    "Orientar uso de ácido fólico para reduzir toxicidade.",
    "Altamente teratogênico; contraindicado na gestação.",
    "Observar estomatite e queda de cabelo."
  ],
  antidoteOrToxicity: "Leucovorin (Folinato de Cálcio) como resgate em doses tóxicas.",
  rarity: "Alto Risco"
},
  {
  id: "med-metronidazol-geral",
  name: "Metronidazol",
  drugClass: "Antibiótico nitroimidazólico / Antiparasitário",
  indications: [
    "Tricomoníase",
    "Amebíase e giardíase",
    "Vaginose bacteriana",
    "Infecções por anaeróbios"
  ],
  dosage: "Adultos: 250 mg a 500 mg VO/IV de 8/8h ou 12/12h conforme indicação.",
  preparation: "Comprimidos, géis vaginais e solução injetável IV (bolsas prontas).",
  administration: "Via oral (com alimentos), vaginal ou infusão IV lenta.",
  nursingCautions: [
    "Efeito antabuse: orientar proibição total de álcool durante e 48h após o uso.",
    "Monitorar gosto metálico e náuseas.",
    "Observar sintomas neurológicos (ataxia, confusão) em doses elevadas.",
    "Evitar em gestantes no primeiro trimestre (conforme protocolos)."
  ],
  antidoteOrToxicity: "Suporte clínico em superdosagem.",
  rarity: "Baixo Risco"
},
  {
id: "med-midazolam-crit",
name: "Midazolam",
drugClass: "Benzodiazepínico (agonista do receptor GABA-A)",
indications: [
"Sedação em pacientes sob ventilação mecânica",
"Controle de crises convulsivas",
"Procedimentos invasivos (sedação consciente)",
"Controle de agitação em ambiente crítico"
],
dosage: "Sedação: 0,02–0,1 mg/kg IV em bolus; manutenção: 0,02–0,2 mg/kg/h em infusão contínua; Convulsão: 5–10 mg IV lento",
preparation: "Diluir em SF 0,9% ou SG 5% conforme necessidade; estabilidade conforme protocolo local",
administration: "IV lento (bolus) ou infusão contínua em bomba; preferencialmente em via exclusiva",
nursingCautions: [
"Monitorar nível de sedação (escala RASS ou Ramsay)",
"Risco de depressão respiratória — monitorar FR, SpO2 e capnografia se disponível",
"Avaliar pressão arterial (pode causar hipotensão, especialmente em pacientes hipovolêmicos)",
"Uso prolongado pode levar a delirium ou síndrome de abstinência",
"Avaliar necessidade diária de sedação (interrupção programada)",
"Cuidado em idosos e pacientes com insuficiência hepática (efeito prolongado)"
],
antidoteOrToxicity: "Flumazenil (uso cauteloso, especialmente em pacientes com risco de convulsão); suporte ventilatório se necessário",
rarity: "Alto Risco"
},
  {
    id: "med-misoprostol-obs",
    name: "Misoprostol",
    drugClass: "Análogo da prostaglandina E1",
    indications: [
      "Indução do trabalho de parto",
      "Amadurecimento cervical",
      "Abortamento retido",
      "Hemorragia pós-parto"
    ],
    dosage: "Indução: 25 mcg vaginal a cada 4–6h; Abortamento: 800 mcg vaginal/sublingual; HPP: 600–800 mcg VO ou SL",
    preparation: "Comprimidos 200 mcg; pode ser fracionado conforme protocolo",
    administration: "Via vaginal, sublingual ou oral conforme indicação clínica",
    nursingCautions: [
      "Monitorar contrações uterinas (risco de taquissistolia)",
      "Avaliar BCF regularmente",
      "Evitar em cicatriz uterina prévia (risco de ruptura)",
      "Observar sangramento vaginal",
      "Garantir intervalo adequado entre doses"
    ],
    antidoteOrToxicity: "Sem antídoto específico; suspender uso e suporte clínico; risco: hiperestimulação uterina, sofrimento fetal",
    rarity: "Baixo Risco"
  },
  {
id: "med-morfina-geral",
name: "Morfina",
drugClass: "Opioide",
indications: [
"Dor intensa",
"Dor no IAM",
"Dispneia em edema agudo de pulmão"
],
dosage: "2–4 mg IV, repetir conforme necessidade",
preparation: "Diluir em SF",
administration: "IV lento (4–5 min)",
nursingCautions: [
"Monitorar FR e nível de consciência",
"Risco de depressão respiratória",
"Pode causar hipotensão e náuseas",
"Avaliar escala de dor"
],
antidoteOrToxicity: "Naloxona",
rarity: "Alto Risco"
},
  {
    id: "med-nistatina-aps",
    name: "Nistatina",
    drugClass: "Antifúngico poliênico",
    indications: [
      "Candidíase oral",
      "Dermatites fúngicas"
    ],
    dosage: "Suspensão: 100.000 UI 4x/dia",
    preparation: "Suspensão ou creme",
    administration: "Uso oral tópico ou cutâneo",
    nursingCautions: [
      "Manter contato na mucosa antes de engolir",
      "Baixa absorção sistêmica"
    ],
    antidoteOrToxicity: "Baixa toxicidade",
    rarity: "Baixo Risco"
  },
  {
  id: "med-nitroprussiato-geral",
  name: "Nitroprussiato de Sódio",
  drugClass: "Vasodilatador potente (anti-hipertensivo venoso e arterial)",
  indications: [
    "Crise hipertensiva (emergência)",
    "Insuficiência cardíaca descompensada (redução de pós-carga)",
    "Hipotensão controlada em cirurgias"
  ],
  dosage: "0,3–10 mcg/kg/min em infusão contínua ajustada conforme PAM.",
  preparation: "Frasco deve ser protegido da luz (fotossensível) com capa opaca.",
  administration: "Exclusivamente IV através de bomba de infusão contínua.",
  nursingCautions: [
    "Monitorização rigorosa da PA (idealmente invasiva).",
    "Trocar solução e equipo a cada 24 horas.",
    "Monitorar toxicidade por cianeto (acidose metabólica, alteração mental).",
    "Proteger a solução da luz imediatamente após preparo.",
    "Não administrar se a solução mudar de cor (deve ser acastanhada clara)."
  ],
  antidoteOrToxicity: "Nitrito de sódio e tiossulfato de sódio em caso de intoxicação por cianeto.",
  rarity: "Alto Risco"
},
  {
id: "med-noradrenalina-geral",
name: "Noradrenalina",
drugClass: "Vasopressor (agonista α1 predominante)",
indications: [
"Choque séptico",
"Hipotensão grave com PAM <65 mmHg após reposição volêmica",
"Choque distributivo"
],
dosage: "0,05–1 mcg/kg/min titulando para PAM ≥65 mmHg",
preparation: "4 mg em 250 mL SG 5% (16 mcg/mL) ou conforme protocolo institucional",
administration: "Infusão contínua em bomba, preferencialmente em acesso venoso central",
nursingCautions: [
"Monitorar PAM continuamente (ideal com linha arterial)",
"Avaliar perfusão periférica e débito urinário",
"Risco de necrose por extravasamento (usar acesso central)",
"Corrigir hipovolemia antes de iniciar"
],
antidoteOrToxicity: "Fentolamina no local do extravasamento; reduzir ou suspender em hipertensão grave",
rarity: "Alto Risco"
},
  {
    id: "med-contr-06",
    name: "Noretisterona",
    drugClass: "Progestagênio (minipílula)",
    indications: [
      "Contracepção em lactantes",
      "Alternativa para contraindicação ao estrogênio",
      "Controle de sangramento uterino"
    ],
    dosage: "0,35 mg VO diariamente, sem pausa.",
    preparation: "Comprimidos de 0,35 mg.",
    administration: "Via oral, sempre no mesmo horário (janela curta de atraso).",
    nursingCautions: [
      "Atrasos >3 horas podem reduzir eficácia",
      "Pode causar irregularidade menstrual",
      "Seguro durante amamentação",
      "Orientar adesão rigorosa",
      "Avaliar interações medicamentosas"
    ],
    antidoteOrToxicity: "Eventos: sangramento irregular, cefaleia. Baixo risco de toxicidade.",
    rarity: "Baixo Risco"
  },
  {
    id: "med-ocitocina-obst",
    name: "Ocitocina",
    drugClass: "Uterotônico (hormônio peptídico)",
    indications: [
      "Indução do trabalho de parto",
      "Condução do trabalho de parto",
      "Prevenção e tratamento de hemorragia pós-parto"
    ],
    dosage: "Indução: iniciar com 1–2 mUI/min IV, aumentando gradualmente; HPP: 10 UI IM ou 20–40 UI em 1000 mL SF em infusão",
    preparation: "Ampola 5 UI/mL; diluir em SF 0,9% ou SG 5% para infusão contínua",
    administration: "Infusão IV em bomba para indução; IM ou IV lento no pós-parto",
    nursingCautions: [
      "Monitorar frequência e intensidade das contrações uterinas",
      "Avaliar BCF continuamente (risco de sofrimento fetal)",
      "Suspender em caso de taquissistolia uterina",
      "Controlar balanço hídrico (risco de intoxicação hídrica)",
      "Manter acesso venoso pérvio e bomba de infusão precisa"
    ],
    antidoteOrToxicity: "Suspensão da infusão; uso de tocolíticos (ex: terbutalina) se hiperestimulação; riscos: sofrimento fetal, ruptura uterina",
    rarity: "Alto Risco"
  },
  {
id: "med-omeprazol-geral",
name: "Omeprazol",
drugClass: "Inibidor da bomba de prótons",
indications: [
"Úlcera péptica",
"Profilaxia de sangramento em UTI",
"DRGE"
],
dosage: "40 mg IV ou VO 1x/dia",
preparation: "Reconstituir em diluente específico",
administration: "IV lento ou infusão",
nursingCautions: [
"Uso prolongado: risco de deficiência de B12 e magnésio",
"Avaliar dor abdominal e sangramento",
"Administrar antes das refeições (VO)"
],
antidoteOrToxicity: "Suporte clínico",
rarity: "Baixo Risco"
},
  {
  id: "med-ondansetrona-geral",
  name: "Ondansetrona",
  drugClass: "Antiemético (antagonista do receptor 5-HT3)",
  indications: [
    "Prevenção e tratamento de náuseas e vômitos induzidos por quimioterapia",
    "Vômitos pós-operatórios",
    "Vômitos intensos em pronto socorro"
  ],
  dosage: "Adultos: 4 mg a 8 mg VO/IV de 8/8h ou conforme prescrição.",
  preparation: "Comprimidos (incluinte orodispersíveis) e ampolas injetáveis.",
  administration: "Via oral, SC, IM ou IV lento.",
  nursingCautions: [
    "Monitorar ECG em pacientes de risco (risco de prolongamento do intervalo QT).",
    "Avaliar alívio dos sintomas gastrointestinais.",
    "Observar cefaleia e constipação como efeitos comuns.",
    "Administrar preferencialmente antes da quimioterapia."
  ],
  antidoteOrToxicity: "Suporte clínico; monitorar arritmias em superdosagem.",
  rarity: "Baixo Risco"
},
  {
  id: "med-oxacilina-geral",
  name: "Oxacilina",
  drugClass: "Antibiótico beta-lactâmico (penicilina penicilinase-resistente)",
  indications: [
    "Infecções por Staphylococcus aureus sensíveis a meticilina (MSSA)",
    "Infecções de pele, ossos e endocardite estafilocócica"
  ],
  dosage: "Adultos: 1 g a 2 g IV a cada 4–6 horas.",
  preparation: "Frasco-ampola (pó para reconstituição). Diluir em SF 0,9% ou SG 5%.",
  administration: "IV lento ou infusão; pode ser IM profunda em doses menores.",
  nursingCautions: [
    "Verificar rigorosamente história de alergia a penicilinas.",
    "Monitorar função hepática (risco de hepatite medicamentosa).",
    "Avaliar sinais de flebite em acesso periférico.",
    "Monitorar leucograma (risco de neutropenia em uso prolongado)."
  ],
  antidoteOrToxicity: "Suporte em anafilaxia (Adrenalina).",
  rarity: "Baixo Risco"
},
  {
  id: "med-paracetamol-geral",
  name: "Paracetamol (Acetaminofeno)",
  drugClass: "Analgésico e Antitérmico (não AINE)",
  indications: [
    "Febre",
    "Dor leve a moderada"
  ],
  dosage: "Adultos: 500 mg a 1000 mg VO a cada 4–6h; máximo 4 g/dia.",
  preparation: "Comprimidos, gotas e soluções orais.",
  administration: "Via oral.",
  nursingCautions: [
    "Monitorar toxicidade hepática (especialmente se ingestão >4g/dia ou álcool).",
    "Avaliar temperatura e escala de dor.",
    "Observar reações alérgicas cutâneas (raras mas graves).",
    "Atenção a formulações combinadas com opioides (risco de superdosagem)."
  ],
  antidoteOrToxicity: "N-acetilcisteína (NAC) para prevenir falência hepática em intoxicação aguda.",
  rarity: "Baixo Risco"
},
  {
    id: "med-penicilina-benzatina-gest",
    name: "Penicilina Benzatina",
    drugClass: "Antibiótico beta-lactâmico",
    indications: [
      "Sífilis na gestação",
      "Profilaxia de transmissão vertical",
      "Infecções estreptocócicas"
    ],
    dosage: "Sífilis recente: 2,4 milhões UI IM dose única; tardia: 2,4 milhões UI IM semanal por 3 semanas",
    preparation: "Frasco-ampola para reconstituição; diluir conforme fabricante (geralmente com lidocaína para reduzir dor)",
    administration: "Via intramuscular profunda (preferir região ventroglútea)",
    nursingCautions: [
      "Realizar teste de alergia quando indicado",
      "Ter adrenalina disponível (risco de anafilaxia)",
      "Orientar paciente sobre dor local",
      "Garantir adesão ao esquema completo",
      "Registrar corretamente no pré-natal"
    ],
    antidoteOrToxicity: "Antídoto: Adrenalina em caso de anafilaxia; reações: rash, choque anafilático",
    rarity: "Baixo Risco"
  },
  {
    id: "med-pep",
    name: "PEP (Profilaxia Pós-Exposição ao HIV)",
    drugClass: "Antirretrovirais combinados",
    indications: [
      "Exposição ocupacional ao HIV",
      "Violência sexual",
      "Relação sexual desprotegida com risco"
    ],
    dosage: "Tenofovir 300 mg + Lamivudina 300 mg + Dolutegravir 50 mg, 1x/dia por 28 dias",
    preparation: "Comprimidos combinados ou separados conforme protocolo",
    administration: "Via oral, iniciar idealmente em até 2h após exposição (máx. 72h)",
    nursingCautions: [
      "Garantir início precoce do tratamento",
      "Monitorar adesão por 28 dias",
      "Solicitar sorologias (HIV, HBV, HCV)",
      "Orientar sobre efeitos adversos (náuseas, cefaleia)",
      "Acompanhar com testagem seriada"
    ],
    antidoteOrToxicity: "Sem antídoto específico; suporte clínico em efeitos adversos",
    rarity: "Moderado Risco"
  },
  {
    id: "med-phmb",
    name: "PHMB",
    drugClass: "Antisséptico (poliexametileno biguanida)",
    indications: [
      "Limpeza de feridas",
      "Controle de biofilme"
    ],
    dosage: "Uso conforme curativo",
    preparation: "Solução ou gaze impregnada",
    administration: "Uso tópico",
    nursingCautions: [
      "Não necessita enxágue",
      "Seguro para tecidos viáveis"
    ],
    antidoteOrToxicity: "Baixa toxicidade",
    rarity: "Moderado Risco"
  },
  {
id: "med-piperacilina-tazobactam",
name: "Piperacilina + Tazobactam",
drugClass: "Antibiótico beta-lactâmico + inibidor de beta-lactamase",
indications: [
"Sepse de foco pulmonar, abdominal ou urinário",
"Pneumonia hospitalar",
"Infecções intra-abdominais complicadas",
"Infecções de pele e partes moles graves"
],
dosage: "4,5 g IV a cada 6–8h (ajustar em insuficiência renal conforme ClCr)",
preparation: "Reconstituir frasco com água estéril (ex: 20 mL) e diluir em 100 mL de SF 0,9% ou SG 5%",
administration: "Infusão IV em 30–60 minutos; pode ser feita infusão estendida (3–4h) em pacientes críticos para otimizar tempo acima da MIC",
nursingCautions: [
"Verificar histórico de alergia a penicilinas/cefalosporinas",
"Monitorar função renal (risco de nefrotoxicidade, especialmente em associação com vancomicina)",
"Avaliar sinais de diarreia associada a C. difficile",
"Observar sinais de hipersensibilidade (rash, broncoespasmo, anafilaxia)",
"Monitorar eletrólitos (pode causar hipocalemia)",
"Ajustar dose conforme função renal"
],
antidoteOrToxicity: "Não há antídoto específico; suspender droga e instituir suporte clínico em caso de reação grave",
rarity: "Baixo Risco"
},
  {
  id: "med-prednisona-geral",
  name: "Prednisona",
  drugClass: "Corticosteroide (glicocorticoide sistêmico)",
  indications: [
    "Doenças inflamatórias (artrite, lúpus)",
    "Condições alérgicas graves",
    "Asma e DPOC exacerbadados",
    "Imunossupressão em transplantes"
  ],
  dosage: "Adultos: 5 mg a 60 mg/dia VO, ajustado conforme a patologia.",
  preparation: "Comprimidos orais.",
  administration: "Via oral, preferencialmente pela manhã com alimentos.",
  nursingCautions: [
    "Não interromper bruscamente após uso prolongado (risco de insuficiência adrenal).",
    "Monitorar glicemia (risco de hiperglicemia).",
    "Observar alterações de humor, retenção hídrica e aumento de peso.",
    "Reforçar risco de infecções devido à imunossupressão.",
    "Monitorar pressão arterial."
  ],
  antidoteOrToxicity: "Redução gradual da dose (desmame); suporte sintomático.",
  rarity: "Baixo Risco"
},
  {
    id: "med-prep",
    name: "PrEP (Profilaxia Pré-Exposição ao HIV)",
    drugClass: "Antirretroviral preventivo",
    indications: [
      "Populações de risco elevado para HIV",
      "Parcerias sorodiferentes",
      "Uso em APS com acompanhamento contínuo"
    ],
    dosage: "Tenofovir 300 mg + Emtricitabina 200 mg, 1x/dia contínuo",
    preparation: "Comprimido combinado",
    administration: "Via oral diária, com acompanhamento trimestral",
    nursingCautions: [
      "Testar HIV antes de iniciar",
      "Monitorar função renal",
      "Reforçar adesão diária",
      "Orientar uso associado de preservativo",
      "Acompanhamento regular na APS"
    ],
    antidoteOrToxicity: "Sem antídoto específico",
    rarity: "Moderado Risco"
  },
  {
  id: "med-propranolol-geral",
  name: "Propranolol",
  drugClass: "Betabloqueador não seletivo",
  indications: [
    "Hipertensão arterial",
    "Angina estável",
    "Arritmias cardíacas",
    "Profilaxia de enxaqueca",
    "Controle de sintomas de ansiedade (tremores, taquicardia)"
  ],
  dosage: "Adultos: 40 mg a 160 mg/dia via oral, divididos em doses.",
  preparation: "Comprimidos orais.",
  administration: "Via oral.",
  nursingCautions: [
    "Contraindicado em pacientes com asma ou DPOC (risco de broncoespasmo).",
    "Monitorar frequência cardíaca (não administrar se FC < 60 bpm) e PA.",
    "Monitorar glicemia em diabéticos (pode mascarar sintomas de hipoglicemia).",
    "Não suspender abruptamente (risco de infarto ou arritmia de rebote)."
  ],
  antidoteOrToxicity: "Atropina para bradicardia; Glucagon em intoxicação severa.",
  rarity: "Baixo Risco"
},
  {
    id: "med-mental-07",
    name: "Quetiapina",
    drugClass: "Antipsicótico atípico (antagonista D2 e 5-HT2)",
    indications: [
      "Esquizofrenia",
      "Transtorno bipolar (mania e depressão)",
      "Transtorno depressivo maior (adjuvante)",
      "Ansiedade (off-label)",
      "Insônia associada a transtornos psiquiátricos"
    ],
    dosage: "Início: 25–50 mg VO à noite, podendo aumentar gradualmente até 300–800 mg/dia conforme resposta.",
    preparation: "Comprimidos de 25 mg, 100 mg, 200 mg e 300 mg.",
    administration: "Via oral, geralmente à noite devido ao efeito sedativo.",
    nursingCautions: [
      "Monitorar sedação intensa e risco de quedas",
      "Avaliar ganho de peso e síndrome metabólica",
      "Observar hipotensão ortostática",
      "Monitorar glicemia e perfil lipídico",
      "Orientar paciente sobre início gradual do efeito"
    ],
    antidoteOrToxicity: "Intoxicação: sedação profunda, hipotensão, taquicardia. Tratamento de suporte.",
    rarity: "Alto Risco"
  },
  {
  id: "med-ranitidina-geral",
  name: "Ranitidina",
  drugClass: "Antagonista do receptor H2 da histamina",
  indications: [
    "Úlcera gástrica ou duodenal",
    "Refluxo gastroesofágico (DRGE)",
    "Prevenção de úlcera de estresse em pacientes graves"
  ],
  dosage: "Adultos: 150 mg VO 2x/dia; ou 50 mg IV a cada 6–8 horas.",
  preparation: "Comprimidos e ampolas injetáveis.",
  administration: "Via oral ou IV lento.",
  nursingCautions: [
    "Ajustar dose em pacientes com insuficiência renal.",
    "Monitorar estado mental em idosos (pode causar confusão).",
    "Avaliar cessação da dor epigástrica e desconforto."
  ],
  antidoteOrToxicity: "Suporte clínico em superdosagem.",
  rarity: "Baixo Risco"
},
  {
    id: "med-mental-04",
    name: "Risperidona",
    drugClass: "Antipsicótico atípico (antagonista dopamina D2 e serotonina 5-HT2)",
    indications: [
      "Esquizofrenia",
      "Transtorno bipolar (fase aguda)",
      "Agitação e agressividade",
      "Transtornos do comportamento"
    ],
    dosage: "Início: 1–2 mg/dia VO, podendo aumentar gradualmente até 4–6 mg/dia conforme resposta.",
    preparation: "Comprimidos de 1 mg, 2 mg, 3 mg e solução oral.",
    administration: "Via oral, 1–2x/dia, com ou sem alimentos.",
    nursingCautions: [
      "Monitorar ganho de peso e síndrome metabólica",
      "Observar sintomas extrapiramidais (em doses maiores)",
      "Avaliar sedação e tontura",
      "Monitorar glicemia e perfil lipídico",
      "Cuidado com hipotensão ortostática"
    ],
    antidoteOrToxicity: "Intoxicação: sedação, taquicardia, hipotensão. Tratamento de suporte.",
    rarity: "Alto Risco"
  },
  {
  id: "med-rivaroxabana-geral",
  name: "Rivaroxabana",
  drugClass: "Anticoagulante oral (inibidor direto do fator Xa)",
  indications: [
    "Prevenção de AVC em fibrilação atrial não valvular",
    "Tratamento e prevenção de TVP e Embolia Pulmonar",
    "Profilaxia em cirurgias ortopédicas"
  ],
  dosage: "10 mg a 20 mg VO, uma vez ao dia.",
  preparation: "Comprimidos orais.",
  administration: "Via oral; doses de 15mg ou 20mg devem ser tomadas com alimentos.",
  nursingCautions: [
    "Monitorar sinais de sangramento (ativa ou oculta).",
    "Explicar ao paciente a importância de não pular doses.",
    "Não requer monitorização rotineira de INR (diferente da varfarina).",
    "Avaliar função renal antes e durante o tratamento."
  ],
  antidoteOrToxicity: "Andexanet alfa (antídoto específico); se não disponível, suporte com complexo protrombínico.",
  rarity: "Moderado Risco"
},
  {
    id: "med-salbutamol-obs",
    name: "Salbutamol",
    drugClass: "Broncodilatador (agonista β2-adrenérgico)",
    indications: [
      "Asma",
      "Broncoespasmo",
      "DPOC",
      "Crises de dispneia leve na APS"
    ],
    dosage: "Inalatório: 100–200 mcg (1–2 jatos) a cada 4–6h se necessário",
    preparation: "Aerossol dosimetrado (100 mcg/jato) ou solução para nebulização",
    administration: "Via inalatória com espaçador ou nebulização",
    nursingCautions: [
      "Ensinar técnica correta de inalação",
      "Monitorar frequência cardíaca (taquicardia)",
      "Observar tremores e agitação",
      "Avaliar resposta clínica (melhora da dispneia)",
      "Evitar uso excessivo (indica descontrole da doença)"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: taquicardia, tremores, hipocalemia em uso excessivo",
    rarity: "Baixo Risco"
  },
  {
id: "med-mental-03",
name: "Sertralina",
drugClass: "Inibidor seletivo da recaptação de serotonina (ISRS)",
indications: [
"Depressão maior",
"Transtorno de ansiedade generalizada",
"Transtorno do pânico",
"TOC",
"Transtorno de estresse pós-traumático"
],
dosage: "Início: 25–50 mg VO/dia. Ajuste gradual até 100–200 mg/dia conforme resposta.",
preparation: "Comprimidos de 25 mg, 50 mg e 100 mg.",
administration: "Via oral, preferencialmente pela manhã.",
nursingCautions: [
"Monitorar risco de ideação suicida no início do tratamento",
"Observar efeitos gastrointestinais (náuseas, diarreia)",
"Avaliar síndrome serotoninérgica (agitação, tremor, hipertermia)",
"Orientar que efeito terapêutico leva semanas",
"Evitar suspensão abrupta"
],
antidoteOrToxicity: "Síndrome serotoninérgica: suspensão imediata e suporte clínico.",
rarity: "Baixo Risco"
},
  {
    id: "med-sinvastatina",
    name: "Sinvastatina",
    drugClass: "Estatina (inibidor da HMG-CoA redutase)",
    indications: [
      "Dislipidemia",
      "Prevenção cardiovascular",
      "Hipercolesterolemia",
      "Redução de risco de eventos cardiovasculares"
    ],
    dosage: "10–40 mg VO 1x/dia à noite",
    preparation: "Comprimidos 10 mg, 20 mg e 40 mg",
    administration: "Via oral, preferencialmente à noite",
    nursingCautions: [
      "Monitorar enzimas hepáticas (TGO/TGP)",
      "Observar dor muscular (risco de miopatia)",
      "Orientar evitar consumo excessivo de álcool",
      "Avaliar adesão ao tratamento contínuo",
      "Contraindicada na gestação"
    ],
    antidoteOrToxicity: "Sem antídoto específico; toxicidade: miopatia, rabdomiólise (raro), hepatotoxicidade",
    rarity: "Baixo Risco"
  },
  {
    id: "med-sulfadiazina-prata",
    name: "Sulfadiazina de Prata",
    drugClass: "Antimicrobiano tópico",
    indications: [
      "Queimaduras",
      "Feridas infectadas"
    ],
    dosage: "Aplicação tópica 1–2x/dia",
    preparation: "Creme",
    administration: "Uso tópico",
    nursingCautions: [
      "Avaliar alergia a sulfa",
      "Cobrir com curativo estéril",
      "Monitorar cicatrização"
    ],
    antidoteOrToxicity: "Raro efeito sistêmico",
    rarity: "Baixo Risco"
  },
  {
    id: "med-sulfato-magnesio-obs",
    name: "Sulfato de Magnésio",
    drugClass: "Anticonvulsivante / Tocolítico",
    indications: [
      "Prevenção e tratamento de eclâmpsia",
      "Pré-eclâmpsia grave",
      "Neuroproteção fetal em prematuridade"
    ],
    dosage: "Ataque: 4–6 g IV em 20 min; manutenção: 1–2 g/h IV contínuo",
    preparation: "Ampola 50% (500 mg/mL); diluir em SF 0,9% para infusão controlada",
    administration: "IV em bomba de infusão; pode ser IM em cenários específicos",
    nursingCautions: [
      "Monitorar reflexos patelares (primeiro sinal de toxicidade)",
      "Avaliar frequência respiratória (>12 irpm)",
      "Controlar diurese (>25–30 mL/h)",
      "Manter cálcio gluconato disponível como antídoto",
      "Monitorar nível de consciência"
    ],
    antidoteOrToxicity: "Antídoto: Gluconato de cálcio 10% 10 mL IV lento; toxicidade: depressão respiratória, arreflexia, parada cardíaca",
    rarity: "Alto Risco"
  },
  {
    id: "med-sulfato-ferroso",
    name: "Sulfato Ferroso",
    drugClass: "Suplemento de ferro",
    indications: [
      "Anemia ferropriva",
      "Gestantes",
      "Crianças com deficiência de ferro"
    ],
    dosage: "40–120 mg de ferro elementar/dia",
    preparation: "Comprimidos ou solução oral",
    administration: "Via oral, em jejum ou com vitamina C",
    nursingCautions: [
      "Pode causar fezes escuras",
      "Evitar com leite ou cálcio",
      "Monitorar hemoglobina",
      "Orientar adesão"
    ],
    antidoteOrToxicity: "Intoxicação por ferro é grave → uso de deferoxamina",
    rarity: "Baixo Risco"
  },
  {
    id: "med-neo-01",
    name: "Surfactante Pulmonar (Beractanto/Poractanto alfa)",
    drugClass: "Agente tensoativo pulmonar",
    indications: [
      "Síndrome do desconforto respiratório do recém-nascido (SDR)",
      "Prematuridade com deficiência de surfactante",
      "Profilaxia em RN < 30 semanas (conforme protocolo)"
    ],
    dosage: "Poractanto: 200 mg/kg dose inicial intratraqueal, podendo repetir 100 mg/kg. Beractanto: 100 mg/kg/dose.",
    preparation: "Frasco pronto para uso. Aquecer à temperatura ambiente e homogenizar suavemente antes da administração.",
    administration: "Via intratraqueal, através de tubo orotraqueal, em ambiente controlado (UTI neonatal).",
    nursingCautions: [
      "Monitorar saturação e frequência cardíaca durante administração",
      "Risco de dessaturação e bradicardia transitória",
      "Necessário suporte ventilatório adequado",
      "Reposicionar RN para melhor distribuição pulmonar",
      "Monitorar complacência pulmonar após administração"
    ],
    antidoteOrToxicity: "Eventos adversos: obstrução de via aérea, hipoxemia transitória. Manejo com suporte ventilatório.",
    rarity: "Alto Risco"
  },
  {
  id: "med-tramadol-geral",
  name: "Tramadol",
  drugClass: "Analgetico opioide sintético",
  indications: [
    "Dor moderada a severa"
  ],
  dosage: "Adultos: 50 mg a 100 mg VO/IV a cada 4–6h; máximo 400 mg/dia.",
  preparation: "Cápsulas, gotas e ampolas injetáveis.",
  administration: "Via oral ou IV lento (mínimo 2-3 min para evitar náuseas).",
  nursingCautions: [
    "Monitorar náuseas e vômitos (muito comuns).",
    "Observar tontura e sonolência.",
    "Risco de convulsões, especialmente em pacientes com histórico ou doses altas.",
    "Monitorar risco de síndrome serotoninérgica quando usado com antidepressivos.",
    "Avaliar padrão respiratório."
  ],
  antidoteOrToxicity: "Naloxona para depressão respiratória; suporte para convulsões.",
  rarity: "Moderado Risco"
},
  {
    id: "med-mental-08",
    name: "Valproato de Sódio (Ácido Valproico)",
    drugClass: "Estabilizador de humor / anticonvulsivante",
    indications: [
      "Transtorno bipolar (fase maníaca)",
      "Epilepsia",
      "Profilaxia de enxaqueca",
      "Controle de impulsividade"
    ],
    dosage: "Inicial: 250–500 mg VO 2–3x/dia. Ajustar conforme níveis séricos (50–100 mcg/mL).",
    preparation: "Comprimidos e solução oral. Ampola IV disponível em ambiente hospitalar.",
    administration: "VO preferencial, com alimentos. IV em casos específicos.",
    nursingCautions: [
      "Monitorar função hepática (risco de hepatotoxicidade)",
      "Observar tremores, sedação e ganho de peso",
      "Avaliar plaquetas (risco de trombocitopenia)",
      "Contraindicado na gestação (teratogênico)",
      "Monitorar níveis séricos"
    ],
    antidoteOrToxicity: "Intoxicação: depressão do SNC, hepatotoxicidade. Tratamento: suporte e L-carnitina em casos graves.",
    rarity: "Alto Risco"
  },
  {
id: "med-vancomicina-geral",
name: "Vancomicina",
drugClass: "Antibiótico glicopeptídeo",
indications: [
"Infecções graves por Gram-positivos (MRSA)",
"Sepse de origem desconhecida (cobertura empírica)",
"Endocardite infecciosa",
"Pneumonia hospitalar"
],
dosage: "15–20 mg/kg IV a cada 8–12h (ajustar por função renal e níveis séricos); dose de ataque: 25–30 mg/kg em sepse grave",
preparation: "Reconstituir frasco (ex: 500 mg ou 1 g) com água estéril e diluir em 100–250 mL de SF ou SG 5% (concentração final ≤5 mg/mL)",
administration: "Infusão IV lenta (mínimo 60 minutos para 1 g; ideal 1–2 horas conforme dose) para evitar reações infusionais",
nursingCautions: [
"Monitorar níveis séricos (vale: 10–20 mcg/mL; alvo 15–20 em infecções graves)",
"Avaliar função renal (risco de nefrotoxicidade)",
"Observar sinais de 'Red Man Syndrome' (rubor, prurido, hipotensão)",
"Evitar infusão rápida (principal fator de reação adversa)",
"Rodiziar acessos periféricos (risco de flebite)",
"Avaliar associação com outros nefrotóxicos (ex: aminoglicosídeos)"
],
antidoteOrToxicity: "Não há antídoto específico; em toxicidade: suspender droga, suporte renal; Síndrome do 'Homem Vermelho': reduzir velocidade e administrar anti-histamínico",
rarity: "Moderado Risco"
},
  {
  id: "med-varfarina-geral",
  name: "Varfarina",
  drugClass: "Anticoagulante oral (antagonista da vitamina K)",
  indications: [
    "Prevenção e tratamento de tromboembolismo venoso",
    "Fibrilação atrial",
    "Próteses valvares cardíacas"
  ],
  dosage: "Inicial: 2,5 mg a 5 mg VO/dia; ajustada conforme RNI/INR.",
  preparation: "Comprimidos de 5 mg (frequentemente fracionados).",
  administration: "Via oral, no mesmo horário diariamente.",
  nursingCautions: [
    "Monitorar rigorosamente o RNI (alvo geralmente 2,0 a 3,0).",
    "Observar sinais de sangramento (gengivorragia, hematúria, melena).",
    "Orientar dieta constante em vitamina K (folhas verdes escuras).",
    "Numerosas interações medicamentosas e com alimentos.",
    "Altamente teratogênica; contraindicada na gestação."
  ],
  antidoteOrToxicity: "Vitamina K (fitomenadiona) e Plasma Fresco Congelado ou Complexo Protrombínico.",
  rarity: "Alto Risco"
},
  {
  id: "med-verapamil-geral",
  name: "Verapamil",
  drugClass: "Bloqueador de canais de cálcio (fenilalquilamina)",
  indications: [
    "Angina de peito",
    "Hipertensão arterial",
    "Taquicardias supraventriculares"
  ],
  dosage: "Oral: 80 mg a 120 mg 3x/dia; IV: 5–10 mg bolus lento.",
  preparation: "Comprimidos e ampolas injetáveis.",
  administration: "Via oral ou IV lento (2 minutos) sob monitorização.",
  nursingCautions: [
    "Monitorar frequência cardíaca e PA (risco de bradicardia e bloqueios).",
    "Observar constipação intestinal (efeito colateral comum).",
    "Evitar em pacientes com insuficiência cardíaca severa (efeito inotrópico negativo).",
    "Evitar suco de toranja (grapefruit) que aumenta níveis da droga."
  ],
  antidoteOrToxicity: "Cálcio (Gluconato ou Cloreto) IV; Glucagon; suporte inotrópico.",
  rarity: "Alto Risco"
}

];
