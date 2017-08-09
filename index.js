const express = require('express');
const path = require('path');
const fs = require('fs');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8008, () => console.log('listening'));

//afficheColGoy.colGoy1
//afficheMotif/1motif11.couleurs1_17/2_17.little
//afficheInitiales.font4.couleurs2_17.little
//

getBool() {
    return Math.random() % 2 === 0;
}
