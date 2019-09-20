//  To be Implemented
function varify() {
  var name = document.getElementById('name').value;
  var rollno = document.getElementById('rollno').value;
  var dob = document.getElementById('dob').value;

  if(name == "" || rollno == "" || dob == ""){
    alert("Fill it!");
  } else {
    //checkName(name);
    //checkRoll(rollno);
    checkDOB(dob);
  }
}

function checkName(x) {
  var t = x.match(/[^a-z|A-Z|\s]+/g);
  if(t !== null)
    alert('Name is not valid.')
}

function checkRoll(x) {
  if(x.length !== 7)
    alert('Roll no. is not valid.')
}

function checkDOB(x) {
  var t = x.match(/[0-3][0-9][/][01][0-9][/][0-2][0-9][0-9][0-9]/);
  if(t === null){
    alert('DOB is not valid.')
  } else {

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
}
