
Highcharts.chart('smpchart', {
	chart: {
		type: 'spline'
	},
	data: {
		table: 'example'
	},
	title: null,
	exporting: {
		enabled: false
	},
	yAxis: {
		title: {
			text: '가격'
		}
	},
	responsive: {
		rules: [{
			condition: {
				maxWidth: 500
			},
			chartOptions: {
				legend: {
					layout: 'horizontal',
					align: 'center',
					verticalAlign: 'bottom'
				}
			}
		}]
	}
});

  $(document).ready(function () {
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