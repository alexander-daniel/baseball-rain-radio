const template = ({ title, url }) => `
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>baseball rain porch</title>
  <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
  <meta name="description" content="baseball radio audio porch">
  <meta name="author" content="cedar">
  <style>
    * {
      font-family: sans-serif;
      font-weight: 100;
    }
  </style>
</head>

<body>
  <div class="content">
      <h2>${title}</h2>
      <audio
        src="${url}"
        controls
        style="width:400px"
      >
        Your browser does not support the <code>audio</code> element.
      </audio>

      <br>

      <h2>Thunderstorm</h2>
      <audio
        src="https://ia800308.us.archive.org/12/items/thunderstorm_ms_relax_water/thunderstorm.mp3"
        controls
        loop
        style="width:400px"
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
      <br>

      <h6>Thank you to <a href="https://archive.org" target="_blank">archive.org</a> for the CC audio.</h6>
  </div>
</body>
</html>
`;

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
  const game = games[randomID];
  const html = template(game);
  res.end(html);
};
