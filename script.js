var count = 0.0;
var tweak = 0;
var SIID;
var tweakColor = function(){
	SIID = setInterval(function(){
		tweak = Number(Math.round(Math.sin(count)*4));
		count += 0.01;
		document.getElementsByTagName('body')[0].style.backgroundColor = "#" + (251825 + (tweak * 10101));
	}, 20)
};
tweakColor();
