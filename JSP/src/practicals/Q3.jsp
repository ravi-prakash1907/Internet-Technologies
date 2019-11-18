<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/master.css">
    <title>Q3</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

    <div class="main">

        <h1>Q3</h1>
        <form action="Q3.jsp" method="POST" style="margin-top: 10px;">
            <c:if test="${param.submit.equals('submit')}">
                <c:set var="valid" value='${false}' scope="page"/>
                <c:if test="${(param.username != null) && (param.email != null) && (param.number != null) && (param.date != null)}">
                    <c:if test="${param.gender.equals('male') || param.gender.equals('female')}">
                        <c:set var="valid" value="${true}"/>
                    </c:if>
                </c:if>
                <div class="form-group">
                <textarea name="result" id="result" cols="50" rows="10" class="form-control" readonly>
                        <c:choose>
                        <c:when test="${valid}">
                            <c:out value="### You Entered Valid Input ###" />
                            <c:out value="Username: ${param['username']}" />
                            <c:out value="Email: ${param['email']}" />
                            <c:out value="DOB: ${param.date}" />
                            <c:out value="Gender: ${param.gender}" />
                            <c:out value="Favorite Number: ${param.number}"/>
                            <c:out value="Favorite food: " />
                            <c:forEach items="${paramValues.food}" var="current"><c:out value="${current}" /> </c:forEach>
                        </c:when>
                        <c:otherwise>
                            <c:out value="Invalid Input"/>
                        </c:otherwise>
                        </c:choose>
                </textarea>
                </div>
            </c:if>
            <pre>
                <input type="text" id="username" class="form-control" name="username" placeholder="Username">
                <input type="date" name="date" id="date" class="form-control" placeholder="Date of Birth">
                <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                <input type="number" name="number" id="number" class="form-control" placeholder="Lucky Number">

                <div class="leftInput">
                    <label>Gender</label>
                    <label><input type="radio" name="gender" id="gender" value="male"> Male</label>
                    <label><input type="radio" name="gender" id="gender" value="female"> Female</label>

                    <label>Favorite Food?</label>
                    <label><input type="checkbox" name="food" id="food" value='pizza'> Pizza</label>
                    <label><input type="checkbox" name="food" id="food" value='pasta'> Pasta</label>
                    <label><input type="checkbox" name="food" id="food" value='chinese'> Chinese</label>
                </div>
                <button type="submit" name='submit' value="submit">Submit</button>
            </pre>
        </form>
    </div>
</body>

</html>