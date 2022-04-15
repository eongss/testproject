/*-------------------------------------------------
title       : 메인
-------------------------------------------------*/

$(function(){

	//메인 fullpage
	$('.main_wrap').fullpage({
		navigation: false,								// 네비게이션 도트 사용
		scrollingSpeed: 700,							// 스크롤 속도
		responsiveWidth: 1200,							// 가로크기가 설정값 이상일때 자석 스크롤 동작
		responsiveHeight: 800,							// 세로크기가 설정값 이상일때 자석 스크롤 동작
        keyboardScrolling: true,						// 키보드 스크롤 사용
		scrollHorizontally: true,						// 키보드 스크롤 사용
		scrollOverflow: false,							// 섹션내에서 스크롤바 사용
		verticalCentered: true,							// 섹션내에서 세로 중앙 정렬
		css3: true,										// css3 사용
		easingcss3: 'ease',								// css3 애니메이션
		scrollingSpeed: 700,							// 스크롤 속도
		scrollBar: false,								// 스크롤바 출력
		onLeave: function(origin, destination, direction) {							// 전환 직전 실행되는 콜백함수
			if(direction == 'down'){
				$('#header').addClass('change');
			}
			else if(origin == 2 && direction == 'up'){
				$('#header').removeClass('change');
			}
		}
	});

	$(window).on("load resize", function (e) {
		$('body').each(function(){
			if ( $(this).hasClass('fp-viewing-section-2nd') == true )
			{
				$('#header').addClass('change');
			} else if ( $(this).hasClass('fp-viewing-section-3rd') == true )
			{
				$('#header').addClass('change');
			} else if ( $(this).hasClass('fp-viewing-section-4th') == true )
			{
				$('#header').addClass('change');
			} else if ( $(this).hasClass('fp-viewing-section-5th') == true )
			{
				$('#header').addClass('change');
			} else if ( $(this).hasClass('fp-viewing-section-footer') == true )
			{
				$('#header').addClass('change');
			} else {
				$('#header').removeClass('change');
			}
		});
	});

	// scroll 버튼
    $('.go_scroll').click( function(e) {
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});

	// TOP 버튼
	$('#quick_nav .up').click( function(e) {
		if($(window).width() > 1199){
			$.fn.fullpage.moveTo('section-1st', 1);
			$('#header').removeClass('change');
		}else{
			$("html, body").animate({scrollTop: 0}, 1100);
		}
		e.preventDefault();
	});

    //웹접근성
	/* 테스트중 
	$(document).on("keydown", function(e) {
		if(e.keyCode == "9") { // tab키
			//백탭
			if(e.shiftKey) { //+ shift키
				if($(".section02 a:first").is(":focus")) {
				  $.fn.fullpage.moveTo(1); 
				  $(".section01 button:last").attr("tabindex", 0).show().focus();
				  // 이전 섹션의 포커스 가능한 마지막 요소의 tabindex 지정, 포커스한다. 
				}
				if($(".section03 a:first").is(":focus")) {
				  $.fn.fullpage.moveTo(2);
				  $(".section02 button:last").attr("tabindex", 0).show().focus();
				}
				if($(".section04 a:first").is(":focus")) {
				  $.fn.fullpage.moveTo(3);
				  $(".section03 button:last").attr("tabindex", 0).show().focus();
				}
				if($(".section05 a:first").is(":focus")) {
				  $.fn.fullpage.moveTo(4);
				  $(".section04 button:last").attr("tabindex", 0).show().focus();
				}
				if($(".footbanner a:first").is(":focus")) {
				  $.fn.fullpage.moveTo(5);
				  $(".section05 button:last").attr("tabindex", 0).show().focus();
				}
			} else {
				//탭
				if($(".section01 button:last").is(":focus")) {
				  $.fn.fullpage.moveTo(2);
				}
				if($(".section02 button:last").is(":focus")) {
				  $.fn.fullpage.moveTo(3);
				}
				if($(".section03 button:last").is(":focus")) {
				  $.fn.fullpage.moveTo(4);
				}
				if($(".section04 button:last").is(":focus")) {
				  $.fn.fullpage.moveTo(5);
				}
				if($(".section05 button:last").is(":focus")) {
				  $.fn.fullpage.moveTo(6);
				}
			}
		}
	});
	*/

	//visual_slide
	var visual_total_count = $('.visual_slide > li').length;
	var visual_slide = $('.visual_slide').bxSlider({
		mode:'fade',
		touchEnabled: false,
		auto: true,
		autoControls: false,
		infiniteLoop: true,
		autoDelay: 13000,
		pause: 5000,
		//randomStart: true, //슬라이드 출력 랜덤
		autoHover: true,
		pager: false,
		onSliderLoad: function(){
			$('.visual_count > .total').text(visual_total_count);
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex) {
			$('.visual_count > .current').text(newIndex+1);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex) {
			if(newIndex == 0){
				$(".btn_main_play").css("display", "block");
			}else{
				$(".btn_main_play").css("display", "none");
			}
		}
	});
	
	$('.visual_btn > a').on('click', function(){
		if($(this).hasClass('prev') == true){
			visual_slide.goToPrevSlide();
			visual_slide.stopAuto();
		}else if($(this).hasClass('next') == true){
			visual_slide.goToNextSlide();
			visual_slide.stopAuto();
		}
	});
	$('.btn_visual_start').on('click',function(){
		$(this).css('display','none');
		$('.btn_visual_stop').css('display','block');
		$('.btn_visual_stop').focus();
		visual_slide.startAuto();
		return false;
	});
	$('.btn_visual_stop').on('click',function(){
		$(this).css('display','none');
		$('.btn_visual_start').css('display','block');
		$('.btn_visual_start').focus();
		visual_slide.stopAuto();
		return false;
	});
	$('.visual_control > a').bind('mouseenter',function(e){
		e.preventDefault();
		visual_slide.stopAuto();    
	});
	$('.visual_control > a').bind('mouseleave',function(e){
		e.preventDefault();
		if($('.visual_control .btn_visual_start').is(':visible') === true) { // 이전, 다음 버튼 오버시 슬라이드가 정지상태라면
			visual_slide.stopAuto();
		} else {
			visual_slide.startAuto();
		}    
	});

	var visual_active_key;
	$(".results_data li:last-child a").on("keydown",function(e){
		if(e.keyCode == 9 && !e.shiftKey ){
			visual_slide.reloadSlider({
				auto: false,
				infiniteLoop: false,
				speed: 0,
				controls: false,
				autoControls: false,
				autoHover: false,
				pager: false,
			});
			setTimeout(function(){
				$(".visual_slide > li:first-child > a").focus();
			},200);
			$(".visual_btn > a").remove();
			$(".visual_btn").prepend("<a href='#none' class='btn_visual_prev'>이전</a>");
			$(".visual_btn").append("<a href='#none' class='btn_visual_next'>다음</a>");
			$(".visual_control").hide();
			$(".visual_slide > li > a").on("focusin", function(e){
				e.preventDefault();
				var idx = $(this).parent().index();
				$(".visual_count > .current").text(idx + 1);
				visual_active_key = idx;
			});
			$(".btn_visual_prev").bind("click",function(e){
				e.preventDefault();
				if(visual_active_key==0){
				}else{
				  var slideNum = visual_active_key - 1;
				  $(".visual_slide > li > a").removeClass("on");
				  $(".visual_slide > li:eq("+slideNum+") > a").trigger("focus").addClass("on");
				  $(this).focus();
				}
			});
			$(".btn_visual_next").bind("click",function(e){
				e.preventDefault();
				lastSlide = $(".visual_slide > li").length;
				if(visual_active_key==lastSlide){
				}else{
					var slideNum = visual_active_key + 1;
					$(".visual_slide > li > a").removeClass("on");
					$(".visual_slide > li:eq("+slideNum+") > a").trigger("focus").addClass("on");
					$(this).focus();
				}
			});
			$(".visual_slide a:first-child").on("keyup",function(e){
				if(e.keyCode == 9 && !e.shiftKey ){
					$(".visual_slide > li > a").removeClass("on");
				}
			});
		}
	});


	//오늘의 전력정보
	 $('.power_for').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.power_nav',
		responsive: [
		{
			breakpoint: 1680,
			settings: {
				slidesToShow: 1,
				centerPadding: '25%',
				slidesToScroll:1
			}
		},
		{
			breakpoint: 1360,  
			settings: {
				slidesToShow: 1,
				centerPadding: '10%',
				slidesToScroll:1
			}
		},
		{
			breakpoint: 769,  
			settings: {
				slidesToShow: 1,
				centerPadding: '0',
				slidesToScroll:1,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 481,  
			settings: {
				slidesToShow: 1,
				centerPadding: '0',
				slidesToScroll:1,
				adaptiveHeight: true
			}
		}]
	});
	$('.power_nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.power_for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		variableWidth: true
	});

	 $('.power_for').slick('goTo', 1);

	//shortcut_slider
	//var shortcut_slider = $('.shortcut .list');  	
	//var slickOptions = { 		
	//	infinite: true, 		
	//	slidesToShow: 1, 		
	//	slidesToScroll: 1, 		
	//	dots:false, 		
	//	arrows:true 	
	//};  	


	//$(window).on('load resize', function() { 		
	//	if($(window).width() > 768) { 			
	//		shortcut_slider.slick('unslick'); 		
	//	}else{ 			
	//		shortcut_slider.not('.slick-initialized').slick(slickOptions); 		
	//	} 
	//});


	//popup_slide
	var popup_slide = $('.popup_slide').bxSlider({
		touchEnabled: true,
		auto: true,
		autoControls: false,
		infiniteLoop: true,
		pause: 5000,
		autoHover: true,
		pager: true,
		pagerType: 'short',
	});
	$('.popup_btn > a').on('click', function(){
		if($(this).hasClass('prev') == true){
			popup_slide.goToPrevSlide();
			popup_slide.stopAuto();
		}else if($(this).hasClass('next') == true){
			popup_slide.goToNextSlide();
			popup_slide.stopAuto();
		}
	});
	$('.btn_popup_start').on('click',function(){
		$(this).css('display','none');
		$('.btn_popup_stop').css('display','block');
		$('.btn_popup_stop').focus();
		popup_slide.startAuto();
		return false;
	});
	$('.btn_popup_stop').on('click',function(){
		$(this).css('display','none');
		$('.btn_popup_start').css('display','block');
		$('.btn_popup_start').focus();
		popup_slide.stopAuto();
		return false;
	});
	$('.popup_control > a').bind('mouseenter',function(e){
		e.preventDefault();
		popup_slide.stopAuto();    
	});
	$('.popup_control > a').bind('mouseleave',function(e){
		e.preventDefault();
		if($('.popup_control .btn_popup_start').is(':visible') === true) { // 이전, 다음 버튼 오버시 슬라이드가 정지상태라면
			popup_slide.stopAuto();
		} else {
			popup_slide.startAuto();
		}    
	});

	var popup_active_key;
	$(".results_data li:last-child a").on("keydown",function(e){
		if(e.keyCode == 9 && !e.shiftKey ){
			popup_slide.reloadSlider({
				auto: false,
				infiniteLoop: false,
				speed: 0,
				controls: false,
				autoControls: false,
				autoHover: false,
				pager: false,
			});
			setTimeout(function(){
				$(".popup_slide > li:first-child > a").focus();
			},200);
			$(".popup_btn > a").remove();
			$(".popup_btn").prepend("<a href='#none' class='btn_popup_prev'>이전</a>");
			$(".popup_btn").append("<a href='#none' class='btn_popup_next'>다음</a>");
			$(".popup_control").hide();
			$(".popup_slide > li > a").on("focusin", function(e){
				e.preventDefault();
				var idx = $(this).parent().index()+1;
				popup_active_key = idx - 1;
			});
			$(".btn_popup_prev").bind("click",function(e){
				e.preventDefault();
				if(popup_active_key==0){
				}else{
				  var slideNum = popup_active_key - 1;
				  $(".popup_slide > li > a").removeClass("on");
				  $(".popup_slide > li:eq("+slideNum+") > a").trigger("focus").addClass("on");
				  $(this).focus();
				}
			});
			$(".btn_popup_next").bind("click",function(e){
				e.preventDefault();
				lastSlide = $(".popup_slide > li").length;
				if(popup_active_key==lastSlide){
				}else{
					var slideNum = popup_active_key + 1;
					$(".popup_slide > li > a").removeClass("on");
					$(".popup_slide > li:eq("+slideNum+") > a").trigger("focus").addClass("on");
					$(this).focus();
				}
			});
			$(".popup_slide a:first-child").on("keyup",function(e){
				if(e.keyCode == 9 && !e.shiftKey ){
					$(".popup_slide > li > a").removeClass("on");
				}
			});
		}
	});


	//What's News
	$('.latest .group:first-of-type').addClass('active');
	$('.latest .group .label').on('click', function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});
    $('.latest .conBox li').each(function(){
		if ( $(this).find('span').hasClass('img') == true )
		{
			$(this).addClass('img_st');
		}
    });


	//footbanner
	var banner_slide = $('.banner_slide').bxSlider({
		touchEnabled: true,
		auto: true,
        autoHover: true,
		pager: false,
		controls: false,
		autoControls: true,
		maxSlides: 10,
		minSlides: 4,
		moveSlides: 1,
		slideWidth: 800,
		pause: 3000,
	});

	$('.banner_btn > a').on('click', function(){
		if($(this).hasClass('prev') == true){
			banner_slide.goToPrevSlide();
			banner_slide.stopAuto();
		}else if($(this).hasClass('next') == true){
			banner_slide.goToNextSlide();
			banner_slide.stopAuto();
		}
	});

	$('.btn_banner_start').on('click',function(){
		$(this).css('display','none');
		$('.btn_banner_stop').css('display','block');
		$('.btn_banner_stop').focus();
		banner_slide.startAuto();
		return false;
	});
	$('.btn_banner_stop').on('click',function(){
		$(this).css('display','none');
		$('.btn_banner_start').css('display','block');
		$('.btn_banner_start').focus();
		banner_slide.stopAuto();
		return false;
	});

	$('.banner_control > a').bind('mouseenter',function(e){
		e.preventDefault();
		banner_slide.stopAuto();    
	});
	$('.banner_control > a').bind('mouseleave',function(e){
		e.preventDefault();
		if($('.banner_control .btn_banner_start').is(':visible') === true) { // 이전, 다음 버튼 오버시 슬라이드가 정지상태라면
			banner_slide.stopAuto();
		} else {
			banner_slide.startAuto();
		}    
	});

	var banner_active_key;
	$(".section05 .go_scroll").on("keydown",function(e){
		if(e.keyCode == 9 && !e.shiftKey ){
			banner_slide.reloadSlider({
				auto: false,
				infiniteLoop: false,
				maxSlides: 10,
				minSlides: 2,
				moveSlides: 1,
				slideWidth: 160,
				pager: false,
				controls: false
			});
			setTimeout(function(){
				$(".banner_slide > li:first-child > a").focus();
			},200);
			$(".banner_btn > a").remove();
			$(".banner_btn").prepend("<a href='#none' class='btn_banner_prev'>이전</a>");
			$(".banner_btn").append("<a href='#none' class='btn_banner_next'>다음</a>");
			$(".banner_control").hide();
			$(".banner_slide > li > a").on("focusin", function(e){
				e.preventDefault();
				var idx = $(this).parent().index()+1;
				banner_active_key = idx - 1;
			});
			$(".btn_banner_prev").bind("click",function(e){
				e.preventDefault();
				if(banner_active_key==0){
				}else{
				  var slideNum = banner_active_key - 1;
				  $(".banner_slide > li > a").removeClass("on");
				  $(".banner_slide > li:eq("+slideNum+") > a").trigger("focus").addClass("on");
				  $(this).focus();
				}
			});
			$(".btn_banner_next").bind("click",function(e){
				e.preventDefault();
				lastSlide = $(".banner_slide > li").length;
				if(banner_active_key==lastSlide){
				}else{
					var slideNum = banner_active_key + 1;
					$(".banner_slide > li > a").removeClass("on");
					$(".banner_slide > li:eq("+slideNum+") > a").trigger("focus").addClass("on");
					$(this).focus();
				}
			});
			$(".banner_btn a:first-child").on("keyup",function(e){
				if(e.keyCode == 9 && !e.shiftKey ){
					$(".banner_slide > li > a").removeClass("on");
				}
			});
		}
	});
	
	
	/* 동영상 레이어팝업 삭제됨
	$(".btn_main_play a").click(function(){
	    $(".main_video").fadeIn("200");
	    $(".btn_main_play a").addClass("stop");
	    $(".main_video .close").focus();
	});
	
	$(".close").click(function(){
	    $(".main_video").fadeOut("200");
	    $(".btn_main_play a").removeClass("stop");
	    $(".btn_main_play a").focus();
	});
	*/
});


