
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


var chartRpm1 = Highcharts.chart('solid1', mkgaugeChartOption);

var point11 = chartRpm1.series[0].points[0];
var point12 = chartRpm1.series[1].points[0];

point11.update(10);
point12.update(10);

var chartRpm2 = Highcharts.chart('solid2', mkgaugeChartOption);

var point21 = chartRpm2.series[0].points[0];
var point22 = chartRpm2.series[1].points[0];

point21.update(50);
point22.update(50);

var chartRpm3 = Highcharts.chart('solid3', mkgaugeChartOption);

var point31 = chartRpm3.series[0].points[0];
var point32 = chartRpm3.series[1].points[0];

point31.update(90);
point32.update(90);