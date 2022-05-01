
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
	$('#example3').DataTable({
		// 검색 기능 숨기기
		searching: false,
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 4,
		info: false
	});
});


var myCarousel = document.querySelector('#carouselExampleDark')
var carousel = new bootstrap.Carousel(myCarousel, {
	interval: 10000,
	wrap: true
})

var chartRpm1 = Highcharts.chart('solid1', mkgaugeChartOption);

var point11 = chartRpm1.series[0].points[0];
var point12 = chartRpm1.series[1].points[0];

point11.update(30);
point12.update(30);


// Create the chart
Highcharts.stockChart('dynamicupdate', {
	chart: {
		type: 'spline',
		events: {
			load: function() {

				// set up the updating of the chart each second
				var series = this.series[0];
				var series1 = this.series[1];
				var series2 = this.series[2];
				setInterval(function() {
					var x = (new Date()).getTime(), // current time
						y = (Math.random() * 1000) + 1;
					y2 = (Math.random() * 1000) + 1;
					y3 = (Math.random() * 1000) + 1;
					series.addPoint([x, y], true, true);
					series1.addPoint([x, y2], true, true);
					series2.addPoint([x, y3], true, true);
				}, 10000);
			}
		},
		height: 600
	},

	time: {
		useUTC: false
	},

	rangeSelector: {
		buttons: [{
			count: 1,
			type: 'minute',
			text: '1M'
		}, {
			count: 5,
			type: 'minute',
			text: '5M'
		}, {
			type: 'all',
			text: 'All'
		}],
		inputEnabled: false,
		selected: 0
	},

	title: {
		text: '인버터 발전 전력'
	},

	exporting: {
		enabled: false
	},

	series: [{
		name: '인버터1',
		color: '#0000FF',
		data: (function() {
			// generate an array of random data
			var data = [],
				time = (new Date()).getTime(),
				i;

			for (i = -19; i <= 0; i += 1) {
				data.push({
					x: time + i * 30000,
					y: 0
				});
			}
			return data;
		}())
	}, {
		name: '인버터2',
		color: '#00FF7F',
		data: (function() {
			// generate an array of random data
			var data = [],
				time = (new Date()).getTime(),
				i;

			for (i = -19; i <= 0; i += 1) {
				data.push({
					x: time + i * 30000,
					y: 0
				});
			}
			return data;
		}())
	}, {
		name: '인버터3',
		color: '#FF0000',
		data: (function() {
			// generate an array of random data
			var data = [],
				time = (new Date()).getTime(),
				i;

			for (i = -19; i <= 0; i += 1) {
				data.push({
					x: time + i * 30000,
					y: 0
				});
			}
			return data;
		}())
	}]
});


Highcharts.chart('piegradient', {
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		},
		height: 300
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
		type: 'pie',
		name: '발전량',
		data: [
			['IVT1', 50.0],
			['IVT2', 20.0],
			['IVT3', 12],
			['IVT4', 18]
		]
	}]
});
