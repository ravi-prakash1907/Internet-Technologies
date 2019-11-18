<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.time.LocalTime"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/master.css">
    <title>Practical 4</title>
</head>
<body>
    <div class="main">
        <form action="Q4.jsp" method="post">
            <input type="text" name="name" id="name" placeholder="Enter a Username">
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
            
        </hr>
        
        <div class="solution" align="center">
            <c:if test='${param.submit != null}'>
                <h1>
                    Good
                    <%
                        LocalTime time = LocalTime.now();
                        int currentHour = time.getHour();
                        if(currentHour >= 8 && currentHour < 12) {
                            out.println("Morning, ");
                        } else if(currentHour <= 16) {
                            out.println("Afternoon, ");
                        } else if(currentHour <= 20) {
                            out.println("Evening, ");
                        } else {
                            out.println("Night, ");
                        }
                    %>
                    <c:out value="${param['name']}!" />
                </h1>
            </c:if>
        </div>
    </div>
</body>
</html>