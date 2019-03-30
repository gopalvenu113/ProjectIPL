const csv = require('../csvToJson');
let matchData = csv.convertmyfile('../matches.csv');
const fs = require('fs');

function winningCount(matchData){
    return matchData.reduce((accumulator,matches) => {
        if(accumulator.hasOwnProperty(matches['season'])){
            if(accumulator[matches['season']].hasOwnProperty(matches['winner'])){
                accumulator[matches['season']][matches['winner']]+=1;
            }
            else{
                if(matches['winner']!=0){
                    accumulator[matches['season']][matches['winner']] = 1;
                }
            }
            return accumulator;
        }else{
            accumulator[matches['season']] = {};
            if(matches['winner']!=0){
                accumulator[matches['season']][matches['winner']] = 1;
            }
            return accumulator;
        }
},{});
}

let winningData = winningCount(matchData);
let data = JSON.stringify(winningData, null, 2);
fs.writeFileSync('../JSON files/winningCount.json',data);