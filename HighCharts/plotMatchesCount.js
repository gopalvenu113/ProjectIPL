fetch('../Json files/matchesTotal.json').then(res => res.json()).then(json => {
    let x=formatData1(json);
    plot1(x);
})

function formatData1(jsonData){
    let xData = Object.keys(jsonData);
    return xData.reduce((accumulator, keys) => {
        var obj ={};
        obj['name'] = keys;
        obj['y'] = jsonData[keys];
        accumulator.push(obj);
        return accumulator;
    },[])
}

function plot1(json){
    // Create the chart
    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'IPL Seasons : Total Matches Played'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total Matches'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:13px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },

        "series": [
            {
                "name": "Total Matches",
                "colorByPoint": true,
                "data": json
            }
        ] 
    })
}
