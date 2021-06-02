import virtual from '@rollup/plugin-virtual';
import pkg from './package.json';

let bannerText = `
// ==UserScript==
// @name         userscript-repo-template
// @version      ${pkg.version}
// @description  Repository template for userscript development.
// @license      MIT
// @author       murphyne
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
