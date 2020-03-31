var bg = document.getElementsByTagName('body')[0];
var count = 0.0;
var tweak = 0;
var tweakColor = function(){
	var SIID = setInterval(function(){
		tweak = Number(Math.round(Math.sin(count)*4));
		bg.style.backgroundColor = 
			"rgb(" + (65 + tweak).toString()
			+ "," + (60 + tweak).toString() 
			+ "," + (65 + tweak).toString() + ");";
		count += 0.01;
	}, 200)
};
tweakColor();
