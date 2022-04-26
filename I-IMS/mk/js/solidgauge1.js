var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '70%'],
        size: '100%',
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
var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100
    },

    credits: {
        enabled: false
    },

    series: [{
        name: '가동률',
        data: [10],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span><br/>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: '%'
        }
    }]

}));


// The speed gauge
var chartSpeed = Highcharts.chart('container-speed2', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'CPU'
        }
    },
    
    credits: {
        enabled: false
    },

    series: [{
        name: 'cpu',
        data: [20],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span><br/>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: '%'
        }
    }]

}));


// The speed gauge
var chartSpeed = Highcharts.chart('container-speed3', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'MEM'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'MEM',
        data: [30],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span><br/>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: '%'
        }
    }]

}));


// The speed gauge
var chartSpeed = Highcharts.chart('container-speed4', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'CPU'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'CPU',
        data: [40],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span><br/>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: '%'
        }
    }]

}));

// The speed gauge
var chartSpeed = Highcharts.chart('container-speed5', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'MEM'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'MEM',
        data: [50],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y} %</span><br/>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: '%'
        }
    }]

}));