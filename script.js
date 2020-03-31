var bg = document.getElementsByTagName('body')[0];
var count = 0.0;
var tweak = 0;
var tweakColor = function(){
	setInterval(function(){
		tweak = Number(Math.round(Math.sin(count)*10));
		count += 0.01;
		bg.style.backgroundColor = 
			"rgb(" + (65 + tweak).toString()
			+ "," + (60 + tweak).toString() 
			+ "," + (65 + tweak).toString() + ");";
		return bg.style.backgroundColor;
	}, 200)
};
tweakColor();
