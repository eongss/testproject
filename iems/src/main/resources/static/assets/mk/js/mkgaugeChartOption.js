var mkgaugeChartOption = {
    chart: {
        animation: true,
        width: '350',
        height: '210',
    },
    title: null,
    tooltip: {
        enabled: false
    },
    pane: {
        startAngle: -90,
        endAngle: 90,
        background: {
        borderWidth: 0,
        shape: 'arc',
        innerRadius: '85%',
        outerRadius: '95%'
        },
        size: 250,
        center : ["50%", "80%"] //Center Position
    },
    yAxis: {
        min: 0,
        max: 100,
        stops: [
            [0, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [1, '#DF5353'] // red
        ],
        minorTickLength: 0,
        lineWidth: 1,
        tickPixelInterval: 5,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 5,
        tickColor: '#000000',
        tickPositions: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        labels: {
        distance: 10,
        style: {
            color: "#000000"
        }
        }
    },
    series: [{
        type: 'gauge',
        data: [100],
        pivot: {
        backgroundColor: "#000000",
        borderColor: "#000000",
        borderWidth: 0,
        radius: 5
        },
        dataLabels: {
            borderWidth: 0,
            //폰트스타일
            style: {
                fontSize: '17px',
                color: "#000000",
                textOutline: false
        	},
            format:
                '<div style="text-align:center"><br/>' +
                '<span style="margin-top: 20px;">{y:.0f} %</span>'+
                '</span>' +
                '</div>'
        },
        dial: {
        radius: '95%',
        //바늘 선색
        backgroundColor: '#000000',
        borderWidth: 0,
        baseWidth: 3,
        topWidth: 3,
        baseLength: '100%',
        rearLength: '0%'
        }
    }, {
        type: 'solidgauge',
        data: [99],
        radius: '95%',
        innerRadius: '80%',
        dataLabels: {
            borderWidth: 0
        },
        zIndex: -1,
    }],
    navigation: {
        buttonOptions: {
        enabled: false
        }
    },
    credits: {
        style: {
        'display': 'none'
        }
    },
};