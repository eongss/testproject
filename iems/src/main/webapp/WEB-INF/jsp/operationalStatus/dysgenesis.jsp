
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

<link href="/assets/mk/temp/css/dysgenesis.css" rel="stylesheet">

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
					<input type="text" class="form-control" placeholder="name">
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
				<div class="col-lg-6">
					<div class="row">
						<!-- 카드 1 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header formBox">
									<h4>발전소 운영현황</h4>
								</div>
								<div class="card-body top-margin-two">
									<table id="example0" class="display">
										<thead class="text-center">
											<tr>
												<th>가동율 (%)</th>
												<th>전체 (개소)</th>
												<th>정상 (개소)</th>
												<th>장애 (개소)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>75</td>
												<td>4</td>
												<td>3</td>
												<td>1</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- 카드 1 끝-->
						<!-- 카드 2 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-body">
									<div id="Mapcontainer"></div>
								</div>
							</div>
						</div>
						<!-- 카드 2 끝-->
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-lg-6">
					<div class="row">
						<!-- 카드 3 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header formBox">
									<h4>가동 중단 발전소 현황</h4>
								</div>
								<div class="card-body top-margin-three">
									<table id="example1" class="display">
										<thead class="text-center">
											<tr>
												<th>발전소명</th>
												<th>사업자명</th>
												<th>가동 중단일</th>
												<th>중단 경과일수</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>지역</td>
												<td>광주</td>
												<td>2011/04/25</td>
												<td>61</td>
											</tr>
											<tr>
												<td>지역</td>
												<td>광주</td>
												<td>2011/04/25</td>
												<td>61</td>
											</tr>
											<tr>
												<td>지역</td>
												<td>광주</td>
												<td>2011/04/25</td>
												<td>61</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- 카드 3 끝-->
						<!-- 카드 4 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header formBox">
									<h4>당일 경고 / 장애 발생 내역</h4>
								</div>
								<div class="card-body top-margin-three">
									<table id="example2" class="display">
										<thead class="text-center">
											<tr>
												<th style="width: 10%;">발전소명</th>
												<th style="width: 10%;">장애코드</th>
												<th style="width: 60%;">장애 메시지</th>
												<th style="width: 20%;">발생시각</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1번 발전소</td>
												<td>고장</td>
												<td>테스트 고장 테스트 고장 테스트 고장테스트 고장 테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
											<tr>
												<td>2번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
											<tr>
												<td>3번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
											<tr>
												<td>4번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- 카드 4 끝-->
						<!-- 카드 5 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header formBox">
									<h4>미처리 경고 / 장애 발생 내역</h4>
								</div>
								<div class="card-body top-margin-three">
									<table id="example3" class="display">
										<thead class="text-center">
											<tr>
												<th style="width: 10%;">발전소명</th>
												<th style="width: 10%;">장애코드</th>
												<th style="width: 60%;">장애 메시지</th>
												<th style="width: 20%;">발생시각</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
											<tr>
												<td>2번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
											<tr>
												<td>3번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
											<tr>
												<td>4번 발전소</td>
												<td>고장</td>
												<td>테스트 고장</td>
												<td>2011/04/25</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- 카드 5 끝-->
					</div>
				</div>
				<!-- 메인 카드 2 끝-->
			</div>
			<!-- 메인 설정 목록 종료-->
		</section>
	</main>


	<%@ include file="/WEB-INF/jsp/frame/footer.jsp"%>

	<!-- Data Tables JS Files -->
	<script src="/assets/vendor/DataTables/datatables.min.js"></script>
	<!-- highcharts -->
	<script src="/assets/vendor/highchartsmaps/code/proj4.js"></script>
	<script src="/assets/vendor/highchartsmaps/code/highmaps.js"></script>
	<script src="/assets/vendor/highchartsmaps/code/highcharts-more.js"></script>
	<script src="/assets/vendor/highchartsmaps/code/modules/exporting.js"></script>
	<script src="/assets/vendor/highchartsmaps/code/modules/offline-exporting.js"></script>
	<!-- highcharts map-->
	<script src="/assets/vendor/highchartsmaps/code/kr-all.js"></script>
	<!-- highcharts solid-->
	<script src="/assets/vendor/highcharts/code/modules/solid-gauge.js"></script>
	<script src="/assets/mk/js/mkgaugeChartOption.js"></script>
	
	<script src="/assets/mk/temp/js/dysgenesis.js"></script>

	

</body>

</html>
