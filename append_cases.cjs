const fs = require('fs');

let rawCsv = fs.readFileSync('new_cases.csv', 'utf8');

let cases = [];
let currentCase = '';
let inQuotes = false;

for (let i = 0; i < rawCsv.length; i++) {
  const char = rawCsv[i];
  if (char === '"') inQuotes = !inQuotes;
  
  if (char === '\n' && !inQuotes) {
    if (currentCase.trim() !== '') cases.push(currentCase.trim());
    currentCase = '';
  } else if (char === '\n' && inQuotes) {
    currentCase += ' '; 
  } else {
    currentCase += char;
  }
}
if (currentCase.trim() !== '') cases.push(currentCase.trim());

let qb = fs.readFileSync('src/data/questionBank.ts', 'utf8');
let existingLines = qb.split('\n');
let maxId = 0;
for (let line of existingLines) {
  let match = line.match(/^(\d+),/);
  if (match) {
    let id = parseInt(match[1]);
    if (id > maxId) maxId = id;
  }
}

let nextId = maxId + 1;

const processed = cases.map(line => {
  let fixedLine = line.replace(/^\s*(\d+),,/, '$1,');
  fixedLine = fixedLine.replace(/^\s*(\d+),/, ''); // remove old ID
  fixedLine = nextId + ',' + fixedLine; // prepend new ID
  nextId++;
  
  let cols = [];
  let currCol = '';
  let inQ = false;
  for(let i=0; i<fixedLine.length; i++){
    if(fixedLine[i] === '"') inQ = !inQ;
    if(fixedLine[i] === ',' && !inQ){
      cols.push(currCol);
      currCol = '';
    } else {
      currCol += fixedLine[i];
    }
  }
  cols.push(currCol);

  if (cols.length < 12) return fixedLine; 
  
  let especialidade = cols[1];
  let tema = cols[11];
  let enunciado = cols[3];
  
  if (especialidade && (especialidade.toUpperCase().trim() === 'GERAL' || especialidade.toUpperCase().trim() === 'CLÍNICA MÉDICA' || especialidade.toUpperCase().trim() === 'CLINICA MEDICA')) {
      especialidade = 'APS';
  }
  
  const tropicalKeywords = ['chagas', 'toxoplasmose', 'arbovirose', 'dengue', 'zika', 'chikungunya', 'oropouche', 'amarela', 'malária', 'leishmaniose'];
  const isTropical = tropicalKeywords.some(k => 
    (tema && tema.toLowerCase().includes(k)) || 
    (enunciado && enunciado.toLowerCase().includes(k))
  );
  
  if (isTropical) especialidade = 'Doenças Tropicais';
  
  cols[1] = especialidade;
  return cols.join(',');
});

qb = qb.replace(/`;\s*$/, '');
qb += '\n' + processed.join('\n') + '\n`;';
fs.writeFileSync('src/data/questionBank.ts', qb);
console.log('Appended ' + processed.length + ' cases. Next ID will be ' + nextId);
fs.rmSync('new_cases.csv');
