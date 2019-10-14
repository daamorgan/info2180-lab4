document.addEventListener('DOMContentLoaded',()=> {
	var squares=document.getElementById("board").querySelectorAll("div");
  	for(var i=0; i < squares.length; i++){
  		squares[i].className="square";
  }
  startup(squares);
});
 

function makeListener(box){
	box.addEventListener("click", function(){
		if (numOfSelection%2==0){
			box.classList.add("X");
			box.textContent="X";
			numOfSelection++;
		}else{
			box.classList.add("O");
			box.textContent="O";
			numOfSelection++;
		}
})}

function AllListener(array){
	array.forEach(makeListener);
	}


function squareId(array){
	for(var i=0; i < array.length; i++){
		array[i].id=`${i+1}`;
}}

var numOfSelection=0;


function startup(array){
	var state=[];/*SHOULD THIS BE GLOBAL*/
	AllListener(array);
	squareId(array);
}