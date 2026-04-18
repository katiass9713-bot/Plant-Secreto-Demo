import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import type { ClinicalCase } from '@/data/mockCases';
import type { Specialty, Difficulty } from './useGameState';
import { parseCSV } from '@/lib/csvParser';
import { csvData } from '@/data/questionBank';

// Cache the parsed CSV
let parsedBank: any[] | null = null;

function getBankCases(specialty: Specialty, difficulty: Difficulty, playedCases: string[] = []) {
  if (!parsedBank) {
    parsedBank = parseCSV(csvData);
  }
  
  const specLower = specialty.toLowerCase();
  
  let filtered = parsedBank.filter(row => {
    const caseId = `bank-${row.ID}`;
    if (playedCases.includes(caseId)) return false;

    const especialidade = (row.Especialidade || '').toLowerCase();
    const resumo = (row.Resumo || '').toLowerCase();

    if (specLower === 'urgência e emergência' || specLower === 'emergência') {
      return especialidade.includes('emergência') || especialidade.includes('urgência');
    }
    if (specLower === 'uti adulto') {
      return especialidade.includes('uti');
    }
    if (specLower === 'saúde da mulher') {
      return especialidade.includes('mulher') || especialidade.includes('obstetrícia');
    }
    if (specLower === 'aps') {
      return especialidade.includes('aps') || especialidade.includes('atenção primária');
    }
    if (specLower === 'doenças tropicais') {
      return especialidade === 'doenças tropicais' || especialidade.includes('tropical') || resumo.includes('tropical') || resumo.includes('tuberculose') || resumo.includes('hanseníase') || resumo.includes('dengue') || resumo.includes('zika') || resumo.includes('chikungunya') || resumo.includes('febre amarela') || resumo.includes('oropouche') || resumo.includes('chagas') || resumo.includes('toxoplasmose') || resumo.includes('malária') || resumo.includes('leishmaniose');
    }
    if (specLower === 'feridas/estomaterapia') {
      return especialidade.includes('feridas') || resumo.includes('feridas') || especialidade.includes('estomaterapia');
    }
    
    return especialidade.includes(specLower) || resumo.includes(specLower);
  });

  // Se não houver mais casos disponíveis para a especialidade, retornar vazio
  if (filtered.length === 0) {
    return [];
  }

  const diffMap: Record<string, string> = {
    'fácil': 'Fácil',
    'médio': 'Médio',
    'difícil': 'Difícil',
    'expert': 'Expert'
  };
  const targetDiff = diffMap[difficulty] || 'Médio';
  
  const diffFiltered = filtered.filter(row => {
    const rowDiff = (row.Dificuldade || '').trim();
    // Expert no banco pode ser "Expert" ou "Difícil"
    if (difficulty === 'expert') {
      return rowDiff === 'Expert' || rowDiff === 'Difícil';
    }
    return rowDiff.toLowerCase() === targetDiff.toLowerCase();
  });

  // Se tivermos casos para a dificuldade específica, retornamos eles.
  // Caso contrário, retornamos os casos da especialidade idependente da dificuldade (melhor que dar erro de demanda).
  return diffFiltered.length > 0 ? diffFiltered : filtered;
}

