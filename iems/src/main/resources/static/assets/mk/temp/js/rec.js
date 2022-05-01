
Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlcv.json', function(data) {
	// split the data set into ohlc and volume
	var ohlc = [],
		volume = [],
		dataLength = data.length,
		// set the allowed units for data grouping
		groupingUnits = [[
			'week',                         // unit name
			[1]                             // allowed multiples
		], [
			'month',
			[1, 2, 3, 4, 6]
		]],
		i = 0;
	for (i; i < dataLength; i += 1) {
		ohlc.push([
			data[i][0], // the date
			data[i][1], // open
			data[i][2], // high
			data[i][3], // low
			data[i][4] // close
		]);
		volume.push([
			data[i][0], // the date
			data[i][5] // the volume
		]);
	}
	// create the chart
	Highcharts.stockChart('recchart', {
		rangeSelector: {
			selected: 1
		},
		title: null,
		exporting: {
			enabled: false
		},
		yAxis: [{
			labels: {
				align: 'right',
				x: -3
			},
			title: {
				text: 'OHLC'
			},
			height: '60%',
			lineWidth: 2,
			resize: {
				enabled: true
			}
		}, {
			labels: {
				align: 'right',
				x: -3
			},
			title: {
				text: 'Volume'
			},
			top: '65%',
			height: '35%',
			offset: 0,
			lineWidth: 2
		}],

		tooltip: {
			split: true
		},

		series: [{
			type: 'candlestick',
			name: 'AAPL',
			data: ohlc,
			dataGrouping: {
				units: groupingUnits
			}
		}, {
			type: 'column',
			name: '거래량',
			data: volume,
			yAxis: 1,
			dataGrouping: {
				units: groupingUnits
			}
		}]
	});
});


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