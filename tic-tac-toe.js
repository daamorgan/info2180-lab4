document.addEventListener('DOMContentLoaded',()=> {
	var squares=document.getElementById("board").querySelectorAll("div");
  	for(var i=0; i < squares.length; i++){
  		squares[i].className="square";
  	}
	allListener(squares);
	squareId(squares);
	reset(squares);
});
 
//This function adds event listerners to only one element.
function makeListener(box){
	box.addEventListener("mouseover", function(){
		box.classList.add("hover");
	});

	box.addEventListener("mouseout", function(){
		box.classList.remove("hover");
	});

	box.addEventListener("click", function(){
		if (usedBox[parseInt(box.id)-1]==false){
			if (chosen%2==0){
				box.classList.add("X");
				box.textContent="X";
				state[0].push(box.id);
			}else{
				box.classList.add("O");
				box.textContent="O";
				state[1].push(box.id);
			}
			usedBox[parseInt(box.id)-1]=true;
			console.log(usedBox);
			chosen++;
			displayWinner();
		}});
}

// This function uses makeListener() to add eventlisteners to multiple elements.
function allListener(array){
	array.forEach(makeListener);
}

//This function looks if there is a winner.
function anyWinner(){
	var possibleWins=[["1","2","3"],["1","4","7"], ["2","5","8"],["3","6","9"],["4","5","6"],["7","8","9"],["1","5","9"],["3","5","7"]];
	for (var i=0 ; i < possibleWins.length; i++){	
		for(var plays=0; plays< state.length;plays++){
			if (state[plays].includes(possibleWins[i][0]) && state[plays].includes(possibleWins[i][1])&&state[plays].includes(possibleWins[i][2])){
				return state[plays][0];
			}
		}
	}
	return "No winner"
}

//This function formulates the status message which indicates the outcome of the game.
function outcome(winner){
	var statusbar=document.getElementById("status");
		if (winner!="draw"){
			stop();
			statusbar.classList.add("you-won");
			statusbar.textContent=`Congratulations! ${winner} is the Winner!`;
		}else{
			statusbar.textContent="Sorry, it was a draw.";
		}
}

//This function displays the winner- if there is any.
function displayWinner(){
	var winner=anyWinner();
	if(chosen==9 && winner=="No winner"){
			outcome("draw");
			
	}else if(chosen>=5 && winner!="No winner"){
			outcome(winner);
	}
}


//This function assigns id numbers to the divs with the class square. 
function squareId(array){
	for(var i=0; i < array.length; i++){
		array[i].id=`${i+1}`;
}}


//This function restarts the game.
function reset(array){
	var button=document.querySelector("button");
	button.addEventListener("click", function(){
	usedBox=[false,false,false,false,false,false,false,false,false];
	state=[["X"],["O"]];
	chosen=0;
	var statusDiv=document.getElementById("status");
	statusDiv.classList.remove("you-won");
	statusDiv.textContent="Move your mouse over a square and click to play an X or an O";//can i do this without manual seeting it back
	for (var i=0; i< array.length; i++){
		var box=array[i];
		if (box.textContent=="X"){
			box.textContent=" ";
			box.classList.remove("X");
		}else if (box.textContent=="O"){
			box.textContent=" ";
			box.classList.remove("O");
		}}
	})
}

//This function prevents the players from using the empty squares after a winner has been determined. 
function stop(){
	for (var i=0; i<usedBox.length;i++){
		if (usedBox[i]==false){
			usedBox[i]=true;
		}	
	}
}




var state=[["X"],["0"]];
var chosen=0;
var usedBox=[false,false,false,false,false,false,false,false,false];
