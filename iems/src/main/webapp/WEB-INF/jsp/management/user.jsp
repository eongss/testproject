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
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body card-body-no-weidth">
              <div class="menu-list-card">
                <span class="plus-circle-font"><i class="bi bi bi-caret-down-fill"></i><i class="bi bi-folder"></i>I-EMS-사용자</span>
                <ul class="list">
                  <span class="branch-vertical-line-depth1"></span>
                  <div id="manuListAdd">
                    <li>
                      <span class="horizontal-line-depth1"></span>
                      <a class="menu-item" data-bs-target="#depth1" data-bs-toggle="collapse" href="#" aria-expanded="true"><span><i class="bi bi-caret-right-fill"></i>시스템 관리자</span></a>
                      <a class="tree-btn" href="javascript:OneLevelAdd();"><i class="bi bi-plus-circle-dotted plus-circle-font2"></i></a>
                      <ul class="collapse show" id="depth1">
                        <span class="branch-vertical-line-depth1 "></span>
                        <li class="liTileFont">
                          <span class="horizontal-line-depth1 "></span>
                          <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터1');"><span>테스터1 / test1@test.com</span></a>
                        </li>
                        <li class="liTileFont">
                          <span class="horizontal-line-depth1 "></span>
                          <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터2');"><span>테스터2 / test2@test.com</span></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span class="horizontal-line-depth1"></span>
                      <a class="menu-item" data-bs-target="#depth2" data-bs-toggle="collapse" href="#" aria-expanded="true"><span><i class="bi bi-caret-right-fill"></i>운영/모니터링 담당자</span></a>
                      <a class="tree-btn" href="javascript:OneLevelAdd();"><i class="bi bi-plus-circle-dotted plus-circle-font2"></i></a>
                      <ul class="collapse show" id="depth2">
                        <span class="branch-vertical-line-depth1 "></span>
                        <li class="liTileFont">
                          <span class="horizontal-line-depth1 "></span>
                          <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터3');"><span>테스터3 / test3@test.com</span></a>
                        </li>
                        <li class="liTileFont">
                          <span class="horizontal-line-depth1 "></span>
                          <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터4');"><span>테스터4 / test4@test.com</span></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                        <span class="horizontal-line-depth1"></span>
                        <a class="menu-item" data-bs-target="#depth3" data-bs-toggle="collapse" href="#" aria-expanded="true"><span><i class="bi bi-caret-right-fill"></i>현장 관리자</span></a>
                        <a class="tree-btn" href="javascript:OneLevelAdd();"><i class="bi bi-plus-circle-dotted plus-circle-font2"></i></a>
                        <ul class="collapse show" id="depth3">
                          <span class="branch-vertical-line-depth1 "></span>
                          <li class="liTileFont">
                            <span class="horizontal-line-depth1 "></span>
                            <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터5');"><span>테스터5 / test5@test.com</span></a>
                          </li>
                          <li class="liTileFont">
                            <span class="horizontal-line-depth1 "></span>
                            <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터6');"><span>테스터6 / test6@test.com</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="horizontal-line-depth1"></span>
                        <a class="menu-item" data-bs-target="#depth4" data-bs-toggle="collapse" href="#" aria-expanded="true"><span><i class="bi bi-caret-right-fill"></i></i>일반 사용자</span></a>
                        <a class="tree-btn" href="javascript:OneLevelAdd();"><i class="bi bi-plus-circle-dotted plus-circle-font2"></i></a>
                        <ul class="collapse show" id="depth4">
                          <span class="branch-vertical-line-depth1 "></span>
                          <li class="liTileFont">
                            <span class="horizontal-line-depth1 "></span>
                            <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터7');"><span>테스터7 / test7@test.com</span></a>
                          </li>
                          <li class="liTileFont">
                            <span class="horizontal-line-depth1 "></span>
                            <a class="menu-item collapsed" href="javascript:TowLevelAdd('테스터8');"><span>테스터8 / test8@test.com</span></a>
                          </li>
                        </ul>
                      </li>
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
            <div class="card-body card-body-no-weidth" id="dethReFormBox">
                <div class="menu-list-card2 formBox-text">
                    <h3 class="form-h4">1. 사용자 정보(필수 입력)</h3>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">사용자 ID</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputText">
                        </div>
                        <div class="col-sm-2 text-center">
                            <button type="button" class="btn btn-seacch"><i class="bi bi-search" style="margin-right: 10px;"></i>확인</button>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">사용자명</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputEmail">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">권한그룹</label>
                        <div class="col-sm-8">
                        <select id="inputState" class="form-select">
                            <option selected="">Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">전화번호</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="inputEmail">
                        </div>
                    </div>
                    <hr>
                    <h3 class="form-h4 margin-top-one">2. 부가정보(선택 입력)</h3>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">소속회사</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputText">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">소속부서</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputEmail">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">유선전화</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputEmail">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">팩스번호</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputEmail">
                        </div>
                    </div>
                    <div class="text-center margin-top-one">
                      <button type="button" class="btn btn-succes"><i class="bi bi-cloud-arrow-up" style="margin-right: 10px;"></i>저장</button>
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

	
	<script src="/assets/mk/temp/js/user.js"></script>

	

</body>

</html>
