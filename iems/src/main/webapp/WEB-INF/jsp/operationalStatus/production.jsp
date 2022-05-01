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

<link href="/assets/mk/temp/css/production.css" rel="stylesheet">

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
										<table id="example1" class="display">
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
				<!-- 카드 2 시작-->
				<div class="col-lg-12">
					<div class="card">
						<div class="card-body top-margin-two">
							<div class="row">
								<div class="col-ms-12 col-md-4 col-lg-4">
									<div class="profile-card pt-4 d-flex flex-column align-items-center">
										<div id="solid1"></div>
									</div>
								</div>
								<div class="col-ms-12 col-md-8 col-lg-2">
									<table class="tbl">
										<tbody class="table-td-width">
											<tr>
												<th>기상상태</th>
												<td>맑음</td>
											</tr>
											<tr>
												<th>대기온도(℃)</th>
												<td>17</td>
											</tr>
											<tr>
												<th>대기습도(%)</th>
												<td>20</td>
											</tr>
											<tr>
												<th>수직일사량(MJ/㎡)</th>
												<td>10</td>
											</tr>
											<tr>
												<th>수평일사량(MJ/㎡)</th>
												<td>20</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-ms-12 col-md-4 col-lg-4">
									<div class="profile-card pt-4 d-flex flex-column align-items-center">
										<div id="piegradient"></div>
									</div>
								</div>
								<div class="col-ms-12 col-md-8 col-lg-2">
									<table id="example3" class="display">
										<thead class="text-center">
											<tr>
												<th>발전 설비</th>
												<th>생산전력(kW)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>IVT1</td>
												<td>50.0%</td>
											</tr>
											<tr>
												<td>IVT2</td>
												<td>20.0%</td>
											</tr>
											<tr>
												<td>IVT3</td>
												<td>15.0%</td>
											</tr>
											<tr>
												<td>IVT4</td>
												<td>15.0%</td>
											</tr>
											<tr>
												<td>IVT1</td>
												<td>50.0%</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인카드 2 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-lg-12">
					<!-- 카드 1 시작-->
					<div class="card">
						<div class="card-body top-margin-two text-center">
							<div id="dynamicupdate"></div>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 3 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-lg-12">
					<div id="carouselExampleDark" class="carousel carousel-dark slide"
						data-bs-ride="carousel">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleDark"
								data-bs-slide-to="0" class="active" aria-current="true"
								aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleDark"
								data-bs-slide-to="1" aria-label="Slide 2"></button>
						</div>
						<div class="carousel-inner">
							<!-- 슬라이드 시작 -->
							<div class="carousel-item active">
								<div class="card"  style="min-height: 380px;">
									<div class="card-body top-margin-two">
										<div class="row">
											<div class="col-ms-4 col-md-4 col-lg-4">
												<table class="tbl">
														<tbody class="table-td-width">
															<tr class="td-img">
																<td colspan="4"><img src="/assets/mk/img/solapanel.png" alt=""></td>
															</tr>
															<tr>
																<th>변환 효율</th>
																<td>10%</td>
																<th>온도</th>
																<td>33</td>
															</tr>
															<tr>
																<th>DC V</th>
																<td>12</td>
																<th>AC V</th>
																<td>44</td>
															</tr>
															<tr>
																<th>DC A</th>
																<td>13</td>
																<th>AC A</th>
																<td>55</td>
															</tr>
															<tr>
																<th>DC P</th>
																<td>14</td>
																<th>AC P</th>
																<td>66</td>
															</tr>
														</tbody>
													</table>
											</div>
											<div class="col-ms-4 col-md-4 col-lg-4">
											<table class="tbl">
														<tbody class="table-td-width">
															<tr class="td-img">
																<td colspan="4"><img src="/assets/mk/img/solapanel.png" alt=""></td>
															</tr>
															<tr>
																<th>변환 효율</th>
																<td>10%</td>
																<th>온도</th>
																<td>33</td>
															</tr>
															<tr>
																<th>DC V</th>
																<td>12</td>
																<th>AC V</th>
																<td>44</td>
															</tr>
															<tr>
																<th>DC A</th>
																<td>13</td>
																<th>AC A</th>
																<td>55</td>
															</tr>
															<tr>
																<th>DC P</th>
																<td>14</td>
																<th>AC P</th>
																<td>66</td>
															</tr>
														</tbody>
													</table>
											</div>
											<div class="col-ms-4 col-md-4 col-lg-4">
												<table class="tbl">
														<tbody class="table-td-width">
															<tr class="td-img">
																<td colspan="4"><img src="/assets/mk/img/solapanel.png" alt=""></td>
															</tr>
															<tr>
																<th>변환 효율</th>
																<td>10%</td>
																<th>온도</th>
																<td>33</td>
															</tr>
															<tr>
																<th>DC V</th>
																<td>12</td>
																<th>AC V</th>
																<td>44</td>
															</tr>
															<tr>
																<th>DC A</th>
																<td>13</td>
																<th>AC A</th>
																<td>55</td>
															</tr>
															<tr>
																<th>DC P</th>
																<td>14</td>
																<th>AC P</th>
																<td>66</td>
															</tr>
														</tbody>
													</table>
											</div>
										</div>
									</div>
								</div>
								<div class="carousel-caption d-none d-md-block"></div>
							</div>
							<!-- 슬라이드 종료 -->
							<!-- 슬라이드 시작 -->
							<div class="carousel-item">
								<div class="card" style="min-height: 380px;">
									<div class="card-body top-margin-two">
										<div class="row">
											<div class="col-ms-4 col-md-4 col-lg-4">
												<table class="tbl">
														<tbody class="table-td-width">
															<tr class="td-img">
																<td colspan="4"><img src="/assets/mk/img/solapanel.png" alt=""></td>
															</tr>
															<tr>
																<th>변환 효율</th>
																<td>10%</td>
																<th>온도</th>
																<td>33</td>
															</tr>
															<tr>
																<th>DC V</th>
																<td>12</td>
																<th>AC V</th>
																<td>44</td>
															</tr>
															<tr>
																<th>DC A</th>
																<td>13</td>
																<th>AC A</th>
																<td>55</td>
															</tr>
															<tr>
																<th>DC P</th>
																<td>14</td>
																<th>AC P</th>
																<td>66</td>
															</tr>
														</tbody>
													</table>
											</div>
											<div class="col-ms-4 col-md-4 col-lg-4">
												<table class="tbl">
														<tbody class="table-td-width">
															<tr class="td-img">
																<td colspan="4"><img src="/assets/mk/img/solapanel.png" alt=""></td>
															</tr>
															<tr>
																<th>변환 효율</th>
																<td>10%</td>
																<th>온도</th>
																<td>33</td>
															</tr>
															<tr>
																<th>DC V</th>
																<td>12</td>
																<th>AC V</th>
																<td>44</td>
															</tr>
															<tr>
																<th>DC A</th>
																<td>13</td>
																<th>AC A</th>
																<td>55</td>
															</tr>
															<tr>
																<th>DC P</th>
																<td>14</td>
																<th>AC P</th>
																<td>66</td>
															</tr>
														</tbody>
													</table>
											</div>
											<div class="col-ms-4 col-md-4 col-lg-4">
												<table class="tbl">
														<tbody class="table-td-width">
															<tr class="td-img">
																<td colspan="4"><img src="/assets/mk/img/solapanel.png" alt=""></td>
															</tr>
															<tr>
																<th>변환 효율</th>
																<td>10%</td>
																<th>온도</th>
																<td>33</td>
															</tr>
															<tr>
																<th>DC V</th>
																<td>12</td>
																<th>AC V</th>
																<td>44</td>
															</tr>
															<tr>
																<th>DC A</th>
																<td>13</td>
																<th>AC A</th>
																<td>55</td>
															</tr>
															<tr>
																<th>DC P</th>
																<td>14</td>
																<th>AC P</th>
																<td>66</td>
															</tr>
														</tbody>
													</table>
											</div>
										</div>
									</div>
								</div>
								<div class="carousel-caption d-none d-md-block"></div>
							</div>
							<!-- 슬라이드 종료 -->
						</div>
					</div>
				</div>
				<!-- 메인 카드 3 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-lg-12">
					<!-- 카드 1 시작-->
					<div class="card">
						<div class="card-header formBox">
							<h4>미처리 경고 / 장애 발생 내역</h4>
						</div>
						<div class="card-body top-margin-two">
							<table id="example2" class="display">
								<thead class="text-center">
									<tr>
										<th rowspan="2" style="width: 13%;">계측시간</th>
										<th colspan="3" style="width: 40%;">DC</th>
										<th colspan="3" style="width: 40%;">AC</th>
										<th rowspan="2" style="width: 7%;">변환효율</th>
									</tr>
									<tr>
										<th>V</th>
										<th>A</th>
										<th>F</th>
										<th>V</th>
										<th>A</th>
										<th>F</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>2022-04-19 15:23:66</td>
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
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- 카드 1 끝-->
				</div>
				<!-- 메인 카드 3 끝-->
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
	
	<script src="/assets/mk/temp/js/production.js"></script>

	

</body>

</html>
