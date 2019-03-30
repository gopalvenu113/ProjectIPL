const csv = require('../csvToJson');
let matchData = csv.convertmyfile('../matches.csv');
const fs = require('fs');

function matchesTotal(matchData){
    return matchData.reduce((accumulator,matches) => {
    if(accumulator.hasOwnProperty(matches['season'])){
        accumulator[matches['season']] += 1;
        return accumulator;
    }else{
        accumulator[matches['season']] = 1;
        return accumulator;
    }
},{});
}
let totalMatches = matchesTotal(matchData);

let data = JSON.stringify(totalMatches, null, 2);
fs.writeFileSync('../JSON files/matchesTotal.json',data);