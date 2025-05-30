import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const indexCss = readFileSync('src/index.css', 'utf-8');

const themesDir = 'src/themes';
const themeFiles = readdirSync(themesDir).filter(file =>
  file.startsWith('theme-') && file.endsWith('.css')
);

themeFiles.forEach(file => {
  const themeName = path.basename(file, '.css').replace('theme-', '');
  const themeCss = readFileSync(path.join(themesDir, file), 'utf-8');

  const tmpFilePath = `src/.tmp-combined-${themeName}.css`;

  writeFileSync(tmpFilePath, `${themeCss}\n${indexCss}`);
  
  const outPath = `dist/styles-${themeName}.css`;

  execSync(`npx @tailwindcss/cli -i ${tmpFilePath} -o ${outPath} --minify`);

  unlinkSync(tmpFilePath);

  console.log(`✅ Build: ${outPath}`);
});