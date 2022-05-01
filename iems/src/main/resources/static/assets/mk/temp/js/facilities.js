
$(document).ready(function() {
	$('#example').DataTable({
		//버튼생성
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 10,
		info: false
	});
});


Highcharts.chart('piegradient1', {
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		},
		width: 400
	},
	title: null,
	exporting: false,
	credits: false,
	accessibility: {
		point: {
			valueSuffix: '%'
		}
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			depth: 35,
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
		}
	},
	series: [{
		data: [
			{ name: 'IVT1', y: 45 },
			{ name: 'IVT2', y: 30 },
			{ name: 'IVT3', y: 20 }
		]
	}]
});


Highcharts.chart('comboLine', {
	chart: {
		type: 'column'
	},
	title: null,
	exporting: false,
	credits: {
		enabled: false
	},
	xAxis: {
		type: 'datetime',
		dateTimeLabelFormats: {
			day: '%Y-%m-%d'    //ex- 01 Jan 2016
		}
	},
	yAxis: {
		min: 0,
		title: null
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	series: [{
		name: '인버터1',
		type: 'spline',
		color: '#0000FF',
		data: (function() {
			// generate an array of random data
			var data = [],
				time = (new Date()).getTime(),
				year = (new Date()).getFullYear(),
				month = (new Date()).getMonth(),
				i;

			for (i = 0; i < 8; i++) {
				var day = (new Date()).getDay() + i;
				data.push({
					x: Date.UTC(year, month, day),
					y: Math.floor((Math.random() * (1000 - 1) + 100))
				});
			}
			return data;
		}())
	}, {
		name: '인버터2',
		type: 'spline',
		color: '#FF0000',
		data: (function() {
			// generate an array of random data
			var data = [],
				time = (new Date()).getTime(),
				year = (new Date()).getFullYear(),
				month = (new Date()).getMonth(),
				i;

			for (i = 0; i < 8; i++) {
				var day = (new Date()).getDay() + i;
				data.push({
					x: Date.UTC(year, month, day),
					y: Math.floor((Math.random() * (1000 - 1) + 100))
				});
			}
			return data;
		}())
	}, {
		name: '인버터3',
		type: 'spline',
		color: '#7FFF00',
		data: (function() {
			// generate an array of random data
			var data = [],
				time = (new Date()).getTime(),
				year = (new Date()).getFullYear(),
				month = (new Date()).getMonth(),
				i;

			for (i = 0; i < 8; i++) {
				var day = (new Date()).getDay() + i;
				data.push({
					x: Date.UTC(year, month, day),
					y: Math.floor((Math.random() * (1000 - 1) + 100))
				});
			}
			return data;
		}())
	}]
});


var chartRpm1 = Highcharts.chart('solid1', mkgaugeChartOption);

var point11 = chartRpm1.series[0].points[0];
var point12 = chartRpm1.series[1].points[0];

point11.update(10);
point12.update(10);

var chartRpm2 = Highcharts.chart('solid2', mkgaugeChartOption);

var point21 = chartRpm2.series[0].points[0];
var point22 = chartRpm2.series[1].points[0];

point21.update(30);
point22.update(30);