
function menuLineAdd() {
	var menuId = document.getElementById('manuListAdd');
	var addLine = document.createElement('li');
	addLine.innerHTML =
		"<span class=horizontal-line-depth1></span>" +
		"<a class=menu-item data-bs-target=#depth2 data-bs-toggle=collapse href=# aria-expanded=true><span><i class=bi bi-caret-right-fill></i></i>뎁스 2</span></a>" +
		"<input id=depth3-test5 type=checkbox />";
	menuId.appendChild(addLine);
}


function OneLevelAdd() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'><a class='nav-link active' href='#'>1 뎁스</a></li>" +
		"<li class='nav-item'><a class='nav-link' href='#'>2 뎁스</a></li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body card-body-weidth'>" +
		"<div class='menu-list-card formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>LV1-이름</label>" +
		"<div class='col-sm-10'><input type='text' class='form-control' id='inputText'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>URL 경로</label>" +
		"<div class='col-sm-10'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputPassword3' class='col-sm-2 col-form-label'>설명</label>" +
		"<div class='col-sm-10'>" +
		"<div class='form-floating'><textarea class='form-control' placeholder='Address' id='floatingTextarea' style='height: 100px;'></textarea></div>" +
		"</div>" +
		"</div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

}

function TowLevelAdd() {

	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'><a class='nav-link' href='#'>1 뎁스</a></li>" +
		"<li class='nav-item'><a class='nav-link active' href='#'>2 뎁스</a></li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body card-body-weidth'>" +
		"<div class='menu-list-card formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>LV1</label>" +
		"<div class='col-sm-10'>" +
		"<select class='form-select' aria-label='Default select example'>" +
		"<option selected=''>Open this select menu</option>" +
		"<option value='1'>One</option>" +
		"<option value='2'>Two</option>" +
		"<option value='3'>Three</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>LV2-이름</label>" +
		"<div class='col-sm-10'>" +
		"<input type='text' class='form-control' id='inputText'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>URL 경로</label>" +
		"<div class='col-sm-10'>" +
		"<input type='text' class='form-control' id='inputEmail'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputPassword3' class='col-sm-2 col-form-label'>설명</label>" +
		"<div class='col-sm-10'>" +
		"<div class='form-floating'>" +
		"<textarea class='form-control' placeholder='Address' id='floatingTextarea' style='height: 100px;'></textarea>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

}

function OneLevelModify(info) {

	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'><a class='nav-link active' href='#'>1 뎁스</a></li>" +
		"<li class='nav-item'><a class='nav-link' href='#'>2 뎁스</a></li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body card-body-weidth'>" +
		"<div class='menu-list-card formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>LV1-이름</label>" +
		"<div class='col-sm-10'><input type='text' class='form-control' id='inputText' value=" + info + "></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>URL 경로</label>" +
		"<div class='col-sm-10'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputPassword3' class='col-sm-2 col-form-label'>설명</label>" +
		"<div class='col-sm-10'>" +
		"<div class='form-floating'><textarea class='form-control' placeholder='Address' id='floatingTextarea' style='height: 100px;'></textarea></div>" +
		"</div>" +
		"</div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-delete'><i class='bi bi-trash' style='margin-right: 10px;'></i>삭제</button>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

}


function TowLevelModify(info) {

	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'><a class='nav-link' href='#'>1 뎁스</a></li>" +
		"<li class='nav-item'><a class='nav-link active' href='#'>2 뎁스</a></li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body card-body-weidth'>" +
		"<div class='menu-list-card formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>LV1</label>" +
		"<div class='col-sm-10'>" +
		"<select class='form-select' aria-label='Default select example'>" +
		"<option selected=''>Open this select menu</option>" +
		"<option value='1'>One</option>" +
		"<option value='2'>Two</option>" +
		"<option value='3'>Three</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>LV2-이름</label>" +
		"<div class='col-sm-10'>" +
		"<input type='text' class='form-control' id='inputText' value=" + info + ">" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-sm-2 col-form-label'>URL 경로</label>" +
		"<div class='col-sm-10'>" +
		"<input type='text' class='form-control' id='inputEmail'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputPassword3' class='col-sm-2 col-form-label'>설명</label>" +
		"<div class='col-sm-10'>" +
		"<div class='form-floating'>" +
		"<textarea class='form-control' placeholder='Address' id='floatingTextarea' style='height: 100px;'></textarea>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

}