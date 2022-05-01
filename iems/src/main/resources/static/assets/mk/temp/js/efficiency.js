
$(document).ready(function() {
	$('#example1').DataTable({
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 10,
		info: false,
		searching: false
	});
	$('#example2').DataTable({
		// 표시 건수기능 숨기기
		lengthChange: false,
		// 한 페이지에 표시되는 Row 수
		pageLength: 10,
		info: false,
		searching: false
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
			{ name: '전남', y: 45 },
			{ name: '경기', y: 30 },
			{ name: '제주', y: 20 },
			{ name: '서울', y: 5 }
		]
	}]
});
Highcharts.chart('piegradient2', {
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
			{ name: '100KW', y: 50 },
			{ name: '200KW', y: 30 },
			{ name: '500KW', y: 20 }
		]
	}]
});
Highcharts.chart('piegradient3', {
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		},
		width: 500
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
			{ name: 'PV', y: 50 },
			{ name: 'PV-ESS', y: 30 },
			{ name: '기타', y: 20 }
		]
	}]
});


Highcharts.chart('barbasic', {
	chart: {
		type: 'column'
	},
	title: null,
	exporting: false,
	credits: {
		enabled: false
	},
	xAxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		crosshair: true
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
		name: '발전용량',
		color: '#0000FF',
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: '발전판매량',
		color: '#FF0000',
		data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
	}]
});


Highcharts.chart('linebasic', {
	chart: {
		type: 'spline'
	},
	title: null,
	exporting: false,
	credits: {
		enabled: false
	},
	xAxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		crosshair: true
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
		name: '1번 발전소',
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: '2번 발전소',
		data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
	}, {
		name: '3번 발전소',
		data: [84.6, 71.8, 90.5, 99.4, 156.0, 44.5, 205.0, 504.3, 11.2, 33.5, 156.6, 99.3]
	}]
});