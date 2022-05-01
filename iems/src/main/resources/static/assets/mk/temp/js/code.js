
$(document).ready(function() {
	$('#example').DataTable({
		// 한 페이지에 표시되는 Row 수
		pageLength: 10
	});
});

function codeNew() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>코드 상위</label>" +
		"<div class='col-sm-8'><input type='text' class='form-control' id='inputText'></div>" +
		"<div class='col-sm-2'><button type='button' class='btn btn-succes'  onclick='javascript:codeSelect();'>선택</button></div>" +
		"</div>";

	AdId.appendChild(addDiv);
}

function codeSelect() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>코드 상위</label>" +
		"<div class='col-sm-8'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"<div class='col-sm-2'><button type='button' class='btn btn-succes'  onclick='javascript:codeNew();'>신규</button></div>" +
		"</div>";

	AdId.appendChild(addDiv);
}