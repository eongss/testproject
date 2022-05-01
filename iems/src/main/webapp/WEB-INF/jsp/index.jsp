<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<!DOCTYPE html>
<html lang="en">
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
<link href="/assets/mk/css/style.css" rel="stylesheet">

</head>

<body>

	<!-- ======= Header ======= -->
	<header id="header" class="header fixed-top d-flex align-items-center">
	</header>
	<!-- End Header -->

	<%-- 첫번째 메뉴 url로 redirect처리 --%>
	<c:set var="loop_flag" value="false" />
	<c:forEach var="menu" items="${user.authTopMenus }" varStatus="status">
		<c:if test="${not loop_flag }">
			<c:if test="${menu.url_nm != null and menu.url_nm != '' }">
				<c:set var="loop_flag" value="true" />
				<%-- <c:redirect url="${menu.url_nm }" /> --%>
				<c:redirect url="/operational/dashboard" />
			</c:if>
		</c:if>
	</c:forEach>


	<!-- Vendor JS Files -->
	<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Template Main JS File -->
	<script src="/assets/mk/js/main.js"></script>

	<!-- jquery -->
	<script src="/assets/vendor/jquery/jquery.min.js"></script>

</body>

</html>
