
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
var progressBarW3 = 0;
var progressBarW4 = 0;
var progressBarW5 = 0;
var progressBarW6 = 0;

function progressTime() {

	progressBarW1++;

	if (progressBarW1 < 110) {
		document.getElementById('progress1').style.width = progressBarW1 + '%';
	} else {
		progressBarW2++;
		progressBarW3 += 5;

		if (progressBarW2 < 110) {
			document.getElementById('progress2').style.width = progressBarW2 + '%';
			document.getElementById('progress3').style.width = progressBarW3 + '%';
		}
		if (progressBarW3 > 110) {
			progressBarW4 += 4;
			document.getElementById('progress4').style.width = progressBarW4 + '%';
		}
		if (progressBarW4 > 110) {
			progressBarW5 += 5;
			document.getElementById('progress5').style.width = progressBarW5 + '%';
		}
		if (progressBarW5 > 120) {
			progressBarW6 += 4;
			document.getElementById('progress6').style.width = progressBarW6 + '%';
		}
		if (progressBarW6 > 280) {
			progressBarW1 = 0;
			progressBarW2 = 0;
			progressBarW3 = 0;
			progressBarW4 = 0;
			progressBarW5 = 0;
			progressBarW6 = 0;
			document.getElementById('progress1').style.width = progressBarW1 + '%';
			document.getElementById('progress2').style.width = progressBarW2 + '%';
			document.getElementById('progress3').style.width = progressBarW3 + '%';
			document.getElementById('progress4').style.width = progressBarW4 + '%';
			document.getElementById('progress5').style.width = progressBarW5 + '%';
			document.getElementById('progress6').style.width = progressBarW6 + '%';

		}
	}

}

let intvel;
function progressInit() {
	intvel = setInterval(progressTime, 100)
}

progressInit();


var chcnt = 0;
function progresschangeTime() {
	chcnt++;
	if (chcnt % 2 == 0) {
		document.getElementById('progress7').classList.add('bg-danger');
		//clearInterval(intvel);
	} else {
		document.getElementById('progress7').classList.remove('bg-danger');

	}

}

function progresschangeInit() {
	setInterval(progresschangeTime, 6000)
}


progresschangeInit();