<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="sessionCounter" scope="application" value="${sessionCounter+1}" />

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/master.css">
    <title>Hello</title>
</head>

<body>
    <body>
        <div class="main">
            <c:if test="${param.submit != null}">

                <h1>
                    Hello <c:out value="${param['name']}!" />
                </h1>
                </br></hr>
    
                <div class="solution">
                    <form action="order.jsp" method="post">
                        <input type="text" name="item" id="name" placeholder="Enter item, that you want to buy."></br>
                        <input type="hidden" name="name" value="${param['name']}!" />
                        <button type="submit" name="submit" value="submit">Buy</button></br>
                    </form>
                </div>
    
                </hr>
            </c:if>
        </div>
    </body>

</html>