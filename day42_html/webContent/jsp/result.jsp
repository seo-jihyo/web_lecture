<%@  page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결과창</title>
</head>
<body>
<%
	request.setCharacterEncoding("utf-8");
	String name = request.getParameter("irum"); /* (irum)에 해당하는 parameter에 담겨있던 값을 받아옴 */
	String pass = request.getParameter("pwd");
	String email = request.getParameter("mail");
	
	out.print(name+" 님 반갑습니다. 비번은 :" +pass+"<br>"+email );
%>
<hr>
	<h2> <%= name +" 님 반갑습니다. 비번은 :" + pass + "<br>" + email %> </h2> 
</body>
</html>