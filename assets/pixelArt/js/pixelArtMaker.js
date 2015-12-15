
var board = [];
var lastRow = [];
var currentColor = getRandomColor();
var _body = document.getElementsByTagName("body")[0];
function makeBoard(board, lastRow) {
	for (var i = 0; i < (53 * 23 + 31); i++) {
		var square = document.createElement("div");
		board.push(square);
		_body.appendChild(square);
	}
	for (var j = 0; j < 50; j++) {
		var square2 = document.createElement("div");
		lastRow.push(square2);
		_body.appendChild(square2);
	}
}
function addingEventListeners(board, lastRow, currentColor){
	//currentColor = getRandomColor();

	for (var i =0; i < board.length; i++){
		board[i].addEventListener("click", function(event) {
			event.target.style.backgroundColor = currentColor;
		});
	}
	for (var j = 0; j < lastRow.length; j++) {
		currentColor = getRandomColor();
		lastRow[j].addEventListener("click", function(event) {
			currentColor = event.target.style.backgroundColor;
		});
	}
}

function styleSquare(board, lastRow) {
	for (var i = 0; i < board.length; i++) {
		board[i].style.height = "1.5%";
		board[i].style.width = "1.5%";
		board[i].style.margin = "2px";
		board[i].style.border = "1px solid black";
		board[i].style.paddingBottom = "1.5%";
		board[i].style.float = "left";
		//board[i].style.backgroundColor = color;
	}
	for (var j = 0; j < lastRow.length; j++) {
		lastRow[j].style.height = "1.5%";
		lastRow[j].style.width = "1.5%";
		lastRow[j].style.margin = "2px";
		lastRow[j].style.border = "1px solid black";
		lastRow[j].style.paddingBottom = "1.5%";
		lastRow[j].style.float = "left";
		lastRow[j].style.backgroundColor = getRandomColor();
	}
} 

function getRandomColor() {
	/*Code from stackoverflow http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript*/
    var letters = '0123456789ABCDEF'.split('');
    randomColor = '#';
    for (var i = 0; i < 6; i++ ) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

makeBoard(board, lastRow);
addingEventListeners(board, lastRow, currentColor);
styleSquare(board, lastRow);
