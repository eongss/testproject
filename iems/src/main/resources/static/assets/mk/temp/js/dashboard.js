$(document).ready(function() {
	$('#errorDataTable').DataTable({
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 3,
		//검색막기
		searching: false,
		info: false
	});
});

var myCarousel = document.querySelector('#carouselExampleDark')
var carousel = new bootstrap.Carousel(myCarousel, {
	interval: false,
	wrap: true
})

const newData = [['kr-kn', 35.25, 128.11, '1번 발전소', 1],
['kr-kn', 35.25, 128.22, '2번 발전소', 1],
['kr-kn', 35.25, 128.33, '3번 발전소', 3],
['kr-kg', 37.51, 127.31, '4번 발전소', 1]
	//,['kr-cb', 37.01, 128.12, '3번 발전소']
	//['kr-4194', 1], ['kr-kg', 1], ['kr-cb', 1], ['kr-kn', 1],
	//['kr-2685', 14], ['kr-pu', 15], ['kr-2688', 30], ['kr-sj', 1],
	//['kr-tj', 18], ['kr-ul', 19], ['kr-in', 30], ['kr-kw', 1],
	//['kr-gn', 22], ['kr-cj', 23], ['kr-gb', 30], ['kr-so', 1],
	//['kr-tg', 26], ['kr-kj', 27]
];

function getTemp(point, countries, capitals) {

	const temp = point[4];
	const colorAxis = countries.chart.colorAxis[0];

	const country = {
		'hc-key': point[0],
		value: parseInt(temp, 10) || null
	};

	if (temp == 1) {
		const capital1 = {
			name: point[3],
			lat: point[1],
			lon: point[2],
			color: '#00CED1',
			temp: parseInt(temp, 10) || '정상'
		};
		capitals.addPoint(capital1);
		countries.addPoint(country);
	} else {
		const capital2 = {
			name: point[3],
			lat: point[1],
			lon: point[2],
			color: '#E5DD45',
			temp: parseInt(temp, 10)
		};
		capitals.addPoint(capital2);
		countries.addPoint(country);
	}

}

// Create the chart
Highcharts
	.mapChart(
		'Mapcontainer',
		{
			chart: {
				map: 'countries/kr/kr-all',
				animation: false,
				events: {
					load: function() {
						var countries = this.series[0];
						var capitals = this.series[1];

						newData.forEach(function(elem) {
							getTemp(elem, countries, capitals);
						});
					}
				},

			},

			title: null,

			mapNavigation: {
				enabled: true,

				buttonOptions: {
					verticalAlign: 'bottom'
				}
			},

			tooltip: {
				headerFormat: '<span style="color:{point.color}">\u25CF</span> {point.key}: ',
				pointFormatter: function() {
					var value = Number.isInteger(this.temp) ? this.temp
						+ '단계'
						: 'No data';
					var valuenm = "";
					if (value == "1단계") {
						valuenm = "정상"
					} else {
						valuenm = "위험"
					}

					return '<b>' + valuenm + '</b>';
				}
			},

			colorAxis: {
				min: 1,
				max: 3,
				labels: {
					format: '{value}단계'
				},
				stops: [[0, '#4E85F2'], [1, '#EF355E']]
			},

			plotOptions: {
				mappoint: {
					cluster: {
						enabled: true,
						allowOverlap: false,
						animation: {
							duration: 100
						},
						zones: [{
							from: 1,
							to: 4,
							marker: {
								radius: 13
							}
						}, {
							from: 5,
							to: 9,
							marker: {
								radius: 15
							}
						}, {
							from: 10,
							to: 15,
							marker: {
								radius: 17
							}
						}, {
							from: 16,
							to: 20,
							marker: {
								radius: 19
							}
						}, {
							from: 21,
							to: 100,
							marker: {
								radius: 21
							}
						}]
					}
				}
			},

			series: [
				{
					name: '발전소',
					borderColor: '#000000',
					nullColor: '#CECCCC',
					states: {
						hover: {
							color: '#BADA55'
						}
					},
					dataLabels: {
						enabled: false
					},
					enableMouseTracking: false
				},
				{
					name: '발전소',
					type: 'mappoint',
					showInLegend: false,
					marker: {
						lineWidth: 1,
						lineColor: '#000'
					},
					dataLabels: {
						crop: true,
						formatter: function() {
							var value = Number
								.isInteger(this.point.temp) ? this.point.temp
							+ '단계'
								: 'No data';
							var valuenm = "";
							if (value == "1단계") {
								valuenm = " : 정상"
							} else {
								valuenm = " : 위험"
							}
							return '<span>' + this.key
								+ '</span>';
						}
					}
				}]
		});


