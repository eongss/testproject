
function TowLevelAdd(info) {
	var listAdd = document.createElement('li');
	listAdd.classList.add('menu-name');
	listAdd.innerHTML = '<input type="text" class="menu-name-input rounded" placeholder="Menu Name"><span class=horizontal-line></span>' +
		"<button type='button' class='btn btn-succes'  style='margin-left: 10PX;'><i class='bi bi-cloud-arrow-up'></i>저장</button>";
	document.getElementById(info).append(listAdd);
}


function menuLineAdd() {
	var menuId = document.getElementById('manuListAdd');
	var addLine = document.createElement('li');
	addLine.innerHTML =
		"<span class=horizontal-line-depth1></span>" +
		"<input type=text class=menu-name-input rounded placeholder=Menu Name>" +
		"<button type='button' class='btn btn-succes'  style='margin-left: 10PX;'><i class='bi bi-cloud-arrow-up'></i>저장</button>";
	menuId.appendChild(addLine);
}