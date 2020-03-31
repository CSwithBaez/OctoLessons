var count = 0.0;
(function(){
	var SIID = setInterval(function(){
		var tweak = Number(Math.round(Math.sin(count)*4));
		count += 0.05;
		document.getElementsByTagName('body')[0].style.backgroundColor = "#" + (151315 + (tweak * 10101));
	}, 20)
})();
