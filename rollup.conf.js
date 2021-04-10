let bannerText = `
// ==UserScript==
// @name         userscript-repo-template
// @version      0.0.0
// @description  Repository template for userscript development.
// @license      MIT
// @author       murphyne
// @namespace    https://github.com/murphyne
// @match        http://*/*
// @grant        none
// ==/UserScript==
`;

export default {
  input: 'script.user.js',
  output: {
    file: 'dist/script.user.js',
    format: 'esm',
    banner: bannerText.trimStart(),
  },
};
