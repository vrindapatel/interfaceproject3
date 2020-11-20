window.onload = function(){

	initializeGuess();
}


var word = ["XYLOPHONE", "function", "carpet", "mouse"];

var answer;

var currentGuess;

var currentword = 0; //initializes word counter

var j = [
"images/hangman1.jpg"
"images/hangman2.jpg"
"images/hangman3.jpg"
"images/hangman4.jpg"
"images/hangman5.jpg"
"images/hangman6.jpg"
"images/hangman7.jpg"];




function playAgain(){

	currentword++; //increases current word by 1

	if (currentword > (word.length - 1)){ // checks if we're outta words

		var div = document.getElementById("guess");

		div.innerHTML = "That's all we got!"; 

	} else{ //Not outta words

		initializeGuess();

	}
	
}

function initializeGuess(){ 

	answer = word[currentword].split(''); //splits up string into character array

	currentGuess = answer;

	for (var i = 0; i < currentGuess.length; i++){

		currentGuess[i] = "_";
	}

	toString();
}


function toString(){

	console.log("toString");

	var s = "";

	for (var i = 0; i < currentGuess.length; i++){

		s += (currentGuess[i] + " ");


	}

	var div = document.getElementById("guess");

	div.innerHTML = s;
}


function reset(){

	location.reload();

	document.getElementById('hangman').src = 'images/hangman1.jpg';
}


function rightLetter(){

	document.innerHTML = initializeGuess;
   	
}

function wrongLetter(){
	j++;
    if (j > 7 ){
    	reset;
    } 

}












