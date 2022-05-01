<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<!-- ======= Header ======= -->
<header id="header" class="header fixed-top d-flex align-items-center">
	<div class="d-flex align-items-center justify-content-between">
		<a href="/operational/dashboard"class="logo d-flex align-items-center">
			<img src="/assets/mk/img/i-ims.png">
		</a> 
		<i class="bi bi-list toggle-sidebar-btn" style="margin-left: 0%;"></i>
	</div>
	<nav class="header-nav ms-auto">
		<ul class="d-flex align-items-center">
			<li class="nav-item d-block d-lg-none"><a class="nav-link nav-icon search-bar-toggle " href="#"><i class="bi bi-search"></i> </a></li>
			<div class="d-flex align-items-center justify-content-between">
				<span class="d-none d-lg-block" id="spanTime"></span>
			</div>
			<li class="nav-item dropdown pe-3">
				<a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
					<span class="d-none d-md-block dropdown-toggle ps-2">Admin</span>
				</a>
				<ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
					<li class="dropdown-header"><h6>Kevin Anderson</h6><span>Web Designer</span></li>
					<li><hr class="dropdown-divider"></li>
					<li><a class="dropdown-item d-flex align-items-center" href="#"> <i class="bi bi-person"></i> <span>My Profile</span></a></li>
					<li><hr class="dropdown-divider"></li>
					<li><a class="dropdown-item d-flex align-items-center" href="/logout"><i class="bi bi-box-arrow-right"></i><span>Sign Out</span></a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<!-- End Icons Navigation -->
</header>
<!-- End Header -->

