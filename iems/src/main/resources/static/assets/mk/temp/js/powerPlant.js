function powerPlantAdd() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'>" +
		"<a class='nav-link active' href='#'>발전소</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>설비</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>사업자</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body-weidth-overflow'>" +
		"<div class='menu-list-card2 formBox-text'>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>발전소 명칭</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>발전소 유형</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'><option selected=''>Choose...</option><option>...</option></select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>설치 유형</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'><option selected=''>Choose...</option><option>...</option></select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>준공일자</label><div class='col-md-9'><input type='date' class='form-control'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>사용전 검사일</label><div class='col-md-9'><input type='date' class='form-control'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>상업운전 개시일</label><div class='col-md-9'><input type='date' class='form-control'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>계통 접속점</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>계통 접속점 환경</label>" +
		"<div class='col-md-5'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"<div class='col-md-4'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>총 발전용량</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>우편번호</label>" +
		"<div class='col-md-7'><input type='text' class='form-control' id='inputEmail'></div>" +
		"<div class='col-md-2'><button type='button' class='btn btn-seacch'><i class='bi bi-search'></i>조회</button></div>" +
		"</div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>발전소 주소</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>주소 상세</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>위도</label>" +
		"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
		"<div class='col-md-2'><label for='inputEmail3' class='col-form-label'>경도</label></div>" +
		"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>기상계측기준점</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label><div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div></div>" +
		"<div class='text-center margin-top-one'><button type='button' class='btn btn-succes'><i class='bi bi-cloud-arrow-up'></i>저장</button></div>" +
		"</div>" +
		"</div>";


	AdId.appendChild(addDiv);

}

function powerPlantModify(info) {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'>" +
		"<a class='nav-link active' href='#'>발전소</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>설비</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>사업자</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body-weidth-overflow'>" +
		"<div class='menu-list-card2 formBox-text'>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>발전소 명칭</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail' value=" + info + "></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>발전소 유형</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'><option selected=''>Choose...</option><option>...</option></select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>설치 유형</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'><option selected=''>Choose...</option><option>...</option></select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>준공일자</label><div class='col-md-9'><input type='date' class='form-control'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>사용전 검사일</label><div class='col-md-9'><input type='date' class='form-control'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>상업운전 개시일</label><div class='col-md-9'><input type='date' class='form-control'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>계통 접속점</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>계통 접속점 환경</label>" +
		"<div class='col-md-5'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"<div class='col-md-4'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>총 발전용량</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>우편번호</label>" +
		"<div class='col-md-7'><input type='text' class='form-control' id='inputEmail'></div>" +
		"<div class='col-md-2'><button type='button' class='btn btn-seacch'><i class='bi bi-search'></i>조회</button></div>" +
		"</div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>발전소 주소</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>주소 상세</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>위도</label>" +
		"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
		"<div class='col-md-2'><label for='inputEmail3' class='col-form-label'>경도</label></div>" +
		"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>기상계측기준점</label><div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div></div>" +
		"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label><div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div></div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-delete'><i class='bi bi-trash' style='margin-right: 10px;'></i>삭제</button>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up' style='margin-right: 10px;'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";


	AdId.appendChild(addDiv);

}

function facilitiesAdd() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>발전소</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link active' href='#'>설비</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>사업자</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body-weidth-overflow'>" +
		"<div class='menu-list-card2 formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>발전소 명</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>등록설비구분</label>" +
		"<div class='col-md-9'>" +
		"<select id='facilitiesStateId' class='form-select' onchange='javascript:facilitiesState(this);'>" +
		"<option selected=''>패널</option>" +
		"<option>인버터</option>" +
		"<option>전력량계</option>" +
		"<option>서버</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>제조사코드</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>모델코드</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>시리얼번호</label>" +
		"<div class='col-md-9'>" +
		"<input type='text' class='form-control' id='inputEmail'>" +
		"</div>" +
		"</div>" +
		"<div id='facilitiesAdd'><div id='facilitiesDt'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>설치 일자</label>" +
		"<div class='col-md-9'>" +
		"<input type='date' class='form-control'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>보증시작일자</label>" +
		"<div class='col-md-9'>" +
		"<input type='date' class='form-control'>" +
		"</div>" +
		"</div>" +
		"<div class='text-center margin-top-one'>" +
		"<button type='button' class='btn btn-succes'><i class='bi bi-cloud-arrow-up'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);
}

function facilitiesModify(info) {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>발전소</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link active' href='#'>설비</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>사업자</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body-weidth-overflow'>" +
		"<div class='menu-list-card2 formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>발전소 명</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>등록설비구분</label>" +
		"<div class='col-md-9'>" +
		"<select id='facilitiesStateId' class='form-select' onchange='javascript:facilitiesState(this);'>" +
		"<option>패널</option>" +
		"<option>인버터</option>" +
		"<option>전력량계</option>" +
		"<option>서버</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>제조사코드</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>모델코드</label>" +
		"<div class='col-md-9'>" +
		"<select id='inputState' class='form-select'>" +
		"<option selected=''>Choose...</option>" +
		"<option>...</option>" +
		"</select>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>시리얼번호</label>" +
		"<div class='col-md-9'>" +
		"<input type='text' class='form-control' id='inputEmail'>" +
		"</div>" +
		"</div>" +
		"<div id='facilitiesAdd'><div id='facilitiesDt'></div></div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>설치 일자</label>" +
		"<div class='col-md-9'>" +
		"<input type='date' class='form-control'>" +
		"</div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>보증시작일자</label>" +
		"<div class='col-md-9'>" +
		"<input type='date' class='form-control'>" +
		"</div>" +
		"</div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-delete'><i class='bi bi-trash' style='margin-right: 10px;'></i>삭제</button>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up' style='margin-right: 10px;'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

	document.getElementById('facilitiesStateId').value = info;
	facilitiesState2(info);

}

