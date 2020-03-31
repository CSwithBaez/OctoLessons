var bg = document.getElementsByTagName('body')[0];
var count = 0;
(function(){
	var SIID = setInterval(function(){
		var HEX = Number(Math.round(Math.abs(Math.sin(count))*999999));
		bg.style.backgroundColor = "#" + HEX;
		count += 0.01;
	}, 200)
})();
