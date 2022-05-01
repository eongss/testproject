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

<link href="/assets/mk/temp/css/rec.css" rel="stylesheet">

</head>

<body class="toggle-sidebar">

	<%@ include file="/WEB-INF/jsp/frame/nav.jsp"%>

	<main id="main" class="main">
		<!-- 조회 구역 시작-->
		<div class="pagetitle">
			<div class="row">
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
				<div class="col-md-12 col-lg-12">
					<div class="card">
						<div class="card-header formBox">
							<h4>REC 가격 추이</h4>
						</div>
						<div class="card-body top-margin-two">
							<div id="recchart"></div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 2 시작-->
				<div class="col-md-12 col-lg-12">
					<div class="card card-overflow">
						<div class="card-body top-margin-two">
							<table id="example1" class="display">
								<thead class="text-center">
									<tr>
										<th colspan="8">조회기간</th>
										<th colspan="3">52주</th>
									</tr>
									<tr>
										<th>최고가</th>
										<th>최저가</th>
										<th>평균가</th>
										<th>최고거래량</th>
										<th>최저거래량</th>
										<th>최고증가</th>
										<th>최저증가</th>
										<th>변동율(%)</th>
										<th>최고가</th>
										<th>최저가</th>
										<th>변동율(%)</th>
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
										<td></td>
										<td></td>
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
							<table id="example" class="display" style="width: 100%">
								<thead class="text-center">
									<tr>
										<th>일자</th>
										<th>최소</th>
										<th>최대</th>
										<th>평균</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>2022-01-01</th>
										<td>87.44</td>
										<td>270.84</td>
										<td>205.32</td>
									</tr>
									<tr>
										<th>2022-01-02</th>
										<td>165.03</td>
										<td>268.34</td>
										<td>206.18</td>
									</tr>
									<tr>
										<th>2022-01-03</th>
										<td>176.09</td>
										<td>263.19</td>
										<td>206.7</td>
									</tr>
									<tr>
										<th>2022-01-04</th>
										<td>176.09</td>
										<td>262.4</td>
										<td>202.87</td>
									</tr>
									<tr>
										<th>2022-01-05</th>
										<td>176.09</td>
										<td>269.51</td>
										<td>213.32</td>
									</tr>
									<tr>
										<th>2022-01-06</th>
										<td>158.93</td>
										<td>235.8</td>
										<td>189.27</td>
									</tr>
									<tr>
										<th>2022-01-07</th>
										<td>158.73</td>
										<td>264.11</td>
										<td>202.48</td>
									</tr>
									<tr>
										<th>2022-01-08</th>
										<td>166.25</td>
										<td>265.81</td>
										<td>201.82</td>
									</tr>

									<tr>
										<th>2022-01-09</th>
										<td>87.37</td>
										<td>267.54</td>
										<td>198.49</td>
									</tr>
									<tr>
										<th>2022-01-10</th>
										<td>172.04</td>
										<td>261.95</td>
										<td>206.03</td>
									</tr>
									<tr>
										<th>2022-01-11</th>
										<td>168.86</td>
										<td>237.08</td>
										<td>188.71</td>
									</tr>
									<tr>
										<th>2022-01-12</th>
										<td>166.3</td>
										<td>260.15</td>
										<td>207.73</td>
									</tr>
									<tr>
										<th>2022-01-13</th>
										<td>171.59</td>
										<td>242.9</td>
										<td>191.04</td>
									</tr>
									<tr>
										<th>2022-01-14</th>
										<td>168.44</td>
										<td>261.54</td>
										<td>207.47</td>
									</tr>
									<tr>
										<th>2022-01-15</th>
										<td>170.37</td>
										<td>364.31</td>
										<td>248.49</td>
									</tr>
									<tr>
										<th>2022-01-16</th>
										<td>87.37</td>
										<td>258.15</td>
										<td>215.45</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
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
	<script src="/assets/vendor/highchartsstock/code/modules/data.js"></script>
	<script src="/assets/vendor/highchartsstock/code/modules/drag-panes.js"></script>
	<script src="/assets/vendor/highchartsstock/code/modules/exporting.js"></script>
	
	<script src="/assets/mk/temp/js/rec.js"></script>


</body>

</html>
