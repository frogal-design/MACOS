import { execSync } from 'child_process';
import fs from 'fs';

console.log("=== Running Security Clean Verification ===");

// Check src files for prohibited imports
const srcFiles = execSync('find src -type f').toString().split('\n').filter(Boolean);
let errors = 0;

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.match(/import.*from\s+['"](@google\/genai|express|dotenv)['"]/)) {
    console.error(`❌ Error: Forbidden import found in ${file}`);
    errors++;
  }
}

// Check build output for GEMINI_API_KEY leaks
if (fs.existsSync('dist')) {
  const distFiles = execSync('find dist -type f').toString().split('\n').filter(Boolean);
  for (const file of distFiles) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('GEMINI_API_KEY')) {
      console.error(`❌ Error: Leak found in dist build asset ${file}`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log("✅ All security checks passed successfully!");
  process.exit(0);
} else {
  console.error(`❌ Verification failed with ${errors} error(s).`);
  process.exit(1);
}
