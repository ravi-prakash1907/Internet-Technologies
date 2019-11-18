<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/master.css">
    <title>Q2</title>
</head>
<body style="width: 50%; padding: auto; margin: auto; padding-top: 10px; text-align: center;">
    <div class="main">
        <form action="handler.jsp" method="post">
            <input type="text" name="a" id="a" placeholder="Enter a Number">
            <input type="text" name="b" id="b" placeholder="Enter a Number"></br>
            <label><input type="radio" name="op" id="op-add" value="add"> ADDITION</label>
            <label><input type="radio" name="op" id="op-add" value="sub"> SUBTRACTION</label>
            <label><input type="radio" name="op" id="op-add" value="mul"> MULTIPLICATION</label></br>
            <button type="submit" name="submit">Submit</button>
        </form>
    </div>
</body>
</html>