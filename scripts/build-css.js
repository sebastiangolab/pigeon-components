import fs from 'fs';
import { execSync } from 'child_process';

const theme = process.env.THEME || 'light';

const themeCss = fs.readFileSync(`src/themes/theme-${theme}.css`, 'utf8');
const baseCss = fs.readFileSync('src/index.css', 'utf8');

const combined = `${themeCss}\n${baseCss}`;

fs.writeFileSync('src/.temp-combined.css', combined);

execSync(`npx @tailwindcss/cli -i src/.temp-combined.css -o dist/styles.css --minify`);

fs.unlinkSync('src/.temp-combined.css');