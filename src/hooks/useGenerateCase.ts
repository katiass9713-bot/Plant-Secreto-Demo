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

  if (filtered.length === 0) {
     const anyUnplayed = (parsedBank || []).filter(row => !playedCases.includes(`bank-${row.ID}`));
     return anyUnplayed.length > 0 ? anyUnplayed : (parsedBank || []);
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
    if (difficulty === 'expert') {
      return rowDiff === 'Expert' || rowDiff === 'Difícil';
    }
    return rowDiff.toLowerCase() === targetDiff.toLowerCase();
  });

  if (diffFiltered.length > 0) return diffFiltered;
  return filtered;
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

  let cleanEnunciado = enunciado.replace(/(\.|\?|\s)*(Conduta|O que o enfermeiro.*|Qual a conduta.*|Assinale a.*)\??$/i, '.');
  cleanEnunciado = cleanEnunciado.replace(/^(?:Paciente|Gestante|Puérpera)?\s*(?:masculino|feminino|de sexo\s+.*?)?\s*,?\s*(\d+)\s*(?:anos|meses|dias)\s*,?/i, '');
  cleanEnunciado = cleanEnunciado.replace(/^(\s*,\s*|\s*-\s*|\s*com\s*)/i, '').trim();
  if (cleanEnunciado) cleanEnunciado = cleanEnunciado.charAt(0).toUpperCase() + cleanEnunciado.slice(1);

  const clinicalHistory = `Motivo do Atendimento / HDA: ${cleanEnunciado}`;

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

  if (/\b(infarto|iam|sca|supra de st|síndrome coronariana)\b/i.test(textToAnalyze)) {
    physicalExam = "Paciente hipoativo, apresentando fácies de dor (algidez) e referindo precordialgia em aperto contínua. Presença de sudorese fria e palidez cutânea.";
    nursingConduct = `• AVALIAÇÃO IMEDIATA: Executar ECG de 12 derivações em até 10 minutos.\n• Puncionar 2 acessos venosos periféricos de grosso calibre.`;
    medicationDosage = `• AAS: 160 a 300 mg (macerar).\n• Clopidogrel: Dose de ataque conforme ICP.`;
  }

  return {
    id: `bank-${row.ID}`,
    specialty,
    difficulty,
    patient: { name, age, gender, occupation },
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
      const sanitizedId = userId?.toLowerCase() || '';
      const isDemoUser = sanitizedId.includes('demo') || sanitizedId === 'alunodemo@plantao.com';
      const useBankCycle = isDemoUser || playedCases.length % 3 !== 0;
      const bankCases = getBankCases(specialty, difficulty, playedCases);
      const apiKey = process.env.GEMINI_API_KEY;
      
      const useBank = (useBankCycle || !apiKey) && bankCases.length > 0;

      if (useBank) {
        const randomCase = bankCases[Math.floor(Math.random() * bankCases.length)];
        setLoading(false);
        return mapCsvToClinicalCase(randomCase, specialty, difficulty);
      }

      if (!apiKey) throw new Error("Chave da API do Gemini não configurada.");
      
      const ai = new GoogleGenAI({ apiKey });
      const randomSeed = Math.floor(Math.random() * 1000000);
      
      const prompt = `
        Você é a Professora Kátia, uma enfermeira preceptora rigorosa mas didática.
        Crie um caso clínico de ${specialty} com dificuldade ${difficulty}.
        Seed: ${randomSeed}. Retorne APENAS JSON.
        Estrutura: { id, specialty, difficulty, patient: { name, age, gender, occupation }, clinicalHistory, physicalExam, vitalSigns: { bp, hr, rr, temp, spo2 }, options: [{ id, text, isCorrect, explanation }], nursingConduct, medicationDosage, treatment }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
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
      caseData.options = (caseData.options || []).map(opt => ({
        ...opt,
        text: cleanText(opt.text),
        explanation: cleanText(opt.explanation)
      }));

      setLoading(false);
      return caseData;
    } catch (error) {
      console.error("Error generating case:", error);
      const bankCases = getBankCases(specialty, difficulty, playedCases);
      if (bankCases && bankCases.length > 0) {
        const randomCase = bankCases[Math.floor(Math.random() * bankCases.length)];
        setLoading(false);
        return mapCsvToClinicalCase(randomCase, specialty, difficulty);
      }
      setLoading(false);
      return null;
    }
  };

  const saveAnswer = async (caseId: string, userId: string, optionId: string, correct: boolean) => {
    console.log(`Saved answer: Case ${caseId}, User ${userId}, Option ${optionId}, Correct: ${correct}`);
  };

  return { generate, saveAnswer, loading };
}
