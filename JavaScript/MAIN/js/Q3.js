function beg() {
  var num = prompt('Enter the number of elements in the array!\n');
  var arr = prompt('Enter ' + num + ' array elements (numbers) in following formet.\n\n eg: 2,4,....\n\n\n').split(',');

  for (var i = 0; i < num; i++) {
    arr[i] = parseInt(arr[i]);    // without this, eg., 37 will be treated as 3...
  }

  sort(num, arr);
}

// Bubble Sort
function sort(num, arr){
  var temp;

  for (var i = 0; i < num-1; i++) {
    for (var j = 0; j < num-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }

//////////////////////////////////////////////////

  var S = "";

  for (i = 0; i < num; i++) {
    if(i == 0)
      S += arr[i];
    else
    S += "<font color='red'> : </font>" + arr[i];
  }
  if(S != ""){
    document.getElementById('array').innerHTML = 'Sorted Array:\n';
    document.getElementById('sol').innerHTML = S;
    document.getElementById('sol').style.font.size = '24px';
  }
}
