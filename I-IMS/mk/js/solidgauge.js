var gaugeOptions = {
    chart: {
        type: 'solidgauge',
        height: 200
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The speed gauge
var chartSpeed = Highcharts.chart('solid1', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '발전량'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: '발전량',
        data: [10],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));

// The speed gauge
var chartSpeed = Highcharts.chart('solid2', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '생산량'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: '생산량',
        data: [40],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));

// The speed gauge
var chartSpeed = Highcharts.chart('solid3', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '판매량'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: '판매량',
        data: [80],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));