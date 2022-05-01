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

<link href="/assets/mk/temp/css/station1.css" rel="stylesheet">

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
										<table id="example1" class="display"  style="margin-top: 5%">
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
													<td>1번 발전소</td>
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
					<div class="card card-overflow">
						<div class="card-body card-body-overflow top-margin-two">
							<table class="table table-bordered border-dark border-white" style="margin-left: 4%;">
								<tbody class="table-td-width2">
									<tr>
										<td>
											<table class="tbl">
												<tbody class="table-td-width">
													<tr class="td-img">
														<td colspan="2"><img src="/assets/mk/img/solapanel.png" alt=""></td>
													</tr>
													<tr>
														<th>온도</th>
														<td>60</td>
													</tr>
													<tr>
														<th>DC V (V)</th>
														<td>630</td>
													</tr>
													<tr>
														<th>DC A (A)</th>
														<td>60</td>
													</tr>
													<tr>
														<th>DC P (kW)</th>
														<td>1000</td>
													</tr>
												</tbody>
											</table>
										</td>
										<td>
											<div class="progress" style="margin-top: 20%;">
												<div
													class="progress-bar progress-bar-striped progress-bar-animated"
													role="progressbar" style="width: 0%" aria-valuenow="10"
													aria-valuemin="0" aria-valuemax="100" id="progress1"></div>
											</div>
										</td>
										<td>
											<table class="tbl">
												<tbody class="table-td-width">
													<tr class="td-img">
														<td colspan="2"><img src="/assets/mk/img/ivt.png" alt=""></td>
													</tr>
													<tr>
														<th>온도</th>
														<td>60</td>
													</tr>
													<tr>
														<th>운전상태</th>
														<td>가동</td>
													</tr>
													<tr>
														<th>AC V (V)</th>
														<td>630</td>
													</tr>
													<tr>
														<th>AC A (A)</th>
														<td>60</td>
													</tr>
													<tr>
														<th>AC P (kW)</th>
														<td>1000</td>
													</tr>
												</tbody>
											</table>
										</td>
										<td>
											<div class="progress" style="margin-top: 20%;">
												<div
													class="progress-bar progress-bar-striped progress-bar-animated"
													role="progressbar" style="width: 0%" aria-valuenow="10"
													aria-valuemin="0" aria-valuemax="100" id="progress2"></div>
											</div>
										</td>
										<td>
											<table class="tbl">
												<tbody class="table-td-width">
													<tr class="td-img">
														<td colspan="2"><img src="/assets/mk/img/logo-kepco.png" alt=""></td>
													</tr>
													<tr>
														<th>주파수 (Hz)</th>
														<td>60</td>
													</tr>
													<tr>
														<th>AC V (V)</th>
														<td>630</td>
													</tr>
													<tr>
														<th>AC A (A)</th>
														<td>60</td>
													</tr>
													<tr>
														<th>AC P (kW)</th>
														<td>1000</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- 메인카드 2 끝-->
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
										<th style="width: 10%;">설비 ID</th>
										<th style="width: 10%;">설비 종류</th>
										<th style="width: 20%;">발행 시각</th>
										<th style="width: 10%;">장애코드</th>
										<th style="width: 50%;">장애 메시지</th>
									</tr>
								</thead>
								<tbody>
									<tr>
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
									</tr>
									<tr>
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
									</tr>
									<tr>
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
	<script src="/assets/vendor/highcharts/code/highcharts.js"></script>
	<script src="/assets/vendor/highcharts/code/highcharts-more.js"></script>
	<script src="/assets/highcharts/code/modules/data.js"></script>
	<script src="/assets/vendor/highcharts/code/modules/accessibility.js"></script>
	<script src="/assets/highcharts/code/modules/coloraxis.js"></script>
	
	<script src="/assets/mk/temp/js/station1.js"></script>

	

</body>

</html>