function mapCsvToClinicalCase(row: any, specialty: string, difficulty: string): ClinicalCase {
  const options = [];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const correctLetter = (row['Resposta Correta'] || '').trim().toUpperCase();
  const enunciado = row.Enunciado || '';

  for (const letter of letters) {
    const text = row[`Alternativa ${letter}`];
    if (text && text.trim() !== '') {
      const isCorrect = letter === correctLetter;
      // Expande a justificativa das alternativas para dar um feedback bem mais rico
      let explanationText = isCorrect 
        ? `${(row.justificativa || '').trim()}`
        : `A conduta "${text}" não é a mais apropriada para este cenário. Focar na intervenção que prioriza a fisiopatologia principal do agravo.`;
        
      options.push({
        id: letter,
        text: text.trim(),
        isCorrect,
        explanation: explanationText
      });
    }
  }

  const shuffledOptions = options.sort(() => Math.random() - 0.5).map((opt, index) => ({
    ...opt,
    id: letters[index]
  }));
  
  // Extração inteligente de sinais vitais e dados do enunciado
  const getMatch = (regex: RegExp, fallback: any, parser: any = (x: any) => x) => {
    const m = enunciado.match(regex);
    return m ? parser(m[1]) : fallback;
  };

  const bp = getMatch(/PA:?\s*(\d{2,3}[\/x]\d{2,3})/i, "130/85", (x: string) => x.replace('x', '/'));
  const hr = getMatch(/FC:?\s*(\d+)/i, Math.floor(Math.random() * 40) + 60, parseInt);
  const rr = getMatch(/FR:?\s*(\d+)/i, Math.floor(Math.random() * 8) + 14, parseInt);
  const spo2 = getMatch(/SpO2:?\s*(\d+)/i, Math.floor(Math.random() * 5) + 94, parseInt);
  
  const tempMatch = enunciado.match(/(temperatura|Tax|T):?\s*(\d{2}[,.]\d)/i) || enunciado.match(/(\d{2}[,.]\d)°?C/i);
  const temp = tempMatch ? parseFloat(tempMatch[tempMatch.length - 1].replace(',', '.')) : 36.5;

  const ageMatch = enunciado.match(/(\d+)\s*(anos|meses|dias)/i);
  let age = ageMatch ? parseInt(ageMatch[1]) : Math.floor(Math.random() * 50) + 20;
  if (ageMatch && ageMatch[2].toLowerCase() === 'meses') age = Math.max(1, Math.floor(age / 12));

  const isFemale = /feminina|gestante|mulher|puérpera/i.test(enunciado);
  const isMale = /masculino|homem/i.test(enunciado);
  const gender = isFemale ? "F" : isMale ? "M" : (Math.random() > 0.5 ? "M" : "F");
  
  const femaleNames = ["Ana Maria", "Juliana", "Fernanda Silva", "Camila", "Letícia", "Beatriz Costa", "Mariana", "Aline", "Bruna", "Renata", "Carla Dias", "Vanessa Souza", "Lúcia", "Marta", "Cláudia"];
  const maleNames = ["João Pedro", "Lucas Silva", "Mateus", "Rafael", "Rodrigo Costa", "Carlos Henrique", "Fernando", "Diego", "Bruno", "Marcelo Souza", "Thiago", "Fábio", "Antônio", "Marcos"];
  const occupations = ["Professor(a)", "Comerciante", "Motorista", "Aposentado(a)", "Estudante", "Enfermeiro(a)", "Autônomo(a)", "Do lar", "Atendente", "Contador(a)", "Técnico(a)", "Vendedor(a)"];

  const randomChoice = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  const name = randomChoice(gender === "F" ? femaleNames : maleNames);
  const occupation = randomChoice(occupations);

  // Format HDA (clinicalHistory)
  let cleanEnunciado = enunciado.replace(/(\.|\?|\s)*(Conduta|O que o enfermeiro.*|Qual a conduta.*|Assinale a.*)\??$/i, '.');
  cleanEnunciado = cleanEnunciado.replace(/^(?:Paciente|Gestante|Puérpera)?\s*(?:masculino|feminino|de sexo\s+.*?)?\s*,?\s*(\d+)\s*(?:anos|meses|dias)\s*,?/i, '');
  cleanEnunciado = cleanEnunciado.replace(/^(\s*,\s*|\s*-\s*|\s*com\s*)/i, '').trim();
  if (cleanEnunciado) {
    cleanEnunciado = cleanEnunciado.charAt(0).toUpperCase() + cleanEnunciado.slice(1);
  }

  const clinicalHistory = `Motivo do Atendimento / HDA: ${cleanEnunciado}`;

  // Categorização avançada do quadro para geração de parâmetros específicos
  const correctOptionText = options.find(o => o.isCorrect)?.text || '';
  const textToAnalyze = `${enunciado} ${row.tema || ''} ${correctOptionText} ${row.justificativa || ''}`.toLowerCase();
  
  const o_a = gender === 'F' ? 'a' : 'o';
  let physicalExam = `Paciente em bom estado geral, lúcido, orientado no tempo e espaço (LOTE). Eupneico em ar ambiente, acianótic${o_a}, anictéric${o_a}. Ausculta cardíaca com ritmo regular em 2 tempos, bulhas normofonéticas, sem sopros. Ausculta pulmonar apresentando murmúrio vesicular universalmente audível, sem ruídos adventícios. Abdome flácido, ruídos hidroaéreos presentes. Perfusão capilar periférica preservada (< 2 seg).`;
  let nursingConduct = `• Aferição e monitorização contínua dos sinais vitais clínicos.
• Puncionar acesso venoso periférico para administração de terapia medicamentosa prescrita.
• Coleta de exames laboratoriais de rotina ou conforme protocolo institucional.
• Posicionamento no leito focado no conforto e na segurança d${o_a} paciente.`;
  let medicationDosage = "• Analgesia, antitérmicos e sintomáticos conforme padrão da instituição.\n• Ajuste de doses baseado no peso atual e avaliar função renal/hepática para drogas de excreção sistêmica.";
  let treatment = `• Observação clínica contínua na unidade.
• Tratamento da doença de base conforme conduta médica estabelecida.
• Evolução da enfermagem: manter vigilância estrita para eventuais sinais de deterioração hemodinâmica.`;

  // --- REGRAS ESPECÍFICAS DE PROTOCOLO ---
  if (/\b(infarto|iam|sca|supra de st|síndrome coronariana|coronariana)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente hipoativo, apresentando fácies de dor (algidez) e referindo precordialgia em aperto contínua. Presença de sudorese fria (diaforese) e palidez cutânea. Ritmo cardíaco regular em 2T, B4 pode estar presente. Pulsos radiais finos e taquicárdicos. Tempo de enchimento capilar alentecido (> 3s).";
    nursingConduct = `• AVALIAÇÃO IMEDIATA: Executar ECG de 12 derivações em até 10 minutos após a admissão.
• Puncionar 2 acessos venosos periféricos de grosso calibre (gelco 18G ou 20G).
• Monitorização multiparamétrica de nível crítico: ECG contínuo, Oximetria, PANI.
• Coletar amostras de sangue para marcadores de necrose miocárdica (Troponina I/T, CK-MB).
• Manter carrinho de emergência e desfibrilador ao lado do leito.`;
    medicationDosage = `• AAS (Ácido Acetilsalicílico): 160 a 300 mg (Macerar e administrar via oral imediatamente).
• Clopidogrel: Dose de ataque de 300 mg ou 600 mg conforme ICP primária.
• Nitrato SL (Isordil 5mg): para alívio da dor torácica se Pressão Sistólica > 90 mmHg.
• Morfina: 2 a 4 mg Endovenoso para dor refratária (usar com extrema cautela, evitar se IAM de VD).`;
    treatment = `• Acionar acrônimo de emergência MONA-B (Morfina, O2, Nitrato, AAS, Betabloqueador).
• Acionar equipe de Hemodinâmica para Angioplastia Primária imediata (Alvo porta-balão < 90 min).
• Caso a unidade não disponha de hemodinâmica, preparar Trombólise com Alteplase IV (Alvo porta-agulha < 30 min).`;
  
  } else if (/\b(avc|ave|isquemia cerebral|isquêmico|hemiparesia|afasia)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente apresentando alteração aguda do nível de consciência e déficit neurológico focal isolado. Observa-se hemiparesia ou hemiplegia, paralisia facial central e desvio de rima labial. Presença de afasia de expressão ou compreensão. NIHSS elevado. Pupilas isocóricas fotorreagentes.";
    nursingConduct = `• Acionar Imediatamente o Código AVC (Prioridade Máxima).
• Evitar a redução brusca da Pressão Arterial (permitir picos hipertensivos permissivos para perfusão cerebral, dentro do protocolo).
• Cabeceira do leito deve ser mantida inicialmente entre 0° a 15°.
• Glicemia Capilar stat (hipoglicemia severa simula um déficit de AVC).
• Agilizar transporte para Tomografia de Crânio s/ contraste (Alvo porta-TC < 25 min).`;
    medicationDosage = `• Se elegível para Trombólise IV (janela < 4,5 horas): Infusão de Alteplase (rt-PA) 0,9 mg/kg.
     - 10% da dose administrada em bolus (1 min).
     - 90% restantes na bomba de infusão contínua em 60 min.
• Anti-hipertensivos IV (Labetalol / Nitroprussiato) apenas se PA > 185/110 mmHg.`;
    treatment = `• Aplicar Critérios de Inclusão e Exclusão estritos para uso de Trombolítico (risco de hemorragia).
• Monitoramento fonoaudiológico: Suspender Dieta Zero (risco altíssimo de broncoaspiração pneumônica).
• Monitoramento neurológico (Escala NIHSS e pupilas) a cada 15 min durante infusão de rt-PA.`;
  
  } else if (/\b(sepse|choque séptico|infecção generalizada)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente toxêmico, letárgico, evoluindo com rebaixamento do sensório. Apresenta taquicardia persistente e taquipneia compensatória. As extremidades podem apresentar-se frias com cianose mosqueada (choque frio) ou quentes (choque quente). Tempo de enchimento capilar superior a 4s, sugerindo hipoperfusão sistêmica. Oligúria clínica.";
    nursingConduct = `• Acionar Protocolo Institucional de Sepse (Pacote da 1ª hora).
• Inserir 2 acessos venosos periféricos de grande calibre.
• Coletar imediatamente Hemoculturas ANTES da administração da primeira dose de antibiótico.
• Inserção de Sonda Vesical de Demora para controle do débito urinário (< 0.5 mL/kg/h).`;
    medicationDosage = `• Ressuscitação Volêmica: Cristaloides (Ringer Lactato ou SF 0,9%) em bolus de 30 mL/kg nas áreas de hipotensão aguda.
• Antibioticoterapia: Fazer amplo espectro intravenoso (Ex: Meropenem/Piperacilina-Tazobactam) na 1ª hora.
• Vasopressor: Iniciar Noradrenalina IV se hipotensão refratária a volume (para manter PAM ≥ 65 mmHg).`;
    treatment = `• Controle minucioso e busca pelo controle do provável foco infeccioso subjacente.
• Controle seriado laboratorial de Ácido Lático (Lactato).
• Instituir ventilação mecânica se houver evolução para insuficiência respiratória exaustiva.`;

  } else if (/\b(asma|dpoc|broncoespasmo|bronquiolite)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente ansioso, taquipneico, com dispneia progressiva. Uso evidente de musculatura acessória (tiragem intercostal, fúrcula e batimento de aleta). À ausculta pulmonar, notam-se sibilos expiratórios difusos bilaterais. Expiração laboriosa e bastante prolongada. Em quadro de exaustão franca, pode haver tórax silente (ausência de entrada de ar).";
    nursingConduct = `• Posicionar em suporte deitado vertical (Fowler 90° - posição ortopneica) para melhora da mecânica torácica.
• Monitorização contínua de Oximetria de pulso (SpO2).
• Instalar interface de O2 complementar sob meta: 93-95% na asma ou 88-92% no restritivo de DPOC.
• Manter bandeja de intubação pronta para Sequência Rápida (deterioração clínica é repentina).`;
    medicationDosage = `• Broncodilatador de Resgate (Beta-2 SABA): Salbutamol (Aerolin) via pMDI ou nebulização a cada 20min.
• Adjuvância com Anticolinérgico: Brometo de Ipratrópio contínuo nos ciclos graves.
• Corticosteroides Sistêmicos: Prednisona oral ou Hidrocortisona intravenosa administrada de forma imediata.`;
    treatment = `• Promover relaxamento da musculatura lisa e agir no controle inflamatório global da árvore brônquica.
• Considerar administração de Sulfato de Magnésio EV (2g) para tentar evitar instabilidade fatal.
• A intubação (IOT) é manobra de altíssimo risco pela auto-PEEP e deve ser a última barreira.`;

  } else if (/\b(convulsão|crise convulsiva|epilepsia|status epiléptico)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente na vigência de fase Ictal apresentando abalos ou espasmos tônico-clônicos difusos, desvio de olhar conjugado e evidente sialorreia. Pode cursar com liberação esfincteriana. Na fase Pós-Ictal apresenta-se prostrado, com letargia intensa, hiporreflexia e rebaixamento cognitivo profundo prolongado.";
    nursingConduct = `• Garantir a segurança do leito e paciente: abaixar prostrado, acolchoar grades, NÃO colocar dedos/objetos na boca.
• Lateralizar o paciente (decúbito lateral) para drenagem da saliva e impedir broncoaspiração de conteúdo gástrico.
• Fornecer suplementação oxigenada rápida e verificar via aérea pérvia e segura.
• Checar imediatamente Nível Glicêmico capilar, descartando crise secundária a uma hipoglicemia severa.`;
    medicationDosage = `• Crise ativa / Fase 1: Diazepam 10 mg via intravenosa lenta (ou Midazolam IM se acesso inviabilizado).
• Prevenção / Ataque: Fenitoína (Hidantalização) na carga de 20 mg/kg via Intravenosa.
  - Diluição exclusiva em SF 0,9% para não induzir precipitação do cristal no equipo.
  - Fluxo menor a 50 mg/min, caso contrário há alto risco de bradicardia e bloqueio no ritmo do coração.`;
    treatment = `• Marcação cronometrada do episódio agudo; convulsões ultrapassando os 5 minutos indicam Status Epilepticus refratário, com iminente hipóxia cerebral letal.`;

  } else if (/\b(pré-eclâmpsia|eclâmpsia|hellp)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente obstétrica. Apresenta grave desvio nos níveis pressóricos basais (PA sistólica > 160 e/ou diastólica > 110 mmHg). Exame físico acusa evidente edema difuso de membros inferiores e face, queixas de uma cefaleia de aspecto holocraniano, presença de fosfenos/escotomas visuais, hiperreflexia patelar marcante e sintomatologia de dor em quadrante abdominal superior (hipocôndrio direito).";
    nursingConduct = `• Ambiente deve ser mantido totalmente silencioso e sob penumbra (controle absoluto de estímulos externos excitomotores).
• Decúbito Lateral Esquerdo obrigatório (promove descompressão venosa da VCI).
• Controle estrito hídrico com instalação urgente de Sonda Vesical de Demora para aferir injúria renal associada.`;
    medicationDosage = `• Anticonvulsivante Padrão-Ouro: Sulfato de Magnésio (MgSO4) em dose de ataque (4g IV em 20min) seguido de manutenção ininterrupta para não eclodir uma crise eclâmptica.
• Medicações Anti-hipertensivas sistêmicas na ocorrência da crise: Hidralazina (IV) ou formulação de Nifedipina rápida, regimental a cada 20min no descontrole.`;
    treatment = `• Avaliação contínua dos marcadores de intoxicação pelo MgSO4 endovenoso (Frequência Respiratória rebaixando abaixo de 16, debilidade do debito urinário em hora, ou perda do reflexo patelar em articulações). Ter ampola de Gluconato de Cálcio 10% nas mãos para reversão cardíaca se preciso.
• Determinar viabilidade da condução ao parto final (único tratamento real de interrupção da DHG).`;

  } else if (/\b(pé diabético|úlcera por pressão|lesão por pressão|ferida operatória)\b/i.test(textToAnalyze)) {
    physicalExam = "Apresenta evidente perda na solução de continuidade tissular local. Ferida com variável percentual de tecido inviável aderido (esfacelo umedecido ou tecido de necrose seca / de coagulação negrejada). Produção de conteúdo exsudativo em moderada ou franca quantidade, acompanhado de odores desagradáveis que levantam forte suspeição bacteriana. O paciente diabético costuma refletir zero estímulo álgico ao teste neurológico do monofilamento no local da úlcera (neuropatia).";
    nursingConduct = `• Inspeção aprofundada da lesão pautada no mnemônico TIME (Tecidos inviáveis, Infecção, Manutenção da umidade, e Epitelização de bordas estreitas).
• Avaliação pulsátil e indicação de monitoramento Doppler (ITB) prévio à indicação técnica cirúrgica do leito para expurgar Doença Arterial Crônica Obstrutiva de grande perigo em desbridamentos isquêmicos.
• Higienização local através de amplo fluxo de soluções de baixo impacto como jatos ou gotas de Solução Fisiológica sob leve mornez.`;
    medicationDosage = `• Introdução guiada de antibioticoterapia no suspeito de quadros dérmicos infecciosos invasivos (tais quais Ampicilina-Sulbactam ou clindamicina - com direcionação médica).
• Terapia adjuvante via cobertas: placas absorventes de alginato, filmes com prata em presença microbiológica. Ressecamentos recebem papaína ou hidrogéis com alginato.`;
    treatment = `• Foco crucial em tirar total sobrecarga das proeminências do local sob risco através de mudança angular de imobilização intermitente na cadeira e leitos hospitalares, além de uso de órteses moldáveis para aliviar a carga corporal da lesão em pés diabéticos acometidos.`;

  } else if (/\b(hipoglicemia|neuroglicopenia)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente exibe sintomas autonômicos precoces como sudorese excessiva corporal por completo e pele sensivelmente fria e pegajosa, seguida de tremor sutil nas extremidades com aceleração cardíaca compensatória visível ao palpar pulso. Progredindo em instantes ao decréscimo sensorial profundo cognitivo em letargia (torpor/confusão acentuada de base neuroglicopênica).";
    nursingConduct = `• Puncionar imediatamente acesso vascular na borda da ponta digital periférica para HGT rápido.
• Afastar dietas ou sucos se o estado rebaixado estiver presente pelo gigantesco fator de comprometimento broncopulmonar por aspirações secundárias na letargia.
• Obtenção premente de cateter venoso desobstruído para provável via de salvamento em bolo.`;
    medicationDosage = `• Sujeito Plenamente Desperto (colaborativo): Ingesta oral e deglutição de carboidratos com índice de absorção elevado como soluções líquidas doces (água e açúcar de 15g, tabletes rápidos).
• Sujeito Hipoativo/Inconsciente: Ampolas IV diretas bolus Glicose Hipertônica (Concentrações como Dextrose de 50%, no total 40 ml venoso).
• Situação dramática de veias colabadas: Glucagon Intramuscular emergencialmente ao acesso.`;
    treatment = `• Repetição rigorosa do protocolo capilar a cada quinze minutos depois de revertida a sintomatologia (regra estipulada em Diretrizes dos 15/15) até alvo seguro superior aos 70mg/dl glicêmicos marginais.
• Reposição via amido/complexos subsequente garantidora contra o pico secundário em decaimento agudo de rebote insulina/alimento.`;
  }

  // Final assembly
  return {
    id: `bank-${row.id}`,
    specialty,
    difficulty,
    patient: {
      name,
      age,
      gender,
      occupation
    },
    clinicalHistory,
    physicalExam,
    vitalSigns: { bp, hr, rr, temp, spo2 },
    options: shuffledOptions,
    nursingConduct,
    medicationDosage,
    treatment
  };
}

