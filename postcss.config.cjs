/*
 * @Description: 
 * @FilePath: \ts-element\postcss.config.cjs
 */
/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-each'),
    require('postcss-for')
  ]
};