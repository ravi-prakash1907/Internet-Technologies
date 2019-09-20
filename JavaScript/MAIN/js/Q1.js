//  To be Implemented
function varify() {
  var name = document.getElementById('name').value;
  var rollno = document.getElementById('rollno').value;
  var dob = document.getElementById('dob').value;

  if(name == "" || rollno == "" || dob == ""){
    alert("Fill it!");
  } else {
    checkName(name);
  }
}

function checkName(x) {
  var t = x.match(/^[a-z]/g);
  //if(t != null)
    alert(t)
}
