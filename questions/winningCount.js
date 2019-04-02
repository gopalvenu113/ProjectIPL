const csv = require('../csvToJson');
let matchData = csv.convertmyfile('../matches.csv');
const fs = require('fs');

function winningCount(matchData){
    return matchData.reduce((accumulator,matches) => {
        if(accumulator.hasOwnProperty(matches['winner'])){
            if(accumulator[matches['winner']].hasOwnProperty(matches['season'])){
                accumulator[matches['winner']][matches['season']]+=1;
            }
            else{
                if(matches['winner']!=""){
                    accumulator[matches['winner']][matches['season']] = 1;
                }
            }
            return accumulator;
        }else{
            if(matches['winner']!=""){
                accumulator[matches['winner']] = {};
                accumulator[matches['winner']][matches['season']] = 1;
            }
            return accumulator;
        }
},{});
}

let winningData = winningCount(matchData);
let data = JSON.stringify(winningData, null, 2);
fs.writeFileSync('../JSON files/winningCount.json',data);