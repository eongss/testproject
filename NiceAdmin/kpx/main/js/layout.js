/*-------------------------------------------------
title       : 레이아웃
-------------------------------------------------*/

$(document).ready(function(){
	
	//skip
	$('#skip_nav a').click(function(){
		var skipTo="#"+this.href.split('#')[1];
		$(skipTo).attr('tabindex', -1).on('blur focusout', function () {
            $(this).removeAttr('tabindex');
        }).focus();
	});

	 /*slick 공통*/
	$('.pause').click(function() {
	    $(this).siblings('div').slick('slickPause');
	    $(this).siblings('ul').slick('slickPause');
	    $(this).hide();
	    $(this).siblings('.play').show();
	});
	$('.play').click(function() {
	    $(this).siblings('div').slick('slickPlay');
	    $(this).siblings('ul').slick('slickPlay');
	    $(this).hide();
	    $(this).siblings('.pause').show();
	});
	
	
	 // 풋배너 슬라이드
    $('.footbanner .list').slick({
		slide: 'li',	//슬라이드 되어야 할 태그 ex) div, li 
		infinite : true, 	//무한 반복 옵션	 
		slidesToShow : 7,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		autoplay : true,			// 자동 스크롤 사용 여부
		pauseOnHover : true,	// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		draggable : false,	//드래그 가능 여부 
		slickPlay:true,	//
		slickPause:true,
		dots:true
   });

	/*스크롤시 header class 추가*/
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 1) {
			$('#header').addClass('change');
		} else {
			$('#header').removeClass('change');
		}
	});


	// 상단 
	$('#header, #header a, #header input, #header button').on('mouseover focus',function()
	{	
		$('#header').addClass('hover'); 
	});
	$('#header, #header a, #header input, #header button').on('mouseleave blur',function()
	{
		$('#header').removeClass('hover'); 
	});

    // 사이트바로가기
    $('.hnb1').classtoggle
    ({
        'button'            : '.label',     // 이벤트 받을 타겟 선택
        'respond'           : true,         // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
        'respondWidth'      : '1024',       // 반응형 가로 사이즈
    });

    // 언어선택
	$('.global > a').click(function(){
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$('.global > a > span').text('언어선택 열기');
			$('body').removeClass('header_hover');
			$('#header').addClass('hover');
		}else{
			searchClose();
			$(this).parent().addClass('active');
			$('.global > a > span').text('언어선택 닫기');
			$('body').addClass('header_hover');		}
		return false;
	});

	//검색어
	$('.hnb_search > .label').click(function(){
		if($(this).parent().hasClass('close')){
			$(this).parent().removeClass('close');
			$('.search').stop().slideUp(250);
			$('.hnb_search > .label > span').text('열기');
			$('body').removeClass('header_hover');
			$('.mask').remove();
			$('#header').addClass('hover');
		}else{
			globalClose();
			$('.search').stop().show();
			$(this).parent('.hnb_search').addClass('close');
			$('.hnb_search > .label > span').text('닫기');
			$('body').addClass('header_hover');
			$('body').append('<div class="mask"></div>');
		}
		return false;
	});
	$('.search .close').click(function(){
		$('.search').stop().slideUp(250);
		$('.hnb_search').removeClass('close');
		$('.hnb_search > .label > span').text('열기');
		$('body').removeClass('header_hover');
		$('.mask').remove();
		$('#header').addClass('hover');
	});

    // 주메뉴
    //$('#gnb').gnb1();

	//주메뉴 마우스 오버
	$('#head_menu > li').on('mouseover',function(){	
		$('#header').addClass('active');		
		$('#head_menu .submenu').stop().slideDown(200);
		$(this).addClass('active');
		searchClose();
		globalClose();
	});
	$('#head_menu > li > a').on('focus',function(){		
		$('#header').addClass('active');
		$('#head_menu .submenu').stop().slideDown(200);
		$(this).addClass('active');
		searchClose();
		globalClose();
	});
	$('#head_menu > li').on('mouseleave blur',function(){
		$('#header').removeClass('active');
		$('#head_menu .submenu').stop().slideUp(200);
		$(this).removeClass('active');
	});
	$('#gnb2 a, #header .hnb_search a').on('focus',function(){	
		$('#header').removeClass('active');
		$('#head_menu .submenu').stop().slideUp(200);
	});

    // 전체메뉴
	$('#gnb2').gnb2();

	
	
    
    // 퀵메뉴
	$(window).on("load resize", function (e) {
		$('#quick').each(function(){
			var $window = $(window);
			if ( $window.width() > 1199)
			{
				$('#quick ul a, #quick div a').on('mouseover focus',function()
				{	
					$(this).parent().parent().parent().addClass('quick_hover'); 
				});
				$('#quick ul a, #quick div a').on('mouseleave blur',function()
				{
					$('#quick').removeClass('quick_hover'); 
				});
			} else {
				$('#quick').find('.control_m').on('click', function() {
					if ( $(this).hasClass('open') == true ) {
						$('#quick').addClass('quick_hover');
					}
					else {
						$('#quick').removeClass('quick_hover');
					}
					return false;
				});
			}
		});
	});

	$(".control.open").click(function(){
		setTimeout(function () {
			$('.modal .prev').focus();
		}, 300);
	});

    // 퀵메뉴 하단
	var $window = $(window);
	var $document = $(document);
	var $footer = $('#footer');
	var $quickNav = $('#quick_nav');
	$window.on('load scroll', function() 
	{
	    if ($window.scrollTop() < $document.height() - $window.height() - $footer.outerHeight()) 
		{
		//if ($window.scrollTop() < $document.height() - $window.height()) {
			$quickNav.addClass('btn_top_fix');
			$quickNav.css({'top':'auto'});
			if ( $window.width() > 1439)
			{
				$quickNav.css({'bottom':'63px'});
			} else if ( $window.width() <= 1439 && $window.width() > 1024 )
			{
				$quickNav.css({'bottom':'30px'});
			} else
			{
				$quickNav.css({'bottom':'24px'});
			}
		} else 
		{
			$quickNav.removeClass('btn_top_fix');
			$quickNav.css({'bottom':'auto'});
			if ( $window.width() > 1439)
			{
				$quickNav.css({'top': - $quickNav.outerHeight() - 63});
			} else if ( $window.width() <= 1439 && $window.width() > 1024 )
			{
				$quickNav.css({'top': - $quickNav.outerHeight() - 30});
			} else
			{
				$quickNav.css({'top': - $quickNav.outerHeight() - 24});
			}
		}
	});

    // 관련사이트
    $('.related .group').classtoggle
    ({
        'button'            : '.label'  // 이벤트 받을 타겟 선택
    });

	// 접근성 관련 포커스 강제 이동
	accessibilityFocus();
	$('.layer_pop').each(function(){
		var data_focus = $(this).attr('id');
		$(this).attr({'data-focus':data_focus,'data-focus-prev':data_focus+'_close'});
		$(this).find('.layerpop_close').attr({'data-focus':data_focus+'_close','data-focus-next':data_focus});
	});


});


