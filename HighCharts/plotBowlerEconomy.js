fetch('../Json files/economicBowlers.json').then(res => res.json()).then(json => plot4(json));

//Formatting Data for plotting
function formatData4(jsonData){
    let xData = Object.keys(jsonData);
    return xData.reduce((accumulator, keys) => {
        var obj ={};
        obj['name'] = keys;
        obj['y'] = jsonData[keys];
        accumulator.push(obj);
        return accumulator;
    },[])
}

//HighChart Column chart javascript 
function plot4(json){
    // Create the chart
    Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'IPL Season 2015 : Top Economical Bowlers'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Economy'
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
                "name": "Top Economical Bowlers",
                "colorByPoint": true,
                "data": formatData4(json)
            }
        ] 
    })
}
