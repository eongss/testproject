//자동입력방지문자 새로고침
function captchaRefresh(){
	$("#captchaImg").removeAttr("src").attr("src","/simpleCaptcha.png"+'?number='+Math.random()*1000);
}
//자동방지문구 음성듣기
function audio(){
	var rand = Math.random();
	var uAgent = navigator.userAgent;
	var soundUrl = '/captchaAudio.es?rand='+rand;
	if(uAgent.indexOf('Trident')>-1 || uAgent.indexOf('MISE')>-1) {
		/*IE 경우 */
		audioPlayer(soundUrl);
	} else if(!!document.createElement('audio').canPlayType){
		/*Chrome 경우 */
		try {
			new Audio(soundUrl).play();
		} catch (e) {
			audioPlayer(soundUrl);
		}
	} else {
		window.open(soundUrl,'','width=1,height=1');
	}
}

//자동방지문구 새로고침
function getImage(){
	$("#captchaImg").removeAttr("src").attr("src","/captchaImg.es"+'?number='+Math.random()*1000);
}

//자동방지문구 음성
function audioPlayer(objUrl){
	$('#ccaudio').html('<bgsound src="' +objUrl +'">');
}

//자동방지문구 값 체크
function chkAnswer(){
	$.ajax({
		url : "/chkAnswer.es", 
		type : "GET",
		cache : false,
		dataType : "json",
		data : {
			answer : $('#captchaStr').val()
		},
		async : false,
		success : function(data){
			if(data == 200) {
				sw = true; 
			}else{
				getImage();
				$('#captchaStr').val('');
				sw = false; 
			}
		},
		error : function(request, status, error) {
			alert('에러');
			getImage();
			$('#captchaStr').val('');
			sw = false; 
		}
	});
	return sw;
}
