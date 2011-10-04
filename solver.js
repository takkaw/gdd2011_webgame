colorz = [];
_num = 0;
while( 1 ){
  if( document.getElementById("card"+_num) == null ){
     _num -= 1;
     break;
  }
  _num += 1;
}

var myevent = document.createEvent('MouseEvents');
myevent.initEvent('click', false, true);

//get all colors
for( i = 0 ; i < _num ; i+=2 ) {
  var elements = [
    document.getElementById("card"+i),
    document.getElementById("card"+(i+1))
  ];

  for( j in elements ){
    elements[j].dispatchEvent(myevent);
    color = elements[j].style.backgroundColor;
    colorz.push(color);
  }
}

len = colorz.length;
len = parseInt(len);

for( i = 0 ; i < len ; i++ ){
  if( colorz[i] != null ){
    for( j = i+1 ; j <  len ; j++ ){
      if( colorz[i] == colorz[j] ){
        document.getElementById("card"+i).dispatchEvent(myevent);
        document.getElementById("card"+j).dispatchEvent(myevent);
        colorz[i] = null;
        colorz[j] = null;
        break;
      }
    }
  }
}

