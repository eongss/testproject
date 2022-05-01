<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<%@ include file="/WEB-INF/jsp/frame/style.jsp"%>

<link href="/assets/mk/temp/css/efficiency.css" rel="stylesheet">

</head>

<body class="toggle-sidebar">

	<%@ include file="/WEB-INF/jsp/frame/nav.jsp"%>

	<main id="main" class="main">
		<!-- 조회 구역 시작-->
		<div class="pagetitle">
			<div class="row">
				<div class="col-md-4 col-lg-2">
					<select id="inputState" class="form-select">
						<option selected="">Choose...</option>
						<option>...</option>
					</select>
				</div>
				<div class="col-md-4 col-lg-2">
					<input type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
					<label class="col-form-label" or="gridRadios1">1개월</label>
					<input type="radio" name="gridRadios" id="gridRadios2" value="option2" style="margin-left: 5%;">
					<label class="col-form-label" for="gridRadios2">3개월</label>
					<input type="radio" name="gridRadios" id="gridRadios3" value="option3" style="margin-left: 5%;">
					<label class="col-form-label" for="gridRadios3">6개월</label>
				</div>
				<div class="col-md-5 col-lg-2">
					<label class="col-form-label">시작일</label><input type="date" class="form-control2">
				</div>
				<div class="col-md-5 col-lg-2">
					<label class="col-form-label">마감일</label><input type="date" class="form-control2">
				</div>
				<div class="col-md-2 col-lg-2">
					<button type="button" class="btn btn-seacch">
						<i class="bi bi-search" style="margin-right: 10px;"></i>조회
					</button>
				</div>
			</div>
		</div>
		<!-- 조회 구역 종료-->
		<section class="section dashboard">
			<!-- 메인구성 목록 시작-->
			<div class="row">
				<!-- 메인 카드 1 시작-->
				<div class="col-md-12 col-lg-3">
					<div class="row">
						<div class="col-md-6 col-lg-12">
							<div class="card card-overflow">
								<div class="card-header formBox">
									<h4>발전소 비중</h4>
								</div>
								<div class="card-body top-margin-two" style="min-height: 200px;">
									<div
										class="profile-card pt-4 d-flex flex-column align-items-center">
										<div id="piegradient1"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-12">
							<div class="card card-overflow">
								<div class="card-header formBox">
									<h4>발전소 용량 비중</h4>
								</div>
								<div class="card-body top-margin-two" style="min-height: 200px;">
									<div
										class="profile-card pt-4 d-flex flex-column align-items-center">
										<div id="piegradient2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-md-12 col-lg-9">
					<div class="card">
						<div class="card-body top-margin-two">
							<table id="example1" class="display" style="width: 100%;">
								<thead class="text-center">
									<tr>
										<th>일자</th>
										<th>지역</th>
										<th>발전소 ID</th>
										<th>발전소명</th>
										<th>발전용량</th>
										<th>판매용량</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th>2022-04-08</th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- 메인 카드 2 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card">
						<div class="card-body top-margin-two">
							<div id="barbasic"></div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 3 끝-->
				<!-- 메인 카드 4 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card">
						<div class="card-header formBox">
							<h4>발전소 목록</h4>
						</div>
						<div class="card-body top-margin-two">
							<table id="example2" class="display" style="width: 100%;">
								<thead class="text-center">
									<tr>
										<th><input type="checkbox"></th>
										<th>지역</th>
										<th>발전소 ID</th>
										<th>발전소명</th>
										<th>발전용량</th>
										<th>판매용량</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th><input type="checkbox"></th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 1</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th><input type="checkbox"></th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 2</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
									<tr>
										<th><input type="checkbox"></th>
										<th>전남</th>
										<th>발전소 id</th>
										<th>발전소 3</th>
										<th>100kw</th>
										<th>100kw</th>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- 메인 카드 4 끝-->
				<!-- 메인 카드 5 시작-->
				<div class="col-md-6 col-lg-3">
					<div class="card card-overflow">
						<div class="card-header formBox">
							<h4>발전소 전력판매 비중</h4>
						</div>
						<div class="card-body top-margin-two" style="min-height: 385px;">
							<div
								class="profile-card pt-4 d-flex flex-column align-items-center">
								<div id="piegradient3" style="margin-top: 10%;"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 5 끝-->
				<!-- 메인 카드 6 시작-->
				<div class="col-md-12 col-lg-9">
					<div class="card">
						<div class="card-body top-margin-two">
							<div id="linebasic"></div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 6 끝-->
			</div>
			<!-- 메인 설정 목록 종료-->
		</section>
	</main>


	<%@ include file="/WEB-INF/jsp/frame/footer.jsp"%>

	<!-- Data Tables JS Files -->
	<script src="/assets/vendor/DataTables/datatables.min.js"></script>
	<!-- highcharts -->
	<script src="/assets/vendor/highchartsmaps/code/proj4.js"></script>
	<script src="/assets/vendor/highchartsstock/code/highstock.js"></script>
	<script src="/assets/vendor/highchartsstock/code/highcharts-more.js"></script>
	<script src="/assets/vendor/highchartsstock/code/highcharts-3d.js"></script>
	<script src="/assets/vendor/highchartsstock/code/modules/exporting.js"></script>
	<script src="/assets/vendor/highchartsstock/code/modules/export-data.js"></script>
	
	<script src="/assets/mk/temp/js/efficiency.js"></script>

	

</body>

</html>
