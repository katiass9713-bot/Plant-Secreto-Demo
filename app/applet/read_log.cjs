const fs = require('fs');
try {
  const content = fs.readFileSync('/.gemini/antigravity/brain/de05f459-6837-4d60-8e23-58fe224f663e/.system_generated/logs/overview.txt', 'utf8');
  console.log("File found, size: " + content.length);
  fs.writeFileSync('log_dump.txt', content.substring(0, 500));
} catch (e) {
  console.log("Error: " + e.message);
}
