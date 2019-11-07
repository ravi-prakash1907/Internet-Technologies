var factorial = 1;
var tbl = "";
var res = "";

////////////////////////////////

function table(x) {
  for (var i = 1; i < 10; i++) {
    tbl += "<i>" + x + "</i> x " + "<i>" + i + "</i> " + " " + "= <b>" + (x*i) + "</b><br />";
  }
  tbl += "<i>" + x + "</i> x " + "<i>" + i + "</i> = <b>" + (x * i) + "</b><br />";
  return tbl;
}

function fact(x) {
  if (x > 0)
    for (var i = 1; i <= x; i++) {
      factorial *= i;
    } else {
    factorial *= 1;
  }
  return factorial;
}

////////////////////////////////

function b1() {
  var num = document.getElementById('num').value;

  res = table(num);
  disp(res);
}

function b2() {
  var num = document.getElementById('num').value;

  res += num + "! = <b>";
  res += fact(num) + "</b>";
  
  disp(res);
}

////////////////////////////////

function disp(r){
    var S = "";
    S += "  <font size='5px'>" + r + "</font></br>";
  
  document.getElementById('solution').innerHTML = S;
  document.getElementById('solution').style.color = 'teal';
}


