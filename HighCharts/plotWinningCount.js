fetch('../Json files/winningCount.json').then(res => res.json()).then(json => {
    let x=formattedData(json);
    plot2(x);
})

function formattedData(json){
    let teamNames = Object.keys(json)
    let seasons = ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]
    let teamwins = teamNames.reduce((accumulator,teamname) => {
        let seasonwins = Object.keys(json[teamname]);
        if(accumulator.hasOwnProperty(teamname)){
            seasons.map(year => {
                if(seasonwins.includes(year)){
                    accumulator[teamname].push(json[teamname][year]);
                }else{
                    accumulator[teamname].push(0);
                }
            })
            return accumulator
        }else{
            accumulator[teamname] = [];
            seasons.map(year => {
                if(seasonwins.includes(year)){
                    accumulator[teamname].push(json[teamname][year]);
                }else{
                    accumulator[teamname].push(0);
                }
            })
            return accumulator;
        }
    },{});
    let winners = Object.keys(teamwins);
    return winners.reduce((accumulator,winner) => {
        var data = {};
        data['name'] = winner;
        data['data'] = teamwins[winner];
        accumulator.push(data);
        return accumulator;
    },[]);
}

function plot2(json){
    Highcharts.chart('container2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total Wins of Each Team'
        },
        xAxis: {
            categories: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Wins'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: json
    });
}