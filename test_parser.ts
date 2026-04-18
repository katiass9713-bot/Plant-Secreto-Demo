import { parseCSV } from './src/lib/csvParser';
import { csvData } from './src/data/questionBank';

let parsedBank: any[] | null = null;

function getBankCases(specialty: string, difficulty: string) {
  if (!parsedBank) {
    parsedBank = parseCSV(csvData);
  }
  
  const diffMap: Record<string, string> = {
    'fácil': 'Fácil',
    'médio': 'Médio',
    'difícil': 'Difícil',
    'expert': 'Difícil'
  };
  const targetDiff = diffMap[difficulty] || 'Médio';
  const specLower = specialty.toLowerCase();
  
  return parsedBank.filter(row => {
    const rowDiff = (row.nivel || '').trim();
    if (rowDiff !== targetDiff && !(difficulty === 'expert' && rowDiff === 'Difícil')) return false;

    const area = (row.area || '').toLowerCase();
    const subarea = (row.subarea || '').toLowerCase();
    const tema = (row.tema || '').toLowerCase();

    if (specLower === 'urgência e emergência' || specLower === 'emergência') {
      return area.includes('emergência') || tema.includes('emergência');
    }
    if (specLower === 'uti adulto') {
      return area.includes('uti') || tema.includes('uti');
    }
    if (specLower === 'obstetrícia/saúde da mulher' || specLower === 'saúde da mulher') {
      return area.includes('mulher') || tema.includes('mulher') || area.includes('obstetrícia') || tema.includes('obstetrícia');
    }
    if (specLower === 'aps') {
      return area.includes('aps') || tema.includes('aps') || area.includes('atenção primária');
    }
    if (specLower === 'feridas/estomaterapia') {
      return area.includes('feridas') || tema.includes('feridas') || area.includes('estomaterapia');
    }
    
    return area.includes(specLower) || subarea.includes(specLower) || tema.includes(specLower);
  });
}

console.log(getBankCases('Neurologia', 'médio').length);
