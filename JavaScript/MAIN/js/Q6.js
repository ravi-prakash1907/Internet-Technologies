//  to be implemented

  var fname, lname, email, addr, state, pin, country, comment, dropDown;

/////////////////////////////////////////


function submitted() {
  var err = 'Fill it!';
  var ok = 'Thanks for your submission!';
  var result = blanckCheck();
  if (result == 0)
    window.alert(err)
  else {
    resetIt();
    window.alert(ok);
  }
}

function resetIt() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('addr').value = '';
    document.getElementById('state').value = '';
    document.getElementById('PIN').value = '';
    document.getElementById('country').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('source').value = '';

    var id;
    var ch = 'radio';
    for (var i = 1; i < 5; i++) {
      id = ch+i;
      document.getElementById(id).checked = false;
      }

    var ch = 'cb';
    for (var i = 1; i < 7; i++) {
      id = ch+i;
      document.getElementById(id).checked = false;
    }
}

function blanckCheck() {
  fname = document.getElementById('fname').value;
  lname = document.getElementById('lname').value;
  email = document.getElementById('email').value;
  addr = document.getElementById('addr').value;
  state = document.getElementById('state').value;
  pin = document.getElementById('PIN').value;
  country = document.getElementById('country').value;
  comment = document.getElementById('comment').value;
  dropDown = document.getElementById('source').value;

  var rdo = '', id;
  var ch = 'radio';
  for (var i = 1; i < 5; i++) {
    id = ch+i;
    if(document.getElementById(id).checked){
      rdo = document.getElementById(id).value;
      break;
    }
  }

  if (fname == '' || lname == '' || email == '' || addr == '' || state == '' || pin == '' || country == '' || comment == '' || rdo == '' || dropDown == '') {
    //window.alert('Fill it!');
    return 0;
  }  else  {
    //window.alert('Front End Organization required.');
      return 1;
    }
}
