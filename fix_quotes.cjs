const fs = require('fs');
let content = fs.readFileSync('src/data/questionBank.ts', 'utf8');
content = content.replace(/[“”]/g, '"');
fs.writeFileSync('src/data/questionBank.ts', content);
console.log('Quotes fixed');