function buisnessmanAdd() {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>발전소</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>설비</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link active' href='#'>사업자</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body-weidth-overflow'>" +
		"<div class='menu-list-card2 formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>사업자 번호</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>사업자 명칭</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>대표자 명</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>담당자 명</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>담당자 연락처</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>담당자 이메일</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>우편번호</label>" +
		"<div class='col-md-7'><input type='text' class='form-control' id='inputEmail'></div>" +
		"<div class='col-md-2'><button type='button' class='btn btn-seacch'><i class='bi bi-search'></i>조회</button></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>사업자 주소</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>주소 상세</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>" +
		"<div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div>" +
		"</div>" +
		"<div class='text-center margin-top-one'>" +
		"<button type='button' class='btn btn-succes'><i class='bi bi-cloud-arrow-up'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

}

function buisnessmanModify(info) {
	var AdId = document.getElementById('dethAdFormBox');
	var ReId = document.getElementById('dethReFormBox');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'dethReFormBox';

	addDiv.innerHTML =
		"<div class='card-header formBox'>" +
		"<ul class='nav nav-pills card-header-pills'>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>발전소</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link' href='#'>설비</a>" +
		"</li>" +
		"<li class='nav-item'>" +
		"<a class='nav-link active' href='#'>사업자</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"<div class='card-body-weidth-overflow'>" +
		"<div class='menu-list-card2 formBox-text'>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>사업자 번호</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>사업자 명칭</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail' value=" + info + "></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>대표자 명</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>담당자 명</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>담당자 연락처</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>담당자 이메일</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>우편번호</label>" +
		"<div class='col-md-7'><input type='text' class='form-control' id='inputEmail'></div>" +
		"<div class='col-md-2'><button type='button' class='btn btn-seacch'><i class='bi bi-search'></i>조회</button></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>사업자 주소</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>주소 상세</label>" +
		"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
		"</div>" +
		"<div class='row mb-3'>" +
		"<label for='inputEmail3' class='col-md-3 col-form-label'>참고 사항</label>" +
		"<div class='col-md-9'><textarea class='form-control' id='floatingTextarea' style='height: 100px;'></textarea></div>" +
		"</div>" +
		"<div class='text-center'>" +
		"<button type='button' class='btn btn-delete'><i class='bi bi-trash' style='margin-right: 10px;'></i>삭제</button>" +
		"<button type='button' class='btn btn-succes' style='margin-left: 5px;'><i class='bi bi-cloud-arrow-up' style='margin-right: 10px;'></i>저장</button>" +
		"</div>" +
		"</div>" +
		"</div>";

	AdId.appendChild(addDiv);

}
function facilitiesState(obj) {

	var AdId = document.getElementById('facilitiesAdd');
	var ReId = document.getElementById('facilitiesDt');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'facilitiesDt';

	if (obj.value == '패널') {
		addDiv.innerHTML =
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>설치수량 총계</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>발전 용량</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>패널구성 직렬</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>패널구성 병렬</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>발전 용량</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>";
	} else if (obj.value == '인버터') {
		addDiv.innerHTML =
			"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>발전 용량</label><div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>";
	} else if (obj.value == '전력량계') {
		addDiv.innerHTML =
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>용도</label>" +
			"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>CT비</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>PT비</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>";
	} else if (obj.value == '서버') {
		addDiv.innerHTML =
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>서버용코드</label>" +
			"<div class='col-md-9'>" +
			"<select id='inputState' class='form-select'><option selected=''>Choose...</option><option>...</option></select>" +
			"</div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>CPU</label>" +
			"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>CORE</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-1 '>개</label>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>MEM</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-1 '>개</label>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>DISK</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-1 '>개</label>" +
			"</div>";
	}

	AdId.appendChild(addDiv);

}

function facilitiesState2(info) {

	var AdId = document.getElementById('facilitiesAdd');
	var ReId = document.getElementById('facilitiesDt');
	ReId.remove();
	var addDiv = document.createElement('div');
	addDiv.id = 'facilitiesDt';

	if (info == '패널') {
		addDiv.innerHTML =
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>설치수량 총계</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>발전 용량</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>패널구성 직렬</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>패널구성 병렬</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>발전 용량</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>";
	} else if (info == '인버터') {
		addDiv.innerHTML =
			"<div class='row mb-3'><label for='inputEmail3' class='col-md-3 col-form-label'>발전 용량</label><div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>";
	} else if (info == '전력량계') {
		addDiv.innerHTML =
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>용도</label>" +
			"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>CT비</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>PT비</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>";
	} else if (info == '서버') {
		addDiv.innerHTML =
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>서버용코드</label>" +
			"<div class='col-md-9'>" +
			"<select id='inputState' class='form-select'><option selected=''>Choose...</option><option>...</option></select>" +
			"</div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>CPU</label>" +
			"<div class='col-md-9'><input type='text' class='form-control' id='inputEmail'></div>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>CORE</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-1 '>개</label>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>MEM</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-1 '>개</label>" +
			"</div>" +
			"<div class='row mb-3'>" +
			"<label for='inputEmail3' class='col-md-3 col-form-label'>DISK</label>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<div class='col-md-3'><input type='text' class='form-control' id='inputEmail'></div>" +
			"<label for='inputEmail3' class='col-md-1 '>개</label>" +
			"</div>";
	}

	AdId.appendChild(addDiv);

}