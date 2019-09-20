function timings() {
  setTimeout(function(){  document.getElementById('selfCSS').style.color = 'red'; }, 3000);
  setTimeout( function(){ document.getElementById('img').style.float = 'right';}, 2000);
  fun();
}

function fun(){
  setInterval(fun1, 4000);
}

function fun1(){
  document.getElementById('img').style.float = 'left';
  setTimeout(function(){document.getElementById('img').style.float = 'right';}, 2000);
}
