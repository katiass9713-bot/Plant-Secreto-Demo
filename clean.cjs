const fs = require('fs');
let content = fs.readFileSync('src/data/questionBank.ts', 'utf8');
// Remove "LineNumber: " patterns at the start of each line
// We need to match "1: ", "2: ", etc.
content = content.replace(/^\d+: /gm, '');
fs.writeFileSync('src/data/questionBank.ts', content);