export function useGenerateCase() {
  const [loading, setLoading] = useState(false);

  const generate = async (specialty: Specialty, difficulty: Difficulty, userId?: string, playedCases: string[] = []): Promise<ClinicalCase | null> => {
    setLoading(true);
    try {
      // Mescla solicitada: 1º IA, 2º banco, 3º banco... (repete a cada 3)
      const useBankCycle = playedCases.length % 3 !== 0;
      const bankCases = getBankCases(specialty, difficulty, playedCases);
      // Se não for ciclo do banco ou não tiver casos no banco, chame a IA.
      // Se a IA não tiver chave, forçaremos o banco depois.
      const useBank = useBankCycle && bankCases.length > 0;
      const apiKey = process.env.GEMINI_API_KEY;

      if (useBank) {
        const randomCase = bankCases[Math.floor(Math.random() * bankCases.length)];
        
        // Retorna diretamente o dado formatado para economizar tempo
        setLoading(false);
        return mapCsvToClinicalCase(randomCase, specialty, difficulty);
      }

      if (!apiKey) {
        // If no API key, force use bank if available
        if (bankCases.length > 0) {
          const randomCase = bankCases[Math.floor(Math.random() * bankCases.length)];
          setLoading(false);
          return mapCsvToClinicalCase(randomCase, specialty, difficulty);
        }
        throw new Error("Chave da API do Gemini não configurada e não há casos no banco para esta especialidade/nível.");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const randomSeed = Math.floor(Math.random() * 1000000);
      
      const prompt = `
        Você é a Professora Kátia, uma enfermeira preceptora rigorosa mas didática, focada no ensino de estudantes de enfermagem.
        Crie um caso clínico INÉDITO, ALTAMENTE DIVERSIFICADO e ÚNICO de ${specialty} com dificuldade ${difficulty}.
        
        INSTRUÇÕES PARA VARIEDADE EXTREMA (Seed de aleatoriedade: ${randomSeed}):
        - VOCÊ DEVE OBRIGATORIAMENTE usar o número da seed (${randomSeed}) para determinar o tópico, doença e todo o cenário! Isso é para garantir 100% de originalidade a cada chamada.
        - OBRIGATÓRIO: Escolha um diagnóstico, complicação ou doença RARA ou MENOS COMUM dentro da especialidade. FUJA DOS CLICHÊS (ex: se for cardiologia, não faça IAM clássico; se for pediatria, não faça asma comum).
        - OBRIGATÓRIO: Varie drasticamente a idade, o gênero, a profissão, o histórico familiar e as comorbidades do paciente de acordo com a Seed.
        - OBRIGATÓRIO: O cenário do atendimento deve ser diferente (ex: UBS, UPA, UTI, Enfermaria, Home Care, resgate na rua, etc).
        - O objetivo é testar o aluno em uma ampla gama de situações possíveis, forçando o raciocínio clínico fora da caixa.
        
        REGRAS DE FORMATAÇÃO (MUITO IMPORTANTE):
        1. NÃO USE asteriscos (**) para negrito ou itálico em NENHUMA parte do texto.
        2. A História Clínica e o Exame Físico devem ser escritos em TEXTO CORRIDO (parágrafos), SEM tópicos.
        3. Apenas a resolução (explicação, conduta, posologia e tratamento) deve ser em tópicos curtos e diretos (use •).
        4. Na explicação da resposta correta, é OBRIGATÓRIO incluir a FISIOPATOLOGIA do caso.
        5. Seja direto e objetivo.
        
        Retorne APENAS um JSON válido com a seguinte estrutura:
        {
          "id": "gen-${Date.now()}",
          "specialty": "${specialty}",
          "difficulty": "${difficulty}",
          "patient": { "name": "Nome", "age": numero, "gender": "M/F", "occupation": "Profissão" },
          "clinicalHistory": "História da moléstia atual em texto corrido (sem tópicos)",
          "physicalExam": "Achados do exame físico em texto corrido (sem tópicos)",
          "vitalSigns": { "bp": "120/80", "hr": 80, "rr": 16, "temp": 36.5, "spo2": 98 },
          "options": [
            { "id": "A", "text": "Conduta A", "isCorrect": false, "explanation": "Explicação em tópicos (use •)" },
            { "id": "B", "text": "Conduta B", "isCorrect": true, "explanation": "Explicação em tópicos (use •) incluindo a fisiopatologia" },
            { "id": "C", "text": "Conduta C", "isCorrect": false, "explanation": "Explicação em tópicos (use •)" },
            { "id": "D", "text": "Conduta D", "isCorrect": false, "explanation": "Explicação em tópicos (use •)" }
          ],
          "nursingConduct": "Conduta de enfermagem detalhada em tópicos (use •)",
          "medicationDosage": "Posologia de medicamentos em tópicos (use •)",
          "treatment": "Tratamento geral e cuidados em tópicos (use •)"
        }
        Embaralhe a posição da resposta correta. A pergunta deve ser sobre a conduta de enfermagem adequada ou avaliação do quadro.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });

      const text = response.text;
      if (!text) throw new Error("No response from Gemini");
      
      const caseData = JSON.parse(text) as ClinicalCase;
      
      const cleanText = (str: string) => str ? str.replace(/\*\*/g, '').replace(/\*/g, '') : str;
      
      caseData.clinicalHistory = cleanText(caseData.clinicalHistory);
      caseData.physicalExam = cleanText(caseData.physicalExam);
      caseData.nursingConduct = cleanText(caseData.nursingConduct);
      caseData.medicationDosage = cleanText(caseData.medicationDosage);
      caseData.treatment = cleanText(caseData.treatment);
      caseData.options = caseData.options.map(opt => ({
        ...opt,
        text: cleanText(opt.text),
        explanation: cleanText(opt.explanation)
      }));

      setLoading(false);
      return caseData;
    } catch (error) {
      console.error("Error generating case:", error);
      
      // Fallback to bank if Gemini fails
      const bankCases = getBankCases(specialty, difficulty);
      if (bankCases && bankCases.length > 0) {
        console.log("Gemini failed, falling back to question bank.");
        const randomCase = bankCases[Math.floor(Math.random() * bankCases.length)];
        setLoading(false);
        return mapCsvToClinicalCase(randomCase, specialty, difficulty);
      }

      alert("O sistema está com alta demanda no momento. Por favor, tente novamente em alguns instantes.");
      setLoading(false);
      return null;
    }
  };

  const saveAnswer = async (caseId: string, userId: string, optionId: string, correct: boolean) => {
    console.log(`Saved answer: Case ${caseId}, User ${userId}, Option ${optionId}, Correct: ${correct}`);
  };

  return { generate, saveAnswer, loading };
}
