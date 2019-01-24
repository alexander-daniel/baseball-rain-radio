const fs = require('fs');
const formatter = require('string-template');
const rawTemplate = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

// TODO: add more or organize better, but at least we're using permalinks!
// https://archive.org/download/classicmlbbaseballradio
const games = {
  1: {
    title: 'Mets @ Expos, April 20 1969',
    url: 'https://archive.org/download/classicmlbbaseballradio/1969%2004%2030%20Mets%20at%20Expos%20Tom%20Seaver%20Expos%20Broadcast%20Radio.mp3'
  },
  2: {
    title: 'Dodgers vs Astros, September 30 1969',
    url: 'https://archive.org/download/classicmlbbaseballradio/1969%2009%2030%20Dodgers%20vs%20Astros%20Vin%20Scully%20Complete%20Radio%20Broadcast.mp3'
  },
  3: {
    title: 'Pirates @ Expos, July 17 1969',
    url: 'https://archive.org/download/classicmlbbaseballradio/19690717PiratesAtExposDaveVanHorne.mp3'
  },
  4: {
    title: 'Mets vs Cardinals, September 23 1973',
    url: 'https://archive.org/download/classicmlbbaseballradio/1973%2009%2023%20Mets%20vs%20St%20Louis%20Cardinals%20Pennant%20Chase%20Continues%20Complete%20Radio%20Broadcast.mp3'
  }
};

module.exports = (_, res) => {
  const randomID = Math.floor(Math.random() * Object.keys(games).length) + 1;
  const { title, url } = games[randomID];
  const html = formatter(rawTemplate, {
    title,
    url
  });

  res.end(html);
};
