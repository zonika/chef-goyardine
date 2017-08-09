const express = require('express');
const path = require('path');
const fs = require('fs');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  const color1 = getRandomInt(1, 17);
  const color2 = getRandomInt(1, 17);

  res.locals = {
    afficheColGoy: `colGoy${getRandomInt(1, 14)}`,
    afficheInitiales: `font${getBool() ? 1 : 2} couleurs1_${color1} couleurs2_${color2}`,
    afficheMotif: `motif${getRandomInt(1, 11)} couleurs1_${color1} couleurs2_${color2}`,
    message: req.query.message || '"Oh I was just PostShitting for laughs" EXactly. And that is why U forever languish in obscurity while i engage brands U could only dream of'
  };
  res.render('index');
});

app.listen(8008, () => console.log('listening'));

function getBool() {
    return Math.floor(Math.random() * 1000) % 2 === 0;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
