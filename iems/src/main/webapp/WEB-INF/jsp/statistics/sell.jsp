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

<link href="/assets/mk/temp/css/sell2.css" rel="stylesheet">

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
				<div class="col-md-6 col-lg-3">
					<div class="card">
						<div class="card-body top-margin-two">
							<div
								class="profile-card pt-4 d-flex flex-column align-items-center">
								<div id="solid1"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-md-6 col-lg-3">
					<div class="card">
						<div class="card-body top-margin-two" style="min-height: 274px;">
							<div
								class="profile-card pt-4 d-flex flex-column align-items-center top-margin-three">
								<table class="tbl">
									<tbody class="table-td-width">
										<tr>
											<th>발전량 ( kWh )</th>
											<td>17</td>
										</tr>
										<tr>
											<th>판매 전력량 (kWh)</th>
											<td>17</td>
										</tr>
										<tr>
											<th>소내 전력량 (kWh)</th>
											<td>15</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 2 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-md-6 col-lg-3">
					<div class="card card-overflow">
						<div class="card-body top-margin-two">
							<div
								class="profile-card pt-4 d-flex flex-column align-items-center">
								<div id="piegradient1"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 3 끝-->
				<!-- 메인 카드 4 시작-->
				<div class="col-md-6 col-lg-3">
					<div class="card">
						<div class="card-body top-margin-two" style="min-height: 274px;">
							<div
								class="profile-card pt-4 d-flex flex-column align-items-center top-margin-three">
								<table class="tbl">
									<tbody class="table-td-width">
										<tr>
											<th>직접판매(kWh)</th>
											<td>17</td>
										</tr>
										<tr>
											<th>ESS판매(kWh)</th>
											<td>15</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 4 끝-->
				<!-- 메인 카드 5 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card">
						<div class="card-body top-margin-two">
							<div id="comboLine"></div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 5 끝-->
				<!-- 메인 카드 6 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card">
						<div class="card-body top-margin-two">
							<table id="example" class="display" style="width: 100%;">
								<thead class="text-center">
									<tr>
										<th rowspan="2" style="width: 10%;">계측 일자</th>
										<th rowspan="2" style="width: 10%;">발전량 (kWh )</th>
										<th colspan="3" style="width: 30%;">판매량 ( kWh )</th>
										<th rowspan="2" style="width: 10%;">소내전력량( kWh )</th>
										<th rowspan="2" style="width: 10%;">ESS충전량 ( kWh )</th>
										<th rowspan="2" style="width: 10%;">판매처리율(%)</th>
									</tr>
									<tr>
										<th style="width: 10%;">소계</th>
										<th style="width: 10%;">직접판매</th>
										<th style="width: 10%;">ESS 판매</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
									<tr>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
								</tbody>
							</table>
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
	<!-- highcharts solid-->
	<script src="/assets/vendor/highcharts/code/modules/solid-gauge.js"></script>
	<script src="/assets/mk/js/mkgaugeChartOption.js"></script>
	
	<script src="/assets/mk/temp/js/sell2.js"></script>

	

</body>

</html>
