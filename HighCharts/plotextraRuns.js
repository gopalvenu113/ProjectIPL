fetch('../Json files/extraRuns.json').then(res => res.json()).then(json => columnChartForExtraRuns(json));

//function to format data for plotting
function formatData2(jsonData){
    let xData = Object.keys(jsonData);
    return xData.reduce((accumulator, keys) => {
        var obj ={};
        obj['name'] = keys;
        obj['y'] = jsonData[keys];
        accumulator.push(obj);
        return accumulator;
    },[])
}

//function for highChart column plots
function columnChartForExtraRuns(json){
    // Create the chart
    Highcharts.chart('container3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'IPL Season 2016 : ExtraRuns Conceived'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total Extras'
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
                "name": "Total Extras",
                "colorByPoint": true,
                "data": formatData2(json)
            }
        ] 
    })
}
