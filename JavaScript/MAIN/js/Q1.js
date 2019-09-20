//  To be Implemented
function varify() {
  var name = document.getElementById('name').value;
  var rollno = document.getElementById('rollno').value;
  var dob = document.getElementById('dob').value;

  if(name == "" || rollno == "" || dob == ""){
    alert("Details are incomlete!");
  } else {
    var n = checkName(name);
    var r = checkRoll(rollno);
    var d = checkDOB(dob);

    ch = '';
    if(n == 1)
      ch += 'Name\n';
    if(r == 1)
      ch += 'Roll No.\n';
    if(d == 1)
      ch += 'Date of Birth\n';

    if(ch.length >= 1)
      alert('Following detail(s) is/are invalid:\n\n' + ch)
    else
      showDOB(dob);
  }
}

function checkName(x) {
  var t = x.match(/[^a-z|A-Z|\s]+/g);
  if(t !== null)
    return 1;
  return 0;
}

function checkRoll(x) {
  if(x.length !== 7)
    return 1;
  return 0;
}

function checkDOB(x) {
  var t = x.match(/[0-3][0-9][/][01][0-9][/][0-2][0-9][0-9][0-9]/);
  if(t === null)
    return 1;
  return 0;
}

function showDOB(x) {
  var date = x.slice(0,2);
  var m = x.slice(3,5);
  var year = x.slice(6);

  x = m+"/"+date+"/"+year;


  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var d = new Date(x);
  var day = weekday[d.getDay()];
  var month = months[d.getMonth()];

  alert("Your Date of Birth:\n\n" + day + "\n" + month+ " " + date + ", " + year);
}
