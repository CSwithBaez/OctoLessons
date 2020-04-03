var linkToTop = $('#1');
var linkToIntro = $('#2');
var linkToHacer = $('#3');
var linkToFav = $('#4');
var linkToChieve = $('#5');
var linkToComm = $('#6');
linkToTop.click(function(){
	top.location.hash = "top";
});
linkToIntro.click(function(){
	top.location.hash = "intro";
});
linkToHacer.click(function(){
	top.location.hash = "quetegustahacer";
});
linkToFav.click(function(){
	top.location.hash = "";
});
linkToChieve.click(function(){
	top.location.hash = "";
});
linkToComm.click(function(){
	top.location.hash = "communityLinks";
});
