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
		<section class="section dashboard">
			<!-- 메인구성 목록 시작-->
			<div class="row">
				<!-- 메인구성 목록 시작-->
				<div class="col-lg-7">
					<div class="card">
						<div class="card-body card-body-no-weidth">
							<div class="top-margin-two">
								<table id="example" class="display " style="width: 100%">
									<thead class="text-center">
										<tr>
											<th>상위 코드</th>
											<th>코드 ID</th>
											<th>코드 명</th>
											<th>코드 설명</th>
											<th>상태</th>
											<th>삭제</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>지역</td>
											<td>광주</td>
											<td>61</td>
											<td>2011/04/25</td>
											<td>정상</td>
											<td><i
												class="bi bi-dash-circle-dotted circle-dotted-font"></i></td>
										</tr>
										<tr>
											<td>지역</td>
											<td>나주</td>
											<td>61</td>
											<td>2011/04/25</td>
											<td>정상</td>
											<td><i
												class="bi bi-dash-circle-dotted circle-dotted-font"></i></td>
										</tr>
										<tr>
											<td>ROLE</td>
											<td>사용자</td>
											<td>61</td>
											<td>2011/04/25</td>
											<td>정상</td>
											<td><i
												class="bi bi-dash-circle-dotted circle-dotted-font"></i></td>
										</tr>
										<tr>
											<td>ROLE</td>
											<td>관리자</td>
											<td>61</td>
											<td>2011/04/25</td>
											<td>정상</td>
											<td><i
												class="bi bi-dash-circle-dotted circle-dotted-font"></i></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 구성 목록 종료-->
				<!-- 메인 설정 목록 시작-->
				<div class="col-lg-5">
					<div class="card">
						<div class="card-body card-body-no-weidth">
							<div class="menu-list-card2 formBox-text">
								<div id="dethAdFormBox">
									<div id="dethReFormBox">
										<div class="row mb-3">
											<label for="inputEmail3" class="col-sm-2 col-form-label">코드
												상위</label>
											<div class="col-sm-8">
												<select id="inputState" class="form-select">
													<option selected="">Choose...</option>
													<option>...</option>
												</select>
											</div>
											<div class="col-sm-2">
												<button type="button" class="btn btn-succes"
													onclick="javascript:codeNew();">신규</button>
											</div>
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<label for="inputEmail3" class="col-sm-2 col-form-label">코드
										ID</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="inputText">
									</div>
								</div>
								<div class="row mb-3">
									<label for="inputEmail3" class="col-sm-2 col-form-label">코드명</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="inputEmail">
									</div>
								</div>
								<div class="row mb-3">
									<label for="inputPassword3" class="col-sm-2 col-form-label">코드설명</label>
									<div class="col-sm-10">
										<div class="form-floating">
											<textarea class="form-control" placeholder="Address"
												id="floatingTextarea" style="height: 100px;"></textarea>
										</div>
									</div>
								</div>
								<div class="text-center margin-top-one">
									<button type="button" class="btn btn-succes">
										<i class="bi bi-cloud-arrow-up" style="margin-right: 10px;"></i>저장
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 설정 목록 종료-->
			</div>
		</section>
	</main>


	<%@ include file="/WEB-INF/jsp/frame/footer.jsp"%>

	<!-- Data Tables JS Files -->
	<script src="/assets/vendor/DataTables/datatables.min.js"></script>
	
	<script src="/assets/mk/temp/js/code.js"></script>

	

</body>

</html>
