<%@ page contentType="text/html"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/master.css">
    <title>additional1</title>
</head>

<body>

    <div class="main">
        <form action="additional1.jsp" method="post">
            <input type="text" name="number" id="number" placeholder="Enter a Number"></br>
            <button type="submit" name="submit1" value="submit">Submit</button>
        </form>

        <div class="solution">
            <c:if test='${param.submit1 != null}'>
                <%! int i, j; %>
                <%
                    int n = Integer.parseInt(request.getParameter("number"));
                    for(i=1; i<=n; i++) {
                        for(j=1; j<=i; j++) {
                            out.write(i+" ");
                        }
                        out.write("</br>");
                    }
                %>
            </c:if>
        </div>
    </div>

</body>

</html>