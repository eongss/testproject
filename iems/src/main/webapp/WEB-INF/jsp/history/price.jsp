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

<link href="/assets/mk/temp/css/history.css" rel="stylesheet">

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
				<div class="col-md-4 col-lg-2 ">
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
			<div class="row">
				<!-- 카드 1 시작 -->
				<div class="col-lg-12">
					<div class="card">
						<div class="card-body top-margin-two">
							<table id="example" class="display" style="width: 100%">
								<thead class="card-table-hw">
									<tr>
										<th rowspan="2">일자</th>
										<th colspan="3">SMP ( 원 ) - 육지</th>
										<th colspan="3">SMP ( 원 ) - 제주도</th>
										<th colspan="5">REC</th>
									</tr>
									<tr>
										<th>최고가</th>
										<th>최저가</th>
										<th>평균가</th>
										<th>최고가</th>
										<th>최저가</th>
										<th>평균가</th>
										<th>최고가</th>
										<th>최저가</th>
										<th>평균가</th>
										<th>종가</th>
										<th>거래량</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
									<tr>
										<td>2022-04-07</td>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
										<td>8</td>
										<td>9</td>
										<td>10</td>
										<td>11</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- 카드 1 끝-->
			</div>
		</section>
	</main>


	<%@ include file="/WEB-INF/jsp/frame/footer.jsp"%>

	<!-- Data Tables JS Files -->
	<script src="/assets/vendor/DataTables/datatables.min.js"></script>
	<script src="/assets/mk/temp/js/history.js"></script>

	

</body>

</html>
