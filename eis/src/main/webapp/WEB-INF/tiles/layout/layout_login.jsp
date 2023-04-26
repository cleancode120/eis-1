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

	<!-- Basic Styles -->
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/bootstrap.min.css"/>">
	<%-- <link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/webjars/font-awesome/4.7.0/css/font-awesome.min.css"/>"> --%>

	<!-- SmartAdmin Styles : Caution! DO NOT change the order -->
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/smartadmin-production-plugins.min.css"/>">
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/smartadmin-production.min.css"/>">
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/smartadmin-skins.min.css"/>">

	<!-- SmartAdmin RTL Support -->
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/smartadmin-rtl.min.css"/>">

	<!-- We recommend you use "your_style.css" to override SmartAdmin
	     specific styles this will also ensure you retrain your customization with each SmartAdmin update. -->
	<link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/your_style.css"/>">

	<!-- GOOGLE FONT -->
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">

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

	<!-- <script src="https://use.fontawesome.com/b0a00ed3b1.js"></script> -->
	<script src="<c:url value="/js/common/commonUtil.js?v=${tt}"/>"></script>
	<script src="<c:url value="/js/login/login.js?v=${tt}"/>"></script>

</head>
<body>
	<!-- HEADER -->
	<header id="header">
	</header>
	<!-- END HEADER -->
	<tiles:insertAttribute name="content" />

	<div class="overlay">
	    <div id="loading-img"></div>
	</div>
	<script type="text/javascript">
		$(document).ready(function(){
			pageSetUp();
		});
	</script>
</body>
</html>