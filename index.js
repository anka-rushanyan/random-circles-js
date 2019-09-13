'use strict';


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};
document.body.onclick = function(e) {
	var left = e.clientX - 50 + 'px';
	var top = e.clientY - 50 + 'px';
	var r = randomInteger(0, 255);
	var g = randomInteger(0, 255);
	var b = randomInteger(0, 255);
	var div = document.createElement('div');
	div.className = 'circle';
	document.body.appendChild(div);
	div.style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	div.style.top = top;
	div.style.left = left;
};