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

<link href="/assets/mk/temp/css/sell.css" rel="stylesheet">

</head>

<body class="toggle-sidebar">

	<%@ include file="/WEB-INF/jsp/frame/nav.jsp"%>

	<main id="main" class="main">
		<!-- 조회 구역 시작-->
		<div class="pagetitle">
			<div class="row">
				<div class="col-md-3 col-lg-3">
					<select id="inputState" class="form-select">
						<option selected="">Choose...</option>
						<option>...</option>
					</select>
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
				<div class="col-lg-12">
					<!-- 카드 1 시작-->
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-md-2">
									<img src="/assets/mk/img/status-green.png" class="img-fluid rounded-start div-border-img" alt="..." id="canversI">
								</div>
								<div class="col-md-10">
									<div class="card-body top-margin-three">
										<table id="example1" class="display" style="margin-top: 5%">
											<thead class="text-center">
												<tr>
													<th style="width: 10%;">발전소 명</th>
													<th style="width: 10%;">사업자명</th>
													<th style="width: 10%;">발전용량</th>
													<th style="width: 5%;">유형</th>
													<th style="width: 25%;">주소</th>
													<th style="width: 10%;">담당자 명</th>
													<th style="width: 10%;">핸드폰</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th>발전소 명</th>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-md-12 col-lg-12">
					<!-- 카드 1 시작-->
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-md-6 col-lg-6">
									<div class="profile-card pt-4 d-flex flex-column align-items-center">
										<div id="solid1"></div>
									</div>
								</div>
								<div class="col-md-3 col-lg-3">
									<div class="profile-card pt-4 d-flex flex-column align-items-center">
										<table class="tbl top-margin-two">
											<tbody class="table-td-width">
												<tr>
													<th>당일 누적 발전량 ( kWh )</th>
													<td>10</td>
												</tr>
												<tr>
													<th>당일 누적 판매량(kWh)</th>
													<td>12</td>
												</tr>
												<tr>
													<th>당일 누적 충전량(kWh)</th>
													<td>13</td>
												</tr>
												<tr>
													<th>당일 누적 소내전력 (kWh)</th>
													<td>14</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 2 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-lg-12 clearfix">
					<!-- 카드 1 시작-->
					<div class="card card-overflow">
						<div class="card-body card-body-overflow">
							<table class="table table-bordered text-center border-white" style="margin-left: 2%">
								<tbody>
									<tr>
										<td style="width: 10%;"><img src="/assets/mk/img/solapanel.png"></td>
										<td style="width: 10%;">
											<div class="progress" style="transform: translateY(160%) translateX(-7%); width: 115%;">
												<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" id="progress1"></div>
											</div>
										</td>
										<td style="width: 10%;"><img src="/assets/mk/img/ivt.png"></td>
										<td style="width: 10%;">
											<div class="progress" style="transform: translateY(160%) translateX(-7%); width: 115%;">
												<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" id="progress2"></div>
											</div>
										</td>
										<td style="width: 10%;"><img src="/assets/mk/img/ivt.png"></td>
										<td style="width: 10%;">
											<div class="progress" style="transform: translateY(160%) translateX(-7%); width: 115%;">
												<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" id="progress3"></div>
											</div>
										</td>
										<td style="width: 10%;"><img src="/assets/mk/img/logo-kepco.png" style="margin-top: 7%"></td>
									</tr>
									<tr>
										<td></td>
										<td><div id="solid2"></div></td>
										<td>
											<div class="progress" style="transform: rotate(90deg) translateX(32%) translateY(250%); width: 140%;">
												<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" id="progress4"></div>
											</div>
										</td>
										<td><div id="solid3"></div></td>
										<td>
											<div class="progress" style="transform: rotate(90deg) translateX(32%) translateY(250%); width: 140%;">
												<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" id="progress5"></div>
											</div>
										</td>
										<td><div id="solid4"></div></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td><img src="/assets/mk/img/ivt.png"></td>
										<td></td>
										<td><img src="/assets/mk/img/ivt.png"></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td><div id="solid5"></div></td>
										<td></td>
										<td><div id="solid6"></div></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 3 끝-->
				<!-- 메인 카드 4 시작-->
				<div class="col-lg-12">
					<!-- 카드 1 시작-->
					<div class="card">
						<div class="card-body">
							<div class="top-margin-two" id="comboMultiAxes"></div>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 4 끝-->
				<!-- 메인 카드 5 시작-->
				<div class="col-lg-12">
					<!-- 카드 1 시작-->
					<div class="card">
						<div class="card-header formBox">
							<h4>전력 현황</h4>
						</div>
						<div class="card-body top-margin-two text-center">
							<table id="example2" class="display">
								<thead>
									<tr>
										<th rowspan="2">계측시간대</th>
										<th colspan="2">발전량 (kWh )</th>
										<th colspan="2">판매량 (kWh )</th>
										<th colspan="2">ESS충전 소진량 (kWh )</th>
										<th colspan="2">ESS 방전 처리량 (kWh )</th>
									</tr>
									<tr>
										<th>구간발전량</th>
										<th>당일누적발전량</th>
										<th>구간발전량</th>
										<th>당일누적발전량</th>
										<th>구간발전량</th>
										<th>당일누적발전량</th>
										<th>구간발전량</th>
										<th>당일누적발전량</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 5 끝-->
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
	<script src="/assets/vendor/highchartsstock/code/modules/exporting.js"></script>
	<script src="/assets/vendor/highchartsstock/code/modules/export-data.js"></script>
	<!-- highcharts solid-->
	<script src="/assets/vendor/highcharts/code/modules/solid-gauge.js"></script>
	<script src="/assets/mk/js/mkgaugeChartOption.js"></script>
	
	<script src="/assets/mk/temp/js/sell.js"></script>

	

</body>

</html>