var chartRpm1 = Highcharts.chart('solid1', mkgaugeChartOption);

var point11 = chartRpm1.series[0].points[0];
var point12 = chartRpm1.series[1].points[0];

chartRpm1.setTitle({
	text: "발전량"
});
point11.update(30);
point12.update(30);

var chartRpm2 = Highcharts.chart('solid2', mkgaugeChartOption);

var point21 = chartRpm2.series[0].points[0];
var point22 = chartRpm2.series[1].points[0];

chartRpm2.setTitle({
	text: "생산량"
});
point21.update(60);
point22.update(60);

var chartRpm3 = Highcharts.chart('solid3', mkgaugeChartOption);

chartRpm3.setTitle({
	text: "판매량"
});
var point31 = chartRpm3.series[0].points[0];
var point32 = chartRpm3.series[1].points[0];

point31.update(90);
point32.update(90);

Highcharts
	.chart(
		'dynamicUpdate',
		{
			chart: {
				type: 'spline',
				marginRight: 10,
				events: {
					load: function() {

						// set up the updating of the chart each second
						var series = this.series[0];
						var series1 = this.series[1];
						var series2 = this.series[2];
						setInterval(function() {
							var x = (new Date()).getTime(), // current time
								y = Math.floor((Math.random()
									* (1000 - 1) + 100));
							y2 = Math.floor((Math.random()
								* (1000 - 1) + 100));
							y3 = Math.floor((Math.random()
								* (1000 - 1) + 100));
							series.addPoint([x, y], true,
								true);
							series1.addPoint([x, y2], true,
								true);
							series2.addPoint([x, y3], true,
								true);
						}, 60000);
					}
				}
			},

			time: {
				useUTC: false
			},

			title: null,

			accessibility: {
				announceNewData: {
					enabled: true,
					minAnnounceInterval: 1200000,
					announcementFormatter: function(allSeries,
						newSeries, newPoint) {
						if (newPoint) {
							return 'New point added. Value: '
								+ newPoint.y;
						}
						return false;
					}
				}
			},

			xAxis: {
				type: 'datetime',
				tickPixelInterval: 120
			},

			yAxis: {
				title: {
					text: '전력량'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},

			tooltip: {
				headerFormat: '<b>{series.name}</b><br/>',
				pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
			},

			legend: {
				enabled: false
			},

			exporting: {
				enabled: false
			},

			series: [
				{
					name: '생산량',
					color: '#0000FF',
					data: (function() {
						// generate an array of random data
						var data = [], time = (new Date())
							.getTime(), i;

						for (i = -19; i <= 0; i += 1) {
							data.push({
								x: time + i * 30000,
								y: 0
							});
						}
						return data;
					}())
				},
				{
					name: '판매량',
					color: '#00FF7F',
					data: (function() {
						// generate an array of random data
						var data = [], time = (new Date())
							.getTime(), i;

						for (i = -19; i <= 0; i += 1) {
							data.push({
								x: time + i * 30000,
								y: 0
							});
						}
						return data;
					}())
				},
				{
					name: '발전량',
					color: '#FF0000',
					data: (function() {
						// generate an array of random data
						var data = [], time = (new Date())
							.getTime(), i;

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