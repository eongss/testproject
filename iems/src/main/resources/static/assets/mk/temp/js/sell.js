
$(document).ready(function() {
	$('#example1').DataTable({
		// 검색 기능 숨기기
		searching: false,
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 1,
		info: false,
		paging: false,
		ordering: false
	});
	$('#example2').DataTable({
		// 검색 기능 숨기기
		searching: false,
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 5,
		info: false
	});
});

var chartRpm1 = Highcharts.chart('solid1', mkgaugeChartOption);

var point11 = chartRpm1.series[0].points[0];
var point12 = chartRpm1.series[1].points[0];

point11.update(10);
point12.update(10);

var chartRpm2 = Highcharts.chart('solid2', mkgaugeChartOption);

var point21 = chartRpm2.series[0].points[0];
var point22 = chartRpm2.series[1].points[0];

point21.update(20);
point22.update(20);

var chartRpm3 = Highcharts.chart('solid3', mkgaugeChartOption);

var point31 = chartRpm3.series[0].points[0];
var point32 = chartRpm3.series[1].points[0];

point31.update(30);
point32.update(30);

var chartRpm4 = Highcharts.chart('solid4', mkgaugeChartOption);

var point41 = chartRpm4.series[0].points[0];
var point42 = chartRpm4.series[1].points[0];

point41.update(40);
point42.update(40);

var chartRpm5 = Highcharts.chart('solid5', mkgaugeChartOption);

var point51 = chartRpm5.series[0].points[0];
var point52 = chartRpm5.series[1].points[0];

point51.update(50);
point52.update(50);

var chartRpm6 = Highcharts.chart('solid6', mkgaugeChartOption);

var point61 = chartRpm6.series[0].points[0];
var point62 = chartRpm6.series[1].points[0];

point61.update(60);
point62.update(60);

Highcharts.chart('comboMultiAxes', {
	chart: {
		zoomType: 'xy',
		height: 500
	},
	exporting: {
		enabled: false
	},
	title: null,
	xAxis: [{
		categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		crosshair: true
	}],
	yAxis: [{ // Primary yAxis
		labels: {
			format: '{value}',
			style: {
				color: Highcharts.getOptions().colors[2]
			}
		},
		title: {
			text: '발전량',
			style: {
				color: Highcharts.getOptions().colors[2]
			}
		},
		opposite: true

	}, { // Secondary yAxis
		gridLineWidth: 0,
		title: {
			text: '전력판매량',
			style: {
				color: Highcharts.getOptions().colors[0]
			}
		},
		labels: {
			format: '{value}',
			style: {
				color: Highcharts.getOptions().colors[0]
			}
		}

	}, { // Tertiary yAxis
		gridLineWidth: 0,
		title: {
			text: '충전/방정량',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		},
		labels: {
			format: '{value}',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		},
		opposite: true
	}],
	tooltip: {
		shared: true
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		x: 80,
		verticalAlign: 'top',
		y: 55,
		floating: true,
		backgroundColor:
			Highcharts.defaultOptions.legend.backgroundColor || // theme
			'rgba(255,255,255,0.25)'
	},
	series: [{
		name: '전력판매량',
		type: 'column',
		yAxis: 1,
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		tooltip: {
			valueSuffix: ' mm'
		}

	}, {
		name: '충전/방정량',
		type: 'spline',
		yAxis: 2,
		data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
		marker: {
			enabled: false
		},
		dashStyle: 'shortdot',
		tooltip: {
			valueSuffix: ' mb'
		}

	}, {
		name: '발전량',
		type: 'spline',
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
		tooltip: {
			valueSuffix: ' °C'
		}
	}],
	responsive: {
		rules: [{
			condition: {
				maxWidth: 500
			},
			chartOptions: {
				legend: {
					floating: false,
					layout: 'horizontal',
					align: 'center',
					verticalAlign: 'bottom',
					x: 0,
					y: 0
				},
				yAxis: [{
					labels: {
						align: 'right',
						x: 0,
						y: -6
					},
					showLastLabel: false
				}, {
					labels: {
						align: 'left',
						x: 0,
						y: -6
					},
					showLastLabel: false
				}, {
					visible: false
				}]
			}
		}]
	}
});