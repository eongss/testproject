
// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

// Build the chart
Highcharts.chart('piegradient', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: null,
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: '상태',
        data: [
            { name: '기동', y: 70 }
            ,{ name: '장애', y: 20 }
            ,{ name: '비가동', y: 10 }
        ]
    }]
});