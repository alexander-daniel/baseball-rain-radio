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

const games = {
  1: {
    title: 'NY Mets vs Montreal Expos, April 20 1969',
    url: 'https://ia801604.us.archive.org/7/items/classicmlbbaseballradio/1969%2004%2030%20New%20York%20Mets%20vs%20Montreal%20Expos%20Complete%20Baseball%20Broadcast.mp3'
  },
  2: {
    title: 'NY Mets @ Philadelphia Phillies, June 6th, 1962',
    url: 'https://ia601604.us.archive.org/7/items/classicmlbbaseballradio/196206-06MetsAtPhilliesGame1.mp3'
  }
};

module.exports = (_, res) => {
  const randomID = Math.floor(Math.random() * Object.keys(games).length) + 1;
  const game = games[randomID];
  const html = template(game);
  res.end(html);
};
