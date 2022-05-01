

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

var progressBarW1 = 0;
var progressBarW2 = 0;

function progressTime() {

	progressBarW1++;

	if (progressBarW1 < 100) {
		document.getElementById('progress1').style.width = progressBarW1 + '%';
	} else {
		progressBarW2++;
		document.getElementById('progress2').style.width = progressBarW2 + '%';
		if (progressBarW2 == 99) {
			progressBarW2 = 0;
			progressBarW1 = 0;
			document.getElementById('progress2').style.width = progressBarW2 + '%';
		}
	}

}

function progressInit() {
	setInterval(progressTime, 100)
}

progressInit();