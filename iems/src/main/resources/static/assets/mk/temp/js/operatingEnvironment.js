
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
			{ name: '맑음', y: 45 },
			{ name: '흐림', y: 30 },
			{ name: '강우', y: 20 }
		]
	}]
});


Highcharts.chart('weather', {
	chart: {
		zoomType: 'xy'
	},
	title: null,
	exporting: false,
	xAxis: [{
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	}],
	yAxis: [{ // Primary yAxis
		labels: {
			format: '{value} °C',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		},
		title: {
			text: '기온',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		}
	}],

	tooltip: {
		shared: true
	},

	series: [{
		name: '평균',
		type: 'spline',
		color: '#FF6347',
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
		tooltip: {
			pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b><br/> '
		}
	}, {
		name: '최저 최고',
		type: 'errorbar',
		data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
		tooltip: {
			pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.low}-{point.high}°C</b><br/>'
		}
	}]
});


Highcharts.chart('sunshine', {
	chart: {
		zoomType: 'xy'
	},
	title: null,
	exporting: false,
	xAxis: [{
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	}],
	yAxis: [{ // Primary yAxis
		labels: {
			format: '{value}',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		},
		title: {
			text: '일사량',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		}
	}],

	tooltip: {
		shared: true
	},

	series: [{
		name: '수직',
		type: 'spline',
		color: '#DC143C',
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
		tooltip: {
			pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b><br/> '
		}
	}, {
		name: '수평',
		type: 'spline',
		color: '#FF6347',
		data: [17.0, 16.9, 19.5, 1.5, 8.2, 26.5, 5.2, 6.5, 13.3, 28.3, 23.9, 19.6],
		tooltip: {
			pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b><br/> '
		}
	}]
});