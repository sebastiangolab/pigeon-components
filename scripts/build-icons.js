import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';

const files = await fg('src/icons/**/*.svg');

for (const file of files) {
  const outPath = file.replace(/^src/, 'dist');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.copyFileSync(file, outPath);
}