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
		<!-- 조회 구역 시작-->
		<div class="pagetitle">
			<div class="row">
				<div class="col-md-4 col-lg-2">
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
				<div class="col-md-6 col-lg-6">
					<div class="card">
						<div class="card-body card-body-weidth">
							<div class="menu-list-card">
								<span class="plus-circle-font"><i class="bi bi-folder"></i>제품
									목록</span>
								<ul class="list" id="ROLEList" style="margin-left: 2%;">
									<span class="branch-vertical-line-depth1"></span>
									<div id="manuListAdd">
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child1"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>태양광 패널</span>
										</a> <a class="tree-btn"
											href="javascript:facilitiesChange('태양광 패널');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<a class="tree-btn" href="#"></a>
											<ul class="collapse show" id="depth1-child1">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div class="liTileFont">
														<label onclick="selectValueCh('태양광 패널','한화 큐셀')">한화
															큐셀 Q.PEAK DUO ML-G11.5/BFG </label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div class="liTileFont">
														<label onclick="selectValueCh('태양광 패널','한솔 큐셀')">한솔
															큐셀 Q.PEAK DUO ML-G11.5/BFG </label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child2"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>인버터</span>
										</a> <a class="tree-btn"
											href="javascript:facilitiesChange('인버터');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<ul class="collapse show" id="depth1-child2">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div class="liTileFont">
														<label onclick="selectValueCh('인버터','인버터 1')">인버터
															1</label> <i class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div class="liTileFont">
														<label onclick="selectValueCh('인버터','인버터 2')">인버터
															2</label> <i class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child3"
											data-bs-toggle="collapse" href="#" aria-expanded="true">
												<span><i class="bi bi-caret-right-fill"></i></i>전력 계량기</span>
										</a> <a class="tree-btn"
											href="javascript:facilitiesChange('전력 계량기');"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<ul class="collapse show" id="depth1-child3">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div class="liTileFont">
														<label onclick="selectValueCh('전력 계량기','전력 계량기 2')">전력
															계량기 1</label> <i
															class="bi bi-dash-circle-dotted circle-dotted-font"></i>
													</div class="liTileFont"></li>
												<li><span class="horizontal-line"></span>
													<div>
														<label onclick="selectValueCh('전력 계량기','전력 계량기 2')">전력
															계량기 2</label> <i
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
				<!-- 메인 카드 1 끝-->
				<!-- 메인 카드 1 시작-->
				<div class="col-md-6 col-lg-6">
					<div class="card ">
						<div class="card-body card-body-weidth-overflow">
							<div class="menu-list-card formBox-text">
								<div class="row mb-3">
									<label for="inputEmail3" class="col-md-3 col-form-label">설비
										종류</label>
									<div class="col-md-9">
										<select id="facilitiesState" class="form-select"
											onchange="facilitiesChange(this.value);">
											<option selected="">설비 종류</option>
											<option value="태양광 패널">태양광 패널</option>
											<option value="인버터">인버터</option>
											<option value="전력 계량기">전력계량기</option>
										</select>
									</div>
								</div>
								<div class="row mb-3">
									<label for="inputEmail3" class="col-md-3 col-form-label">제조사</label>
									<div class="col-md-6">
										<select id="inputState" class="form-select">
											<option selected="">제조사</option>
											<option>...</option>
										</select>
									</div>
									<div class="col-md-3">
										<button type="button" class="btn btn-seacch">코드추가</button>
									</div>
								</div>
								<div class="row mb-3">
									<label for="inputEmail3" class="col-md-3 col-form-label">모델</label>
									<div class="col-md-9">
										<input type="text" class="form-control" id="facilitiesModel">
									</div>
								</div>
								<div id="dethAdFormBox">
									<div id="dethReFormBox"></div>
								</div>
								<div class="text-center">
									<button type="button" class="btn btn-succes">
										<i class="bi bi-cloud-arrow-up"></i>저장
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 메인 카드 1 끝-->
			</div>
			<!-- 메인 설정 목록 종료-->
		</section>
	</main>


	<%@ include file="/WEB-INF/jsp/frame/footer.jsp"%>

	<script src="/assets/mk/temp/js/facilities2.js"></script>

	

</body>

</html>
