var bg = document.getElementsByTagName('body')[0];
(function(){
	var SIID = setInterval(function(){
		var HEX = Number(Math.round(Math.abs(Math.sin(count))*999999));
		body.style.backgroundCclor = "#" + HEX;
		count += 0.01;
	}, 200)
})();