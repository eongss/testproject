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


</head>

<body class="toggle-sidebar">

	<%@ include file="/WEB-INF/jsp/frame/nav.jsp"%>

	<main id="main" class="main">
		<section class="section dashboard">
			<!-- 메인구성 목록 시작-->
			<div class="row">
				<!-- 메인구성 목록 시작-->
				<div class="col-lg-6">
					<div class="card">
						<div class="card-header formBox">
							<div class="formBox-button-group">
								<button type="button" class="btn btn-move">
									<i class="bi bi-arrow-up" style="margin-right: 10px;"></i>이동
								</button>
								<button type="button" class="btn btn-move">
									<i class="bi bi-arrow-down" style="margin-right: 10px;"></i>이동
								</button>
							</div>
						</div>
						<div class="card-body card-body-weidth">
							<div class="menu-list-card">
								<span class="plus-circle-font"><i
									class="bi bi bi-caret-down-fill"></i><i class="bi bi-folder"></i>I-EMS-MENU</span>
								<a class="tree-btn" href="javascript:OneLevelAdd();"><i
									class="bi bi-plus-circle-dotted plus-circle-font"></i></a>
								<ul class="list">
									<span class="branch-vertical-line-depth1"></span>
									<div id="manuListAdd">
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1"
											data-bs-toggle="collapse" href="#" aria-expanded="true"><i
												class="bi bi-caret-right-fill"></i></a> <span class="liTileFont"
											onclick="OneLevelModify('1뎁스');">1뎁스</span> <input
											id="depth3-test5" type="checkbox" /> <a class="tree-btn"
											href="javascript:TowLevelAdd();"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<ul class="collapse show" id="depth1">
												<span class="branch-vertical-line-depth1 "></span>
												<li class="liTileFont"><span
													class="horizontal-line-depth1 "></span> <a
													class="menu-item collapsed"
													href="javascript:TowLevelModify('1-1뎁스');"><span>1-1뎁스</span></a>
													<input id="depth3-test5" type="checkbox" /></li>
												<li class="liTileFont"><span
													class="horizontal-line-depth1 "></span> <a
													class="menu-item collapsed"
													href="javascript:TowLevelModify('1-2뎁스');"><span>1-2뎁스</span></a>
													<input id="depth3-test5" type="checkbox" /></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth2"
											data-bs-toggle="collapse" href="#" aria-expanded="true"><i
												class="bi bi-caret-right-fill"></i></a> <span class="liTileFont"
											onclick="OneLevelModify('2뎁스');">2뎁스</span> <input
											id="depth3-test5" type="checkbox" /> <a class="tree-btn"
											href="javascript:TowLevelAdd();"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<ul class="collapse show" id="depth2">
												<span class="branch-vertical-line-depth1 "></span>
												<li class="liTileFont"><span
													class="horizontal-line-depth1 "></span> <a
													class="menu-item collapsed"
													href="javascript:TowLevelModify('2-1뎁스');"><span>2-1뎁스</span></a>
													<input id="depth3-test5" type="checkbox" /></li class="liTileFont">
												<li><span class="horizontal-line-depth1 "></span> <a
													class="menu-item collapsed"
													href="javascript:TowLevelModify('2-2뎁스');"><span>2-2뎁스</span></a>
													<input id="depth3-test5" type="checkbox" /></li>
											</ul></li>
									</div>
								</ul>
								<span class="branch-vertical-line-depth1 "></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 구성 목록 종료-->
				<!-- 메인 설정 목록 시작-->
				<div class="col-lg-6">
					<div class="card" id="dethAdFormBox">
						<div id="dethReFormBox">
							<div class="card-header formBox">
								<ul class="nav nav-pills card-header-pills">
									<li class="nav-item"><a class="nav-link active" href="#">1
											뎁스</a></li>
									<li class="nav-item"><a class="nav-link" href="#">2 뎁스</a>
									</li>
								</ul>
							</div>
							<div class="card-body card-body-weidth">
								<div class="menu-list-card formBox-text">
									<div class="row mb-3">
										<label for="inputEmail3" class="col-sm-2 col-form-label">LV1-이름</label>
										<div class="col-sm-10">
											<input type="text" class="form-control" id="inputText">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-sm-2 col-form-label">URL
											경로</label>
										<div class="col-sm-10">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputPassword3" class="col-sm-2 col-form-label">설명</label>
										<div class="col-sm-10">
											<div class="form-floating">
												<textarea class="form-control" placeholder="Address"
													id="floatingTextarea" style="height: 100px;"></textarea>
											</div>
										</div>
									</div>
									<div class="text-center">
										<button type="button" class="btn btn-delete">
											<i class="bi bi-trash" style="margin-right: 10px;"></i>삭제
										</button>
										<button type="button" class="btn btn-succes">
											<i class="bi bi-cloud-arrow-up" style="margin-right: 10px;"></i>저장
										</button>
									</div>
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
	
	<script src="/assets/mk/temp/js/menu.js"></script>

	

</body>

</html>
