let count = 0.0;
let xFw = true;
let yFw = true;
const shift = (xMov, yMov) => {
	var ballthingo = document.getElementById('ballthingo');
	var initL = ballthingo.style.left;
	initL.slice(0, initL.length - 2);
	var initT = ballthingo.style.top;
	initT.slice(0, initT.length - 2);
	ballthingo.style.left = (initL + xMov) + "px";
	ballthingo.style.top = (initT + yMov) + "px";
}
(function(){
	const SIID = setInterval(function(){
		var tweak = Number(Math.round(Math.sin(count)*4));
		xFw ? shift(2, 0) : shift(-2, 0);
		yFw ? shift(0, 2) : shift(0, -2);
		(ballthingo.style.left > window.innerWidth) ? xFw = false
         	: (ballthingo.style.left < 0) ? xFw = true
         	: null;
		(ballthingo.style.top > window.innerHeight) ? yFw = false
         	: (ballthingo.style.top < 0) ? yFw = true
         	: null;
		count += 0.05;
		document.getElementsByTagName('body')[0].style.backgroundColor = "#" + (151515 + (tweak * 10101));
	}, 20)
})();
