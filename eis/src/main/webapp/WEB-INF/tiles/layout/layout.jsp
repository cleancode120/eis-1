<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<c:set var="tt" value="<%=System.currentTimeMillis() %>"/>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>eis</title>

	<!-- 파비콘적용 -->
	<link rel=" shortcut icon" href="/img/accoutmarketfavicon_sample.ico">
	<link rel="icon" href="/img/accoutmarketfavicon_sample.ico">


	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/bootstrap.min.css"/>">
	<!-- font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<!-- slick slider css -->
	<link href="/js/common/slick_slider/slick-theme.css" rel="stylesheet">
	<link href="/js/common/slick_slider/slick.css" rel="stylesheet">
	<!-- css -->
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/your_style.css"/>">
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/header.css"/>">
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/main.css"/>">
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/webjars/jquery-ui/1.10.3/themes/base/jquery-ui.css"/>">

	<%-- <script src="<c:url value="/webjars/jquery/3.2.1/dist/jquery.min.js?v=${tt}"/>"></script> --%>
	<script src="<c:url value="/webjars/jquery/2.1.1/dist/jquery.min.js?v=${tt}"/>"></script>

	<script src="<c:url value="/webjars/jquery-validation/1.17.0/jquery.validate.min.js"/>"></script>
	<script src="<c:url value="/webjars/jquery-validation/1.17.0/additional-methods.min.js"/>"></script>
	<script src="<c:url value="/js/common/jquery-validation-localization/messages_ko.js"/>"></script>
	<script src="<c:url value="/webjars/jquery-ui/1.10.3/ui/minified/jquery-ui.min.js"/>"></script>

	<!-- BOOTSTRAP JS -->

	<script src="<c:url value="/js/bootstrap/bootstrap.min.js"/>"></script>
	<script src="<c:url value="/js/smartadmin/app.config.js"/>"></script>
	<script src="<c:url value="/js/smartadmin/app.min.js"/>"></script>


	<!-- slick slider -->
	<script src="/js/common//slick_slider/slick.min.js"></script>

	<!-- <script src="https://use.fontawesome.com/b0a00ed3b1.js"></script> -->
	<script src="<c:url value="/js/common/commonUtil.js?v=${tt}"/>"></script>
	<script src="<c:url value="/js/login/login.js?v=${tt}"/>"></script>
	<script src="<c:url value="/webjars/jquery-form/4.2.1/jquery.form.min.js"/>"></script>
</head>
<body class="menu-on-top">
     <tiles:insertAttribute name="header" />
     <tiles:insertAttribute name="content" />
     <tiles:insertAttribute name="footer" />
     <div class="overlay">
	    <div id="loading-img"></div>
	 </div>
     <script type="text/javascript">
		$(document).ready(function(){
			//pageSetUp();
		});
	</script>
</body>
</html>