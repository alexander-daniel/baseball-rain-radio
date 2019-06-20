const fs = require('fs');
const formatter = require('string-template');
const rawTemplate = fs.readFileSync(`${__dirname}/static/index.html`, 'utf8');

// TODO: add more or organize better, but at least we're using permalinks!
// https://archive.org/download/classicmlbbaseballradio
const games = require('./games.json');

module.exports = (_, res) => {
  const randomID = Math.floor(Math.random() * Object.keys(games).length) + 1;
  const { title, url } = games[randomID];
  const html = formatter(rawTemplate, { title, url });
  res.end(html);
};
