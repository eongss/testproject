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
			<div class="row">
				<!-- 카드 1 시작 -->
				<div class="col-lg-12">
					<div class="card">
						<div class="card-body top-margin-two">
							<table id="example" class="display" style="width: 100%">
								<thead class="text-center">
									<tr>
										<th>발전소 ID</th>
										<th>사업자명</th>
										<th>설비구분</th>
										<th>장애등급</th>
										<th>발생시각</th>
										<th>복구시각</th>
										<th>장애코드</th>
										<th>장애 메시지</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
									</tr>
									<tr>
										<td>발전소1</td>
										<td>사업자1</td>
										<td>설비1</td>
										<td>등급1</td>
										<td>2022-04-07 15:36:26</td>
										<td>2022-04-07 15:32:26</td>
										<td>단순오류</td>
										<td>단순 오류입니다</td>
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
