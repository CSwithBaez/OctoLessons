var bg = document.getElementsByTagName('body')[0];
var count = 0.0;
(function(){
	var SIID = setInterval(function(){
		var tweak = Number(Math.round(Math.sin(count)*4));
		bg.style.backgroundColor = "#" + 656065 + (tweak * 10101);
		count += 0.00001;
	}, 2)
})();
