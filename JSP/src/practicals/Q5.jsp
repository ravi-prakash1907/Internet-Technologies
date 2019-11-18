<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/master.css">
    <title>Q5</title>
</head>

<body>
    <div class="main">
        <form action="Q5.jsp" method="post">
            <input type="text" name="word" id="word" placeholder="Enter a word!">
            <br>
            <label><input type="radio" name="even_odd" id="even_odd" value="even"> Even</label>
            <label><input type="radio" name="even_odd" id="even_odd" value="odd"> Odd</label>
            <br>
            <button type="submit" value="submit" name="submit">Submit</button>
        </form>

    </hr>
    
    <div class="solution">
        <c:if test="${param.submit != null}">
        <c:set var="win" value="${true}" scope="page"/>
            <c:choose>
                <c:when test="${param.even_odd.equals('even')}">
                    <c:forEach items="${param.word.toCharArray()}" var="currentChar" step="2" begin="1">
                        <c:if test="${!fn:contains('aeiou',currentChar)}">
                            <c:set var="win" value="${false}"/>
                        </c:if>
                    </c:forEach>
                </c:when>
                <c:when test="${param.even_odd.equals('odd')}">
                    <c:forEach items="${param.word.toCharArray()}" var="ch" step="2" begin="0">
                        <c:if test="${!fn:contains('aeiou',ch)}">
                            <c:set var="win" value="${false}" scope="page"/>
                        </c:if>
                    </c:forEach>
                </c:when>
                <c:otherwise>
                    <c:out value="Invalid Input"/>
                </c:otherwise>
            </c:choose>
            <c:if test="${win}">
                <c:out value="You Win"/>
            </c:if>
            <c:if test="${!win}">
                <c:out value="You Lose"/>
            </c:if>
        </c:if>
    </div>
    </div>
</body>

</html>