/*-------------------------------------------------
title       : 메뉴1
-------------------------------------------------*/

$.fn.gnb1 = function( options )
{
    var settings = $.extend
    ({
        'actionType'        : 'mouseenter focusin',     // 메뉴가 동작하는 액션 (mouseenter focusin, click)
        'target'            : '#header',                // 활성화 시 클래스가 추가되는 요소 (공란일 경우 오버되는 a 링크 부모 li에만 클래스 추가됨)        
        'class'             : 'active',                 // 추가할 클래스명 (target에 추가됨)
        'depth2'            : '.submenu',               // 서브메뉴
        'closeBtn'          : '.close'                  // 닫기 버튼이 별도로 존재하는 경우 (닫기 버튼은 클릭시에만)
    }, 
    options );

    return this.each(function()
    {
        var $selecter = $(this);

        $selecter.find('a').on(settings.actionType, function()
        {
            if ( $(this).parent('li').hasClass('active') == false )
            {
                $(this).parent('li').addClass('active');
                $(this).parent('li').siblings('li').removeClass('active');

                $(this).parents('li').addClass('active');
                $(this).parents('li').siblings('li').removeClass('active');

                if (settings.target != '')
                {
                    $(settings.target).addClass(settings.class);
                }
            }

            if ( settings.actionType == 'click' )
            {
                if ( $(this).next('*').length > 0 )
                {
                    return false;
                }
            }
        });

        if ($selecter.find(settings.closeBtn).length == 1)
        {
            $selecter.find(settings.closeBtn).on('click', function()
            {
                $selecter.find('li').removeClass(settings.class);
                $(settings.target).removeClass(settings.class);

                return false;
            });
        }
        else
        {
            // 마우스 아웃
            $(document).on('mousemove', function(e)
            {
                cursorY = e.pageY;

                if ( $selecter.find('li.active').length > 0 )
                {
                    if (cursorY > parseInt($selecter.find(settings.depth2).offset().top + $selecter.find('.active').find(settings.depth2).height()) )
                    {
                        setTimeout(function()
                        {
                            $selecter.find('li').removeClass(settings.class);
                            $(settings.target).removeClass(settings.class);

                        }, 200);
                    }
                }
            });
        }

        // 탭 아웃
        $selecter.find('a:last').keydown(function(e) 
        {
            if(e.keyCode === 9) 
            {
                $selecter.find('li').removeClass(settings.class);
                $(settings.target).removeClass(settings.class);
            }
        });

        // 역탭 아웃
        $selecter.find('a:first').keydown(function(e) 
        {
            if(e.keyCode === 9 && e.shiftKey) 
            {
                $selecter.find('li').removeClass(settings.class);
                $selecter.removeClass(settings.classname);
            }
        });
    });
};


