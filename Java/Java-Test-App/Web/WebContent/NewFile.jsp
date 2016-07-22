<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<%@ page import= "database.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
Carro carro = new Carro(); 
carro.setNome("danilo");

%>

<h1> MYSQL: <%= FirstExample.conectar() %></h1>

<h1> <%= carro.getNome() %></h1>
</body>
</html>