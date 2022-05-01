
$(document).ready(function() {
	$('#example').DataTable({
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
Highcharts.chart('piegradient4', {
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
			{ name: '노지', y: 50 },
			{ name: '옥삭', y: 30 },
			{ name: '기타', y: 20 }
		]
	}]
});