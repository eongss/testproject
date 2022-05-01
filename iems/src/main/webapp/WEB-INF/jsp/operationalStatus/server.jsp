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

<link href="/assets/mk/temp/css/server.css" rel="stylesheet">

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
				<div class="col-md-12 col-lg-12">
					<div class="card card-overflow">
						<div class="card-header formBox">
							<h4>WEB 서버</h4>
						</div>
						<div class="card-body card-body-overflow top-margin-two"
							style="min-height: 200px;">
							<div class="row g-0">
								<div class="col-md-2">
									<table class="tbl">
										<tbody class="table-td-width">
											<tr>
												<th>제조사</th>
												<td></td>
											</tr>
											<tr>
												<th>MODEL</th>
												<td></td>
											</tr>
											<tr>
												<th>CPU</th>
												<td></td>
											</tr>
											<tr>
												<th>MEM</th>
												<td></td>
											</tr>
											<tr>
												<th>OS DISK</th>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-1"></div>
								<div class="col-md-3">
									<div id="solid1"></div>
								</div>
								<div class="col-md-3">
									<div id="solid2"></div>
								</div>
								<div class="col-md-3">
									<div id="solid3"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card card-overflow">
						<div class="card-header formBox">
							<h4>AP 서버</h4>
						</div>
						<div class="card-body card-body-overflow top-margin-two"
							style="min-height: 200px;">
							<div class="row g-0">
								<div class="col-md-2">
									<table class="tbl">
										<tbody class="table-td-width">
											<tr>
												<th>제조사</th>
												<td></td>
											</tr>
											<tr>
												<th>MODEL</th>
												<td></td>
											</tr>
											<tr>
												<th>CPU</th>
												<td></td>
											</tr>
											<tr>
												<th>MEM</th>
												<td></td>
											</tr>
											<tr>
												<th>OS DISK</th>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-1"></div>
								<div class="col-md-3">
									<div id="solid4"></div>
								</div>
								<div class="col-md-3">
									<div id="solid5"></div>
								</div>
								<div class="col-md-3">
									<div id="solid6"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 2 끝-->
				<!-- 메인 카드 3 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card card-overflow">
						<div class="card-header formBox">
							<h4>AP 서버</h4>
						</div>

						<div class="card-body card-body-overflow top-margin-two"
							style="min-height: 200px;">
							<div class="row g-0">
								<div class="col-md-2">
									<table class="tbl">
										<tbody class="table-td-width">
											<tr>
												<th>제조사</th>
												<td></td>
											</tr>
											<tr>
												<th>MODEL</th>
												<td></td>
											</tr>
											<tr>
												<th>CPU</th>
												<td></td>
											</tr>
											<tr>
												<th>MEM</th>
												<td></td>
											</tr>
											<tr>
												<th>OS DISK</th>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-1"></div>
								<div class="col-md-3">
									<div id="solid7"></div>
								</div>
								<div class="col-md-3">
									<div id="solid8"></div>
								</div>
								<div class="col-md-3">
									<div id="solid9"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 3 끝-->
				<!-- 메인 카드 4 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card card-overflow">
						<div class="card-header formBox">
							<h4>AP 서버</h4>
						</div>

						<div class="card-body card-body-overflow top-margin-two"
							style="min-height: 200px;">
							<div class="row g-0">
								<div class="col-md-2">
									<table class="tbl">
										<tbody class="table-td-width">
											<tr>
												<th>제조사</th>
												<td></td>
											</tr>
											<tr>
												<th>MODEL</th>
												<td></td>
											</tr>
											<tr>
												<th>CPU</th>
												<td></td>
											</tr>
											<tr>
												<th>MEM</th>
												<td></td>
											</tr>
											<tr>
												<th>OS DISK</th>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-1"></div>
								<div class="col-md-3">
									<div id="solid10"></div>
								</div>
								<div class="col-md-3">
									<div id="solid11"></div>
								</div>
								<div class="col-md-3">
									<div id="solid12"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 4 끝-->
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
	
	<script src="/assets/mk/temp/js/server.js"></script>

	

</body>

</html>
