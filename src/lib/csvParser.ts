export function parseCSV(csvText: string) {
  const lines = [];
  let currentLine = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++; // Skip the escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentLine.push(currentField);
      currentField = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // Skip \n in \r\n
      }
      currentLine.push(currentField);
      lines.push(currentLine);
      currentLine = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  if (currentField !== '' || currentLine.length > 0) {
    currentLine.push(currentField);
    lines.push(currentLine);
  }

  if (lines.length === 0) return [];

  const headers = lines[0].map(h => h.trim());
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.length === 1 && line[0].trim() === '') continue; // Skip empty lines
    
    const obj: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = line[j] ? line[j].trim() : '';
    }
    result.push(obj);
  }

  return result;
}
