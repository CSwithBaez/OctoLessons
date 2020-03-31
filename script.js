var bg = document.getElementsByTagName('body')[0];
var count = 0.0;
(function(){
	var SIID = setInterval(function(){
		var tweak = Number(Math.round(Math.sin(count)*4));
		bg.style.backgroundColor = "rgb(" + (65 + tweak) + "," + (60 + tweak) + "," + (65 + tweak) + ");";
		count += 0.01;
	}, 2)
})();