/*-------------------------------------------------
title       : 메뉴2
-------------------------------------------------*/

$.fn.gnb2 = function( options )
{
    var settings = $.extend
    ({
        'btnOpen'           : '.open',      // 최초 메뉴를 여는 버튼
        'btnClose'          : '.close',     // 닫기 버튼이 별도로 존재하는 경우
        'classAdd'          : '#gnb2',      // 활성화 시 클래스가 추가되는 요소
        'classAdd2'         : '#gnb2 .mnfirst',      // 2차 메뉴 초기 활성화되는 클래스명
        'className'         : 'active',     // 추가할 클래스명 (classAdd에 추가됨)
        'siblings'			: true,		    // active 될 때 형제요소의 반응 여부
        'responsive'        : true,         // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / false 시 반응형 아닐 때도 클릭 동작함)
        'responsiveWidth'   : '1199',       // 반응형 가로 사이즈
        'target'            : 'html',       // 활성화 시 클래스가 추가되는 요소 (공란일 경우 오버되는 a 링크 부모 li에만 클래스 추가됨)        
        'class'             : 'sitemap',    // 추가할 클래스명 (target에 추가됨)
        'target2'            : 'body',       // 활성화 시 클래스가 추가되는 요소 (공란일 경우 오버되는 a 링크 부모 li에만 클래스 추가됨)        
        'class2'             : 'header_hover',    // 추가할 클래스명 (target에 추가됨)
        	
    }, 
    options );
    
    // gnb2 2차 메뉴 가지고 있는 li에 클래스 추가
    $('#gnb2 .submenu > ul > li').each(function(i)
    {
        if ( $(this).find('div').length > 0 )
        {
            $(this).addClass('type1');
        }
    });
    
    return this.each(function()
    {
        var $selecter = $(this);

        // 열기
        $selecter.find(settings.btnOpen).on('click', function()
        {
            if ( $selecter.find(settings.btnClose).length > 0 )
            {            
                $(settings.classAdd).addClass(settings.className);
                $(settings.target).addClass(settings.class);
                $(settings.target2).addClass(settings.class2);
            }
            
            else
            {
                if ( $(settings.classAdd).hasClass(settings.className) == false )
                {
                    $(settings.classAdd).addClass(settings.className);
                }
                else
                {
                    $(settings.classAdd).removeClass(settings.className);
                }
            }
			searchClose();
            return false;
        });
        
        // 닫기
        if ( $selecter.find(settings.btnClose).length > 0 )
        {
            $selecter.find(settings.btnClose).on('click', function()
            {
                $(settings.classAdd).removeClass(settings.className);
                $(settings.target).removeClass(settings.class);
                $(settings.target2).removeClass(settings.class2);

                return false;
            });
        };

        //$selecter.find('a').on("click", function(event){
        //	if($(this).parent('li').children('div').children('ul').children('li').length > 0){
        //		if(!$(this).parent('li').is('[class^=lnb]')){
	    //    		event.preventDefault();
	    //    		if($(this).parent('li').hasClass("active")){
	    //    			$(this).parent('li').removeClass("active");
	    //    		}else{
	    //    			$("#head_menu_all li").removeClass('active');
	    //    			$(this).parent('li').addClass("active");
	    //    		}
        //		}
        //	}
        //});

        // 메뉴 클릭 이벤트
        function menuAction($this)
        {
        	 if ( $this.next('*').length > 0 && $this.next('*').css('display') != 'none' )
            {
                
                $this.parent('li').siblings('li').removeClass('active');
                $this.parent('li').addClass('active');

                event.preventDefault();
            }      
        }

        // 메뉴
        $selecter.find('li a').on('click', function(e)
        {
            if ( settings.responsive == true )
            {
                if ( $(window).width() <= settings.responsiveWidth )
                {
                    menuAction($(this));
                }
            }
            else
            {
                menuAction($(this));
            }
        });
		$(settings.classAdd2).addClass('active');
		return false;
    });
};


