<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<!DOCTYPE html>
<html lang="ko">
<head>

<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">

<title>I-EMS</title>
<meta content="" name="description">
<meta content="" name="keywords">

<!-- Favicons -->
<link href="/assets/mk/img/iljin-icon.png" rel="icon">
<link href="/assets/mk/img/iljin-icon.png" rel="apple-touch-icon">

<!-- Google Fonts -->
<link href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

<!-- Vendor CSS Files -->
<link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">

<!-- Template Main CSS File -->
<link href="/assets/mk/css/login.css" rel="stylesheet">

</head>

<body class="bg-body">
    <div class="d-flex flex-column flex-root"  style="background-color: #eff9f9;">
        <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url('assets/mk/img/bground.png')">
            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                <a href="#" class="mb-12"> <img alt="Logo" src="assets/mk/img/lgn-logo.png" class="h-40px">
                <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    <form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" id="kt_sign_in_form" action="#">
                        <div class="text-center mb-10">
                            <h1 class="text-dark mb-3">ILJIN To IMS</h1>
                            <div class="text-gray-400 fw-bold fs-4"><a href="#" class="link-primary fw-bolder"></a></div>
                        </div>
                        <div class="fv-row mb-10 fv-plugins-icon-container">
                            <label class="form-label fs-6 fw-bolder text-dark">ID</label>
                            <input class="form-control form-control-lg form-control-solid" type="text" id="username" name="username" autocomplete="off">
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div class="fv-row mb-10 fv-plugins-icon-container">
                            <div class="d-flex flex-stack mb-2">
                                <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                            </div>
                            <input class="form-control form-control-lg form-control-solid" type="password" id="password" name="password" autocomplete="off">
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                        <div class="text-center">
                            <button type="button" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5" onclick="validateEncryptedForm(); return false;">
                                <span class="indicator-label">LOGIN</span>
                            </button>
                        </div>
                        <input type="hidden" id="rsaPublicKeyModulus" name="rsaPublicKeyModulus" value="<c:out value='${rsaPublicKeyModulus}'/>"/>
						<input type="hidden" id="rsaPublicKeyExponent" name="rsaPublicKeyExponent" value="<c:out value='${rsaPublicKeyExponent}'/>"/>
                    </form>
                    <form id="securedLoginForm" name="securedLoginForm" action="/login" method="post" style="display: none;">
                        <input type="hidden" name="securedUsername" id="securedUsername" value="" />
                        <input type="hidden"name="securedPassword" id="securedPassword" value="" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

	<!-- Vendor JS Files -->
	<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Template Main JS File -->
	<script src="/assets/mk/js/main.js"></script>

	<!-- jquery -->
	<script src="/assets/vendor/jquery/jquery.min.js"></script>

	<!-- RSA 자바스크립트 라이브러리 -->
	<script src="/assets/ri/js/jsbn.js"></script>
	<script src="/assets/ri/js/rsa.js"></script>
	<script src="/assets/ri/js/prng4.js"></script>
	<script src="/assets/ri/js/rng.js"></script>

	<script type="text/javascript">
		function validateEncryptedForm() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			if (!username || !password) {
				alert("ID/비밀번호를 입력해주세요.");
				return false;
			}
			try {
				var rsaPublicKeyModulus = document
						.getElementById("rsaPublicKeyModulus").value;
				var rsaPublicKeyExponent = document
						.getElementById("rsaPublicKeyExponent").value;
				submitEncryptedForm(username, password, rsaPublicKeyModulus,
						rsaPublicKeyExponent);
			} catch (err) {
				alert(err);
			}
			return false;
		}

		function submitEncryptedForm(username, password, rsaPublicKeyModulus,
				rsaPpublicKeyExponent) {
			var rsa = new RSAKey();
			rsa.setPublic(rsaPublicKeyModulus, rsaPpublicKeyExponent);
			// 사용자ID와 비밀번호를 RSA로 암호화한다.
			var securedUsername = rsa.encrypt(username);
			var securedPassword = rsa.encrypt(password);
			// POST 로그인 폼에 값을 설정하고 발행(submit) 한다.
			var securedLoginForm = document.getElementById("securedLoginForm");
			securedLoginForm.securedUsername.value = securedUsername;
			securedLoginForm.securedPassword.value = securedPassword;
			securedLoginForm.submit();
		}
	</script>

</body>
</html>