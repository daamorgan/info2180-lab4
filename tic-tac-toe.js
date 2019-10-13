document.addEventListener('DOMContentLoaded', (event) => {
  var squares=document.getElementById("board").querySelectorAll("div");
  for(var i=0; i < squares.length; i++){
  	squares[i].className="square";
  }
});

