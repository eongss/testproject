
function OneLevelAdd() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');

	addDiv.classList.add('card-body');
	addDiv.classList.add('card-body-no-weidth');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='menu-list-card2 formBox-text'>" +
		"<h3 class='form-h4 margin-top-one'>※ 필수 사항</h3>" +

		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>사용자 ID</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"<div class='col-sm-2 text-center'>" +
		"<button type='button' class='btn btn-seacch'><i class='bi bi-search' style='margin-right: 10px;'></i>확인</button>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>사용자명</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>권한그룹</label>" +
		"<div class='col-sm-8'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>전화번호</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<hr>" +
		"<h3 class='form-h4 margin-top-one'>※ 선택 사항</h3>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>소속회사</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>소속부서</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>유선전화</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>팩스번호</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='text-center margin-top-one'>" +
		"<button type='button' class='btn btn-succes'><i class='bi bi-cloud-arrow-up' style='margin-right: 10px;'></i>저장</button>" +
		"</div>" +
		"</div>";


	AdId.appendChild(addDiv);

}

function TowLevelAdd(info) {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');

	addDiv.classList.add('card-body');
	addDiv.classList.add('card-body-no-weidth');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='menu-list-card2 formBox-text'>" +
		"<h3 class='form-h4 margin-top-one'>※ EMS 접속 및 사용권한</h3>" +

		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>사용자 ID</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>사용자명</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText' value=" + info + ">" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>권한그룹</label>" +
		"<div class='col-sm-8'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>전화번호</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<hr>" +
		"<h3 class='form-h4 margin-top-one'>※ 개인정보 내역</h3>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>소속회사</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>소속부서</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>유선전화</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>팩스번호</label>" +
		"<div class='col-sm-8'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='text-center margin-top-one'>" +
		"<button type='button' class='btn btn-modify'><i class='bi bi-arrow-clockwise' style='margin-right: 10px;'></i>암호 초기화</button>" +
		"<button type='button' class='btn btn-delete' style='margin-left: 5px;'><i class='bi bi-trash' style='margin-right: 10px;'></i>삭제</button>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up' style='margin-right: 10px;'></i>저장</button>" +
		"</div>" +
		"</div>";


	AdId.appendChild(addDiv);

}
