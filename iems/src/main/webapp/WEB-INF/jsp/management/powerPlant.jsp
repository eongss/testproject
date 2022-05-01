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
				<!-- 메인 카드 1 시작-->
				<div class="col-md-6 col-lg-6">
					<div class="card">
						<div class="card-header formBox">
							<!-- 조회 구역 시작-->
								<div class="row">
									<div class="col-md-4 col-lg-4">
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
							<!-- 조회 구역 종료-->
						</div>
						<div class="card-body card-body-weidth">
							<div class="menu-list-card">
								<span class="plus-circle-font"><i class="bi bi bi-caret-down-fill"></i><i class="bi bi-folder"></i>발전소</span>
								<a class="tree-btn" href="javascript:powerPlantAdd();"><i class="bi bi-plus-circle-dotted plus-circle-font"></i></a>
								<ul class="list" id="ROLEList">
									<span class="branch-vertical-line-depth1"></span>
									<div id="manuListAdd">
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child1"
											data-bs-toggle="collapse" href="#" aria-expanded="true"><i
												class="bi bi-caret-right-fill"></i></a> <span class="liTileFont"
											onclick="powerPlantModify('홍성발전소');">홍성발전소 – PV단독 –
												노지형</span> <a class="tree-btn" href="javascript:facilitiesAdd();"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<ul class="collapse show" id="depth1-child1">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div class="liTileFont">
														<a class="menu-item"
															data-bs-target="#depth1-child1-child1"
															data-bs-toggle="collapse" href="#" aria-expanded="true"><i
															class="bi bi-caret-right-fill"></i></a> <a class="menu-item"
															href="javascript:facilitiesModify('패널');"><span>패널-
																2000*1800 - 1.8 - 500매 20S20P</span></a> <a class="tree-btn"
															href="javascript:buisnessmanAdd();"><i
															class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
													</div>
													<ul class="collapse show" id="depth1-child1-child1">
														<span class="branch-vertical-line"></span>
														<li class="liTileFont"><span class="horizontal-line"></span>
															<a class="menu-item"
															href="javascript:buisnessmanModify('사업자1');"><span>사업자
																	1</span></a></li>
														<li class="liTileFont"><span class="horizontal-line"></span>
															<a class="menu-item"
															href="javascript:buisnessmanModify('사업자2');"><span>사업자
																	2</span></a></li>
														<li class="liTileFont"><span class="horizontal-line"></span>
															<a class="menu-item"
															href="javascript:buisnessmanModify('사업자3');"><span>사업자
																	3</span></a></li>
													</ul></li>
												<li><span class="horizontal-line"></span>
													<div>
														<a class="menu-item"
															href="javascript:facilitiesModify('인버터');"><span
															class="liTileFont">인버터-OCI – ABC1234 – 100kW –
																300DCV – 380ACV -MPPT</span></a> <a class="tree-btn"
															href="javascript:buisnessmanAdd();"><i
															class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<a class="menu-item"
															href="javascript:facilitiesModify('인버터');"><span
															class="liTileFont">인버터-OCI – ABC1234 – 100kW –
																300DCV – 380ACV </span></a> <a class="tree-btn"
															href="javascript:buisnessmanAdd();"><i
															class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
													</div></li>
											</ul></li>
										<li><span class="horizontal-line-depth1"></span> <a
											class="menu-item" data-bs-target="#depth1-child2"
											data-bs-toggle="collapse" href="#" aria-expanded="true"><i
												class="bi bi-caret-right-fill"></i></a> <span class="liTileFont"
											onclick="powerPlantModify('제천발전소');">제천발전소 – PV단독 –
												지붕형</span> <a class="tree-btn" href="javascript:facilitiesAdd();"><i
												class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
											<ul class="collapse show" id="depth1-child2">
												<span class="branch-vertical-line"></span>
												<li><span class="horizontal-line"></span>
													<div>
														<a class="menu-item"
															href="javascript:facilitiesModify('전력량계');"><span
															class="liTileFont">전력량계 - 20200834HY - 인버터발전계측 –
																1/200 - 0 </span></a> <a class="tree-btn"
															href="javascript:buisnessmanAdd();"><i
															class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
													</div></li>
												<li><span class="horizontal-line"></span>
													<div>
														<a class="menu-item"
															href="javascript:facilitiesModify('전력량계');"><span
															class="liTileFont">전력량계 - 20200834HY - 인버터발전계측 –
																1/200 - 0 </span></a> <a class="tree-btn"
															href="javascript:buisnessmanAdd();"><i
															class="bi bi-plus-circle-dotted plus-circle-dotted-font2"></i></a>
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
					<div class="card" id="dethAdFormBox">
						<div id="dethReFormBox">
							<div class="card-header formBox">
								<ul class="nav nav-pills card-header-pills">
									<li class="nav-item"><a class="nav-link active" href="#">발전소</a>
									</li>
									<li class="nav-item"><a class="nav-link" href="#">설비</a></li>
									<li class="nav-item"><a class="nav-link" href="#">사업자</a>
									</li>
								</ul>
							</div>
							<div class="card-body card-body-weidth-overflow">
								<div class="menu-list-card2 formBox-text">
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">발전소
											명칭</label>
										<div class="col-md-9">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">발전소
											유형</label>
										<div class="col-md-9">
											<select id="inputState" class="form-select">
												<option selected="">Choose...</option>
												<option>...</option>
											</select>
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">설치
											유형</label>
										<div class="col-md-9">
											<select id="inputState" class="form-select">
												<option selected="">Choose...</option>
												<option>...</option>
											</select>
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">준공일자</label>
										<div class="col-md-9">
											<input type="date" class="form-control">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">사용전
											검사일</label>
										<div class="col-md-9">
											<input type="date" class="form-control">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">상업운전
											개시일</label>
										<div class="col-md-9">
											<input type="date" class="form-control">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">계통
											접속점</label>
										<div class="col-md-9">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">계통
											접속점 환경</label>
										<div class="col-md-5">
											<select id="inputState" class="form-select">
												<option selected="">Choose...</option>
												<option>...</option>
											</select>
										</div>
										<div class="col-md-4">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">총
											발전용량</label>
										<div class="col-md-9">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">우편번호</label>
										<div class="col-md-7">
											<input type="text" class="form-control" id="inputEmail">
										</div>
										<div class="col-md-2">
											<button type="button" class="btn btn-seacch">
												<i class="bi bi-search"></i>조회
											</button>
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">발전소
											주소</label>
										<div class="col-md-9">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">주소
											상세</label>
										<div class="col-md-9">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">위도</label>
										<div class="col-md-3">
											<input type="text" class="form-control" id="inputEmail">
										</div>
										<div class="col-md-2">
											<label for="inputEmail3" class="col-form-label">경도</label>
										</div>
										<div class="col-md-3">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">기상계측기준점</label>
										<div class="col-md-9">
											<input type="text" class="form-control" id="inputEmail">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmail3" class="col-md-3 col-form-label">참고
											사항</label>
										<div class="col-md-9">
											<textarea class="form-control" id="floatingTextarea"
												style="height: 100px;"></textarea>
										</div>
									</div>
									<div class="text-center margin-top-one">
										<button type="button" class="btn btn-succes">
											<i class="bi bi-cloud-arrow-up"></i>저장
										</button>
									</div>
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

	
	<script src="/assets/mk/temp/js/powerPlant.js"></script>

	

</body>

</html>
