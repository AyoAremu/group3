function moveUp(){
  var element = document.getElementById("moveme");   
  var position = 370;
  var id = setInterval(frame, 1);
  function frame() {
    if (position === 0) {
      clearInterval(id);
    } else {
      position--;
    //   element.style.left= position + "px"; 
      element.style.top= position + "px"; 
    }
  }
}
function moveDown() {
  var eleme = document.getElementById("moveme");   
  var posi = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (posi === 370) {
      clearInterval(id);
    } else {
      posi++;
      eleme.style.top = posi + "px"; 
      eleme.style.top = posi + "px"; 
    }
  }
}
function moveLeft(){
  var element = document.getElementById("moveme");   
  var position = 370;
  var id = setInterval(frame, 1);
  function frame() {
    if (position === 0) {
      clearInterval(id);
    } else {
      position--;
      element.style.left = position + "px"; 
      element.style.right = position + "px"; 
    }
  }
}
 
function moveRight(){
  var element = document.getElementById("moveme");   
  var position = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (position === 370) {
      clearInterval(id);
    } else {
      position++;
      element.style.left = position + "px"; 
      element.style.right = position + "px"; 
    }
  }
}
function moveQuit() {
  var eleme = document.getElementById("moveme");   
  var posi = 0;
  var id = setInterval(frame, 1);
  function frame() {
       if (posi === 370) {
      clearInterval(id);
        if (alert ("Are you sure you want to quit programme")) {
    document.getElementById("moveme");
   //  alert("you quited");
    
} else {
    document.write("OK, you exited the program.");
}
    } else {
      posi++;
      eleme.style.bottom = posi + "px"; 
      eleme.style.bottom = posi + "px"; 
    }
  }
}

     
 


   
  

 
function myMove() {
    alert("wouold you like to move");
   // var reply = confirm("Would you like more addition question?");
  var elem = document.getElementById("moveme");   
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos === 370) {
      clearInterval(id);
        if (confirm("would you like to continue")) {
    document.getElementById("moveme");
     alert("press any of specified buttons to move ball");
    
} else {
    document.write("OK, you exited the program.");
}
    } else {
      pos++;
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}



 
