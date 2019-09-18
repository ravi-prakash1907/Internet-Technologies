function auth() {
  var name = document.getElementById('uname').value;
  var pass = document.getElementById('pass').value;

  if (name == 'admin' && pass == 'admin') {
    alert("Welcome Admin!!");
  }
  else {
    alert("Invalid credentials!");
  }
}
