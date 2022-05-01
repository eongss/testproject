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
								<button type="button" class="btn btn-succes">전체 선택</button>
							</div>
						</div>
						<div class="card-body card-body-weidth">
							<div class="menu-list-card">
								<span class="plus-circle-font"><i
									class="bi bi bi-caret-down-fill"></i><i class="bi bi-folder"></i>I-EMS-MENU</span>
								<ul class="list">
									<span class="branch-vertical-line-depth1"></span>
									<li><span class="horizontal-line-depth1"></span> <a
										class="menu-item" data-bs-target="#depth1"
										data-bs-toggle="collapse" href="#" aria-expanded="true"><span><i
												class="bi bi-caret-right-fill"></i>뎁스 1</span></a> <input
										id="depth3-test5" type="checkbox" />
										<ul class="collapse show" id="depth1">
											<span class="branch-vertical-line"></span>
											<li><span class="horizontal-line"></span> <a
												class="menu-item collapsed" href="#"><span>뎁스 1-1</span></a>
												<input id="depth3-test5" type="checkbox" /></li>
											<li><span class="horizontal-line"></span> <a
												class="menu-item collapsed" href="#"><span>뎁스 1-2</span></a>
												<input id="depth3-test5" type="checkbox" /></li>
										</ul></li>
									<li><span class="horizontal-line-depth1"></span> <a
										class="menu-item" data-bs-target="#depth2"
										data-bs-toggle="collapse" href="#" aria-expanded="true"><span><i
												class="bi bi-caret-right-fill"></i>뎁스 2</span></a> <input
										id="depth3-test5" type="checkbox" />
										<ul class="collapse show" id="depth2">
											<span class="branch-vertical-line"></span>
											<li><span class="horizontal-line"></span> <a
												class="menu-item collapsed" href="#"><span>뎁스 2-1</span></a>
												<input id="depth3-test5" type="checkbox" /></li>
											<li><span class="horizontal-line"></span> <a
												class="menu-item collapsed" href="#"><span>뎁스 2-2</span></a>
												<input id="depth3-test5" type="checkbox" /></li>
										</ul></li>
								</ul>
								<span class="branch-vertical-line"></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 구성 목록 종료-->
				<!-- 메인구성 목록 시작-->
				<div class="col-lg-6">
					<div class="card">
						<div class="card-header formBox">
							<div class="formBox-button-group">
								<button type="button" class="btn btn-modify"
									data-bs-toggle="modal" data-bs-target="#verticalycentered">
									<i class="bi bi-pencil-square" style="margin-right: 10px;"></i>수정
								</button>
							</div>
						</div>
						<div class="card-body card-body-weidth-overflow">
							<div class="menu-list-card">
								<span class="plus-circle-font"><i
									class="bi bi bi-caret-down-fill"></i><i class="bi bi-folder"></i>I-EMS-ROLE</span>
								<a class="tree-btn" href="javascript:menuLineAdd();"><i
									class="bi bi-plus-circle-dotted plus-circle-font"></i></a>
								<ul class="list" id="ROLEList">
									<span class="branch-vertical-line-depth1"></span>
									<div id="manuListAdd">
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child1"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>시스템 관리자</span>
										</a> <a class="tree-btn"
											href="javascript:TowLevelAdd('depth1-child1');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<input id="depth1-test1" type="checkbox" /> <a
											class="tree-btn" href="#"></a>
											<ul class="collapse show" id="depth1-child1">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 1</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 1</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															1-1</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 1</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															1-2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															1-2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															2-2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child2"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>운영/모니터링
													담당자</span>
										</a> <a class="tree-btn"
											href="javascript:TowLevelAdd('depth1-child2');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<input id="depth1-test2" type="checkbox" />
											<ul class="collapse show" id="depth1-child2">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															2-2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child3"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>현장 관리자</span>
										</a> <a class="tree-btn"
											href="javascript:TowLevelAdd('depth1-child3');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<input id="depth1-test3" type="checkbox" />
											<ul class="collapse show" id="depth1-child3">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															2-2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child4"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>일반 사용자</span>
										</a> <a class="tree-btn"
											href="javascript:TowLevelAdd('depth1-child4');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<input id="depth1-test4" type="checkbox" />
											<ul class="collapse show" id="depth1-child4">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label for="depth3-test1">Depth 2</label> <label
															for="depth3-test1">/</label> <label for="depth3-test1">Depth
															2-2</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
											</ul></li>
									</div>
								</ul>
								<span class="branch-vertical-line-depth1 "></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 구성 목록 종료-->
			</div>
		</section>
	</main>


	<!-- Vertically centered Modal -->
	<div class="modal fade" id="verticalycentered" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">ROLE NAME : 관리자</h5>
				</div>
				<div class="modal-body">
					<h5 class="modal-title" style="display: inline;">CHANGE NAME :
					</h5>
					<input type="text">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-bs-dismiss="modal">닫기</button>
					<button type="button" class="btn btn-success">저장</button>
				</div>
			</div>
		</div>
	</div>
	<!-- End Vertically centered Modal-->


	<%@ include file="/WEB-INF/jsp/frame/footer.jsp"%>

	
	<script src="/assets/mk/temp/js/role.js"></script>

	

</body>

</html>
