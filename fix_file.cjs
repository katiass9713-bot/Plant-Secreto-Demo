const fs = require('fs');
const content = fs.readFileSync('src/data/questionBank.ts', 'utf-8');
const lines = content.split('\n');
const newLines = [lines[0], ...lines.slice(351)];
fs.writeFileSync('src/data/questionBank.ts', newLines.join('\n'));
console.log('Done');
