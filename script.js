var bgCol = document.getElementsByTagName('body')[0].style.backgroundColor;
var count = 0.0;
var tweak = 0;
var SIID;
var tweakColor = function(){
	SIID = setInterval(function(){
		tweak = Number(Math.round(Math.sin(count)*10));
		count += 0.01;
		bgCol = "#" + (656065 + (tweak * 10101));
	}, 200)
};
tweakColor();
