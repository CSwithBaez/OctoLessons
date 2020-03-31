var count = 0.0;
(function(){
	var SIID = setInterval(function(){
		var tweak = Number(Math.sin(count)*4);
		count += 0.01;
		document.getElementsByTagName('body')[0].style.backgroundColor = "#" + (151315 + (tweak * 10101));
	}, 20)
})();
