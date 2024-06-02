import virtual from '@rollup/plugin-virtual';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

let bannerText = `
// ==UserScript==
// @name         ${pkg.name}
// @version      ${pkg.version}
// @description  ${pkg.description}
// @license      ${pkg.license}
// @author       ${pkg.author}
// @namespace    https://github.com/murphyne
// @match        http://*/*
// @updateUrl    https://github.com/murphyne/userscript-repo-template/releases/latest/download/script.meta.js
// @downloadUrl  https://github.com/murphyne/userscript-repo-template/releases/latest/download/script.user.js
// @grant        none
// ==/UserScript==
`;

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/script.user.js',
      format: 'esm',
      banner: bannerText.trimStart(),
    },
  },
  {
    input: 'entry',
    plugins: [
      virtual({ entry: '' }),
    ],
    output: {
      file: 'dist/script.meta.js',
      banner: bannerText.trim(),
    },
  },
];
