import fs from 'fs';
import path from 'path';

function checkDirectory(dir, forbiddenRegexes) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkDirectory(fullPath, forbiddenRegexes);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const { regex, label } of forbiddenRegexes) {
        if (regex.test(content)) {
          console.error(`Forbidden pattern "${label}" found in ${fullPath}`);
          process.exit(1);
        }
      }
    }
  }
}

const forbidden = [
  { regex: /import\s+.*['"]@google\/genai['"]/, label: 'import @google/genai' },
  { regex: /import\s+.*['"]express['"]/, label: 'import express' },
  { regex: /import\s+.*['"]dotenv['"]/, label: 'import dotenv' },
  { regex: /process\.env\.GEMINI_API_KEY/, label: 'process.env.GEMINI_API_KEY' },
];

console.log('Scanning src/ for forbidden package imports & process.env.GEMINI_API_KEY...');
checkDirectory(path.resolve('src'), forbidden);
console.log('No forbidden imports or env references found in src/. Verification passed.');