<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">
	<ul class="sidebar-nav" id="sidebar-nav">
		<li class="nav-item top-margin-three"><a class="nav-link  <c:if test="${nav1 ne 'dashboard' }">collapsed</c:if>" href="/operational/dashboard"><i class="bi bi-app"></i><span>운영현황판</span></a></li>
		<li class="nav-item">
			<a class="nav-link <c:if test="${nav1 ne 'operational' }">collapsed</c:if>" data-bs-target="#current-nav" data-bs-toggle="collapse"> <i class="bi bi-app"></i><span>현황</span><i class="bi bi-chevron-down ms-auto"></i> </a>
			<ul id="current-nav" class="nav-content collapse <c:if test="${nav1 eq 'operational' }">show</c:if>" data-bs-parent="#sidebar-nav">
				<li><a href="/operational/dysgenesis" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'dysgenesis' }">active</c:if>"><i class="bi bi-circle"></i><span>장애발생현황</span></a></li>
				<li><a href="/operational/station1" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'station1' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소 운영상태</span></a></li>
				<li><a href="/operational/station2" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'station2' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소 운영상태2</span></a></li>
				<li><a href="/operational/production" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'production' }">active</c:if>"><i class="bi bi-circle"></i><span>전력생산</span></a></li>
				<li><a href="/operational/sell" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'sell' }">active</c:if>"><i class="bi bi-circle"></i><span>전력판매</span></a></li>
				<li><a href="/operational/market" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'market' }">active</c:if>"><i class="bi bi-circle"></i><span>전격거래시장현황</span></a></li>
				<li><a href="/operational/server" class="<c:if test="${nav1 eq 'operational' && nav2 eq 'server' }">active</c:if>"><i class="bi bi-circle"></i><span>서버운영현황</span></a></li>
			</ul></li>
		<li class="nav-item">
			<a class="nav-link <c:if test="${nav1 ne 'history' }">collapsed</c:if>" data-bs-target="#antecedents-nav" data-bs-toggle="collapse"> <i class="bi bi-app"></i><span>이력</span><i class="bi bi-chevron-down ms-auto"></i> </a>
			<ul id="antecedents-nav" class="nav-content collapse <c:if test="${nav1 eq 'history' }">show</c:if>" data-bs-parent="#sidebar-nav">
				<li><a href="/history/price" class="<c:if test="${nav1 eq 'history' && nav2 eq 'price' }">active</c:if>"><i class="bi bi-circle"></i><span>가격변동</span></a></li>
				<li><a href="/history/dysgenesis" class="<c:if test="${nav1 eq 'history' && nav2 eq 'dysgenesis' }">active</c:if>"><i class="bi bi-circle"></i><span>장애발생이력</span></a></li>
				<li><a href="/history/production" class="<c:if test="${nav1 eq 'history' && nav2 eq 'production' }">active</c:if>"><i class="bi bi-circle"></i><span>전력생산이력</span></a></li>
				<li><a href="/history/sell" class="<c:if test="${nav1 eq 'history' && nav2 eq 'sell' }">active</c:if>"><i class="bi bi-circle"></i><span>전력판매이력</span></a></li>
				<li><a href="/history/connection" class="<c:if test="${nav1 eq 'history' && nav2 eq 'connection' }">active</c:if>"><i class="bi bi-circle"></i><span>접속이력</span></a></li>
			</ul></li>
		<li class="nav-item">
			<a class="nav-link <c:if test="${nav1 ne 'measure' }">collapsed</c:if>" data-bs-target="#measure-nav" data-bs-toggle="collapse"> <i class="bi bi-app"></i><span>계측</span><i class="bi bi-chevron-down ms-auto"></i> </a>
			<ul id="measure-nav" class="nav-content collapse <c:if test="${nav1 eq 'measure' }">show</c:if>" data-bs-parent="#sidebar-nav">
				<li><a href="/measure/facilities" class="<c:if test="${nav1 eq 'measure' && nav2 eq 'facilities' }">active</c:if>"><i class="bi bi-circle"></i><span>등록설비 조회</span></a></li>
				<li><a href="/measure/electricity" class="<c:if test="${nav1 eq 'measure' && nav2 eq 'electricity' }">active</c:if>"><i class="bi bi-circle"></i><span>전력량계 계측결과</span></a></li>
				<li><a href="/measure/weather" class="<c:if test="${nav1 eq 'measure' && nav2 eq 'weather' }">active</c:if>"><i class="bi bi-circle"></i><span>기상정보 계측결과</span></a></li>
				<li><a href="/measure/server" class="<c:if test="${nav1 eq 'measure' && nav2 eq 'server' }">active</c:if>"><i class="bi bi-circle"></i><span>서버자원 계측결과</span></a></li>
			</ul>
		</li>
		<li class="nav-item">
			<a class="nav-link <c:if test="${nav1 ne 'statistics' }">collapsed</c:if>" data-bs-target="#statistics-nav" data-bs-toggle="collapse"> <i class="bi bi-app"></i><span>통계</span><i class="bi bi-chevron-down ms-auto"></i></a>
			<ul id="statistics-nav" class="nav-content collapse <c:if test="${nav1 eq 'statistics' }">show</c:if>" data-bs-parent="#sidebar-nav">
				<li><a href="/statistics/constitute" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'constitute' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소구성유형</span></a></li>
				<li><a href="/statistics/efficiency" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'efficiency' }">active</c:if>"><i class="bi bi-circle"></i><span>전력판매효율</span></a></li>
				<li><a href="/statistics/manage" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'manage' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소별운영성과</span></a></li>
				<li><a href="/statistics/sell" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'sell' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소별전력판매</span></a></li>
				<li><a href="/statistics/facilities" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'facilities' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소별설비효율</span></a></li>
				<li><a href="/statistics/operationEfficiency" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'operationEfficiency' }">active</c:if>"><i class="bi bi-circle"></i><span>발전설비별운영효율</span></a></li>
				<li><a href="/statistics/operatingEnvironment" class="<c:if test="${nav1 eq 'statistics' && nav2 eq 'operatingEnvironment' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소운영환경</span></a></li>
			</ul>
		</li>
		<li class="nav-item">
			<a class="nav-link <c:if test="${nav1 ne 'cost' }">collapsed</c:if>" data-bs-target="#price-nav" data-bs-toggle="collapse"><i class="bi bi-app"></i><span>전력가</span><i class="bi bi-chevron-down ms-auto"></i></a>
			<ul id="price-nav" class="nav-content collapse <c:if test="${nav1 eq 'cost' }">show</c:if>" data-bs-parent="#sidebar-nav">
				<li><a href="/cost/smpLand" class="<c:if test="${nav1 eq 'cost' && nav2 eq 'smpLand' }">active</c:if>"><i class="bi bi-circle"></i><span>SMP 육지</span></a></li>
				<li><a href="/cost/smpIsland" class="<c:if test="${nav1 eq 'cost' && nav2 eq 'smpIsland' }">active</c:if>"><i class="bi bi-circle"></i><span>SMP 제주</span></a></li>
				<li><a href="/cost/rec" class="<c:if test="${nav1 eq 'cost' && nav2 eq 'rec' }">active</c:if>"><i class="bi bi-circle"></i><span>REC</span></a></li>
			</ul>
		</li>
		<li class="nav-item">
			<a class="nav-link <c:if test="${nav1 ne 'management' }">collapsed</c:if>" data-bs-target="#setting-nav" data-bs-toggle="collapse"><i class="bi bi-app"></i><span>관리</span><i class="bi bi-chevron-down ms-auto"></i></a>
			<ul id="setting-nav" class="nav-content collapse <c:if test="${nav1 eq 'management' }">show</c:if>" data-bs-parent="#sidebar-nav">
				<li><a href="/management/powerPlant" class="<c:if test="${nav1 eq 'management' && nav2 eq 'powerPlant' }">active</c:if>"><i class="bi bi-circle"></i><span>발전소 관리</span></a></li>
				<li><a href="/management/facilities" class="<c:if test="${nav1 eq 'management' && nav2 eq 'facilities' }">active</c:if>"><i class="bi bi-circle"></i><span>설비 관리</span></a></li>
				<li><a href="/management/menu" class="<c:if test="${nav1 eq 'management' && nav2 eq 'menu' }">active</c:if>"><i class="bi bi-circle"></i><span>MENU 관리</span></a></li>
				<li><a href="/management/role" class="<c:if test="${nav1 eq 'management' && nav2 eq 'role' }">active</c:if>"><i class="bi bi-circle"></i><span>ROLE 관리</span></a></li>
				<li><a href="/management/user" class="<c:if test="${nav1 eq 'management' && nav2 eq 'user' }">active</c:if>"><i class="bi bi-circle"></i><span>사용자 관리</span></a></li>
				<li><a href="/management/code" class="<c:if test="${nav1 eq 'management' && nav2 eq 'code' }">active</c:if>"><i class="bi bi-circle"></i><span>공통코드 관리</span></a></li>
			</ul>
		</li>
	</ul>
</aside>