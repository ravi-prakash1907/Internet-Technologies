<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/master.css">
    <title>Q2</title>
</head>

<body>
    <div class="main">
        <c:if test="${param.submit != null}">

            <div class="solution">
                <b><c:out value="expressions" /></b>
                <br>
                Result=
                <c:choose>
                    <c:when test="${param.op.equals('add')}">
                        <c:out value="${param.a+param.b}" />
                    </c:when>
                    <c:when test="${param.op.equals('sub')}">
                        <c:out value="${param.a-param.b}" />
                    </c:when>
                    <c:when test="${param.op.equals('mul')}">
                        <c:out value="${param.a*param.b}" />
                    </c:when>
                </c:choose></br>
            </div>

            </hr>

            <div class="solution">
                <b><c:out value="Using response.getParameter()" /></b>
                <br>
                Result=
                <%
                    int a = Integer.parseInt(request.getParameter("a"));
                    int b = Integer.parseInt(request.getParameter("b"));
                    String op = request.getParameter("op");
                    int result = 0;
                    switch(op) {
                        case "add":
                            result=a+b;
                            break;
                        case "sub":
                            result = a-b;
                            break;
                        case "mul":
                            result = a*b;
                            break;
                    }
                    out.write(String.valueOf(result));
                %>
            </div>

        </c:if>
    </div>
</body>

</html>