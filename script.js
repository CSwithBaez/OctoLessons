var count = 0.0;
var tweak = 0;
var SIID;
var tweakColor = function(){
	SIID = setInterval(function(){
		tweak = Number(Math.round(Math.sin(count)*6));
		count += 0.01;
		document.getElementsByTagName('body')[0].style.backgroundColor = "#" + (453045 + (tweak * 10101));
	}, 200)
};
tweakColor();