/*-------------------------------------------------
title       : 클래스를 넣고 빼고
-------------------------------------------------*/

$.fn.classtoggle = function( options )
{
    var settings = $.extend
    ({
        'button'            : '.open',      // 이벤트 받을 타겟 선택
        'action'            : 'click',      // 액션 선택 (click | over)
        'classname'         : 'active',     // 추가할 클래스명
        'accordion'			: false,		// active 될 때 형제요소의 반응 여부
        'respond'           : false,        // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
        'respondWidth'      : '768',        // 반응형 가로 사이즈
        'close'             : '.close'      // 닫기 버튼이 별도로 존재하는 경우 (닫기 버튼은 클릭시에만)
    }, 
    options );

    return this.each(function()
    {
        var $selecter = $(this);

        function clickActive()
        {
            if ( $selecter.hasClass(settings.classname) == false )
            {
                $selecter.addClass(settings.classname);

                if (settings.accordion == true)
                {
                    $selecter.siblings().removeClass(settings.classname);
                }
            }
            else
            {
                // 닫기 버튼 존재할 경우 토글되지 않음
                if ( $selecter.find(settings.close).length == 0 )
                {
                    $selecter.removeClass(settings.classname);
                }
            }
        }

        if ( settings.action == 'click' )
        {
            $selecter.find(settings.button).on(settings.action, function()
            {
                if ( settings.respond == false )
                {
                    clickActive();

                    return false;
                }
                else
                {
                    if ( $(window).width() <= settings.respondWidth )
                    {
                        clickActive();

                        return false;
                    }
                    else
                    {
                        $selecter.find(settings.button).off();
                    }
                }
            });
        }
        else
        {
            $selecter.find(settings.button).on
            ({
                mouseenter  : function()
                {
                    $selecter.addClass(settings.classname);
                },
                focusin     : function()
                {
                    $selecter.addClass(settings.classname);
                },
                mouseleave  : function()
                {
                    $selecter.removeClass(settings.classname);
                },
                focusout    : function()
                {
                    $selecter.removeClass(settings.classname);
                }
            });
        }

        // 닫기 버튼이 별도로 존재하는 경우
        if ( $selecter.find(settings.close).length > 0 )
        {
            $selecter.find(settings.close).on('click', function()
            {
                $selecter.removeClass(settings.classname);

                return false;
            });
        }
        else
        {
            // 탭 아웃
            $selecter.find('a:last').keydown(function(e) 
            {
                if(e.keyCode === 9) 
                {
                    $selecter.removeClass(settings.classname);
                }
            });

            // 역탭 아웃
            $selecter.find('a:first').keydown(function(e) 
            {
                if(e.keyCode === 9 && e.shiftKey) 
                {
                    $selecter.removeClass(settings.classname);
                }
            });
        }
    });
};






// 접근성 관련 포커스 강제 이동
function accessibilityFocus() { 
	$(document).on('keydown', '[data-focus-prev], [data-focus-next]', function(e){ 
		var next = $(e.target).attr('data-focus-next'), 
			prev = $(e.target).attr('data-focus-prev'),
			target = next || prev || false; 
		if(!target || e.keyCode != 9) { 
			return; 
		} 
		if( (!e.shiftKey && !!next) || (e.shiftKey && !!prev) ) { 
			setTimeout(function(){ 
				$('[data-focus="' + target + '"]').focus();
			}, 1);
		}
	});
}

//언어선택 비활성화
function globalClose(){
	$('.global').removeClass('active');
	$('.global > a > span').text('언어선택 열기');
	$('body').removeClass('header_hover');
}


//검색어 비활성화
function searchClose(){
	$('.search').stop().slideUp(250);
	$('.hnb_search').removeClass('close');
	$('.hnb_search > .label > span').text('열기');
	$('body').removeClass('header_hover');
	$(".mask").remove();
	$('#header').addClass('hover');
}


function gnb2Close(){
	$('html').removeClass('sitemap');
	$('#gnb2').removeClass('active');
}
