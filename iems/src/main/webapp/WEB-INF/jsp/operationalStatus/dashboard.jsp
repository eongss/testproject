
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<%@ include file="/WEB-INF/jsp/frame/style.jsp"%>

<link
	href="/assets/mk/temp/css/dashboard.css"
	rel="stylesheet">

</head>

<body class="toggle-sidebar">

	<%@ include file="/WEB-INF/jsp/frame/nav.jsp"%>

	<main id="main" class="main">
		<section class="section dashboard">
			<!-- 메인구성 목록 시작-->
			<div class="row">
				<!-- 메인 카드 1 시작-->
				<div class="col-md-12 col-lg-5">
					<div class="row">
						<!-- 카드 1 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-body top-margin-two">
									<div id="Mapcontainer"></div>
								</div>
							</div>
						</div>
						<!-- 카드 1 끝-->
						<!-- 카드 2 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-body top-margin-two">
									<table id="errorDataTable" class="display" style="width: 100%;">
										<thead class="card-table-hw">
											<tr>
												<td>발전소명</td>
												<td>장애코드</td>
												<td>장애메시지</td>
												<td>발행시각</td>
											</tr>
										</thead>
										<tbody>
											<tr>
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
											</tr>
											<tr>
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
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- 카드 2 끝-->
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-md-12 col-lg-7">
					<div class="row">
						<!-- 카드 3 시작-->
						<div class="col-lg-12">
							<!-- 슬라이드 시작 -->
							<div id="carouselExampleDark"
								class="carousel carousel-dark slide" data-bs-ride="carousel">
								<!-- 슬라이드 페이징 시작 -->
								<div class="carousel-indicators">
									<button type="button" data-bs-target="#carouselExampleDark"
										data-bs-slide-to="0" class="active" aria-current="true"
										aria-label="Slide 1"></button>
									<button type="button" data-bs-target="#carouselExampleDark"
										data-bs-slide-to="1" aria-label="Slide 2"></button>
									<button type="button" data-bs-target="#carouselExampleDark"
										data-bs-slide-to="2" aria-label="Slide 3"></button>
								</div>
								<!-- 슬라이드 페이징 끝 -->
								<div class="carousel-inner">
									<!-- 1번 슬라이드 시작-->
									<div class="carousel-item active">
										<div class="card mb-3" style="min-height: 300px;">
											<div class="row g-0">
												<div class="col-md-5">
													<div class="card-img-top">
														<div class="graph_style graph_style_card">
															<div class="level level01">
																<span class="img"></span> <strong class="txt">정상</strong>
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-7 top-margin-three">
													<div class="card-body">
														<div class="row">
															<div style="margin-bottom: 10px;">
																피크 예상시간 <strong>09~10</strong>시
															</div>
															<div class="row">
																<h4>최대부하</h4>
																<div class="col-lg-8">
																	<div class="progress">
																		<div
																			class="progress-bar progress-bar-striped progress-bar-animated bg-success"
																			role="progressbar" style="width: 75%"
																			aria-valuenow="10" aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
																<div class="col-lg-4">
																	<div class="progress-bar_value">75,300 MW</div>
																</div>
																<h4>공급예비력</h4>
																<div class="col-lg-8">
																	<div class="progress">
																		<div
																			class="progress-bar progress-bar-striped progress-bar-animated bg-info"
																			role="progressbar" style="width: 17%"
																			aria-valuenow="10" aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
																<div class="col-lg-4">
																	<div class="progress-bar_value">17,043 MW</div>
																</div>
																<h4>공급예비율</h4>
																<div class="col-lg-8">
																	<div class="progress">
																		<div
																			class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
																			role="progressbar" style="width: 23%"
																			aria-valuenow="10" aria-valuemin="0"
																			aria-valuemax="100"></div>
																	</div>
																</div>
																<div class="col-lg-4">
																	<div class="progress-bar_value">23 %</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="carousel-caption d-none d-md-block"></div>
									</div>
									<!-- 1번 슬라이드 끝-->
									<!-- 2번 슬라이드 시작-->
									<div class="carousel-item">
										<div class="card mb-3" style="min-height: 300px;">
											<div class="row g-0">
												<div class="col-md-5">
													<div class="card-img-top">
														<div class="graph_style graph_style_card">
															<div class="level level01">
																<span class="img"></span> <strong class="txt">정상</strong>
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-7">
													<div class="card-body">
														<div class="row">
															<h4 class="top-margin-three">공급능력</h4>
															<div class="col-lg-8">
																<div class="progress">
																	<div
																		class="progress-bar progress-bar-striped progress-bar-animated "
																		role="progressbar" style="width: 84%"
																		aria-valuenow="10" aria-valuemin="0"
																		aria-valuemax="100"></div>
																</div>
															</div>
															<div class="col-lg-4">
																<div class="progress-bar_value">83,841 MW</div>
															</div>
															<h4>현재부하</h4>
															<div class="col-lg-8">
																<div class="progress">
																	<div
																		class="progress-bar progress-bar-striped progress-bar-animated bg-success"
																		role="progressbar" style="width: 61%"
																		aria-valuenow="10" aria-valuemin="0"
																		aria-valuemax="100"></div>
																</div>
															</div>
															<div class="col-lg-4">
																<div class="progress-bar_value">61,453 MW</div>
															</div>
															<h4>공급예비력</h4>
															<div class="col-lg-8">
																<div class="progress">
																	<div
																		class="progress-bar progress-bar-striped progress-bar-animated bg-info"
																		role="progressbar" style="width: 22%"
																		aria-valuenow="10" aria-valuemin="0"
																		aria-valuemax="100"></div>
																</div>
															</div>
															<div class="col-lg-4">
																<div class="progress-bar_value">22,388 MW</div>
															</div>
															<h4>공급예비율</h4>
															<div class="col-lg-8">
																<div class="progress">
																	<div
																		class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
																		role="progressbar" style="width: 36%"
																		aria-valuenow="10" aria-valuemin="0"
																		aria-valuemax="100"></div>
																</div>
															</div>
															<div class="col-lg-4">
																<div class="progress-bar_value">36.43 %</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="carousel-caption d-none d-md-block"></div>
									</div>
									<!-- 2번 슬라이드 끝-->
									<!-- 3번 슬라이드 시작-->
									<div class="carousel-item">
										<div class="card mb-3" style="min-height: 300px;">
											<div class="row g-0">
												<div class="col-md-6">
													<div class="card-body top-margin-two">
														<P style="float: right; margin-bottom: 0%;">(단위:
															원/kWh)</P>
														<table class="table table-bordered border-dark">
															<thead>
																<tr class="table-secondary border-dark">
																	<th scope="col">구분</th>
																	<th scope="col">육지</th>
																	<th scope="col">제주</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td class="table-secondary border-dark fontboard">거래일</td>
																	<td colspan="2">2022.03.14</td>
																</tr>
																<tr>
																	<td class="table-secondary border-dark fontboard">최고가</td>
																	<td>198.57</td>
																	<td>288.69</td>
																</tr>
																<tr>
																	<td class="table-secondary border-dark fontboard">최소가</td>
																	<td>109.17</td>
																	<td>192.56</td>
																</tr>
																<tr>
																	<td class="table-secondary border-dark fontboard">평균가</td>
																	<td>182.98</td>
																	<td>224.53</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="col-md-6">
													<div class="card-body top-margin-two">
														<P
															style="float: left; margin-bottom: 0%; display: inline;">매주
															화, 목요일 10:00 ~ 16:00 개장</P>
														<P
															style="float: right; margin-bottom: 0%; display: inline;">(단위:
															REC,원/REC)</P>
														<table class="table table-bordered border-dark">
															<thead>
																<tr class="table-secondary border-dark">
																	<th scope="col" colspan="4">1REC=1MWh(가중치에 따라 변동)</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td class="table-secondary border-dark fontboard">거래일</td>
																	<td colspan="3">2022.03.14</td>
																</tr>
																<tr>
																	<td class="table-secondary border-dark fontboard">최고가</td>
																	<td>41,500</td>
																	<td class="table-secondary border-dark fontboard">거래량</td>
																	<td>71,157</td>
																</tr>
																<tr>
																	<td class="table-secondary border-dark fontboard">최저가</td>
																	<td>36,000</td>
																	<td class="table-secondary border-dark fontboard">종가</td>
																	<td>40,500</td>
																</tr>
																<tr>
																	<td class="table-secondary border-dark fontboard">평균가</td>
																	<td>40,546</td>
																	<td></td>
																	<td></td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
										<div class="carousel-caption d-none d-md-block"></div>
									</div>
									<!-- 3번 슬라이드 끝-->
								</div>
							</div>
							<!-- 슬라이드 끝 -->
						</div>
						<!-- 카드 3 끝-->
						<!-- 카드 4 시작-->
						<div class="col-md-4 col-lg-4">
							<div class="card top-margin-three card-overflow">
								<div class="card-body">
									<div class="solid" id="solid1"></div>
								</div>
							</div>
						</div>
						<!-- 카드 4 끝-->
						<!-- 카드 5 시작-->
						<div class="col-md-4 col-lg-4">
							<div class="card top-margin-three card-overflow">
								<div class="card-body">
									<div class="solid" id="solid2"></div>
								</div>
							</div>
						</div>
						<!-- 카드 5 끝-->
						<!-- 카드 6 시작-->
						<div class="col-md-4 col-lg-4">
							<div class="card top-margin-three card-overflow">
								<div class="card-body">
									<div class="solid" id="solid3"></div>
								</div>
							</div>
						</div>
						<!-- 카드 6 끝-->
						<!-- 카드 7 시작-->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-body">
									<div id="dynamicUpdate" class="top-margin-two"></div>
								</div>
							</div>
						</div>
						<!-- 카드 7 끝-->
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
	
	<script src="/assets/mk/temp/js/dashboard.js"></script>

	

</body>

</html>
