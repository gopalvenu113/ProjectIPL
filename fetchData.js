const fetch = require('node-fetch');
fetch('./JSON files/matchesTotal.json').then(res => res.json()).then(json => console.log(json))