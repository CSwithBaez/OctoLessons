

//TOOLS


var hexToRgbaConverter = function(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } 
    else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
var loopPlay = function(song, inputMethod){
	SongID = setInterval(function(){
		song.volume = 0.1;
		song.play();
		if(inputMethod.val() === "StopSong"){
			clearInterval(SongID);
			song.pause();
		}
	}, (song.duration * 1000));
}


//MAIN


var title = document.querySelector("h1");
var hr = document.querySelector("hr");
var tbody = document.querySelector("tbody");
var CGScoreDisplays = document.querySelectorAll(".CGScoreDisplay");
var count = 0;
var CGScore = 0;
var haxBtn = document.querySelector('#hax');

haxBtn.addEventListener('click', function(){
	if ($('input')[0].value === "hax" && CGScore < 9999) {
		CGScore += 9999;
	}
});

var SIID;
var animateMain = function(){
	SIID = setInterval(function(){
		var HEX = Number(Math.round(Math.abs(Math.sin(count))*999999));
		var r = Math.round(Math.abs(Math.sin(count) * 255));
		var b = Math.round(Math.abs(Math.cos(count) * 255));
		title.style.color = "#" + HEX;
		hr.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0), #" + HEX + ", rgba(0, 0, 0, 0,))";
		tbody.style.borderColor = "rgba("+r+","+255+","+b+")";
		count += 0.01;
		tbody.classList.toggle("extraStyle");
		hr.style.width = Math.random() * 100 + "%";
		var coinFlip = Math.random();
		coinFlip <= 0.0005 ? document.querySelector('img').setAttribute("src", "https://www.bleedingcool.com/wp-content/uploads/2016/10/14c47ad1b79681946a5da0aace1ac107-e1477222990114-600x490-1.png") : document.querySelector('img').setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZkGT6LwC-_7GE4oic4V6nvIZ0gqhY8rrlrMDv0Fi5R9DHv_r");
		CGScoreDisplays[0].textContent = "Score : " + CGScore;
		if ($('#main').attr('style') === "display: none;") {
			clearInterval(SIID);
		}
	}, 200)
}
animateMain();


//SCREENS


var main = $('#main');
var colorGame = $('#colorGame');
var SF = $('#crappySF');
var mainToCG = $('#mainToCG');
var mainToSF = $('#mainToSF');
var CGToMain = $('#CGToMain');
var SFToMain = $('#SFToMain');
var toggleNav = $('#navnav');
var navState = false;
var screenSwitch = function(orig, next){
	orig.css('display', 'none');
	next.css('display', 'block');
}
colorGame.css('display', 'none');
SF.css('display', 'none');
mainToCG.click(function(){
	screenSwitch(main, colorGame)
});
CGToMain.click(function(){
	screenSwitch(colorGame, main);
	animateMain();
});
mainToSF.click(function(){
	screenSwitch(main, SF)
});
SFToMain.click(function(){
	screenSwitch(SF, main);
	animateMain();
});

var hashes = ["top", "intro", "quetegustahacer", "favS", "gallery", "communityLinks"];
for (let i = 0; i < 6; i++){
	var butLoc = '#' + (i + 1);
	$(butLoc).click(function(){location.hash = hashes[i]});
}

var popTables = document.querySelectorAll(".popActivate");
popTables.forEach(function(Val){
	Val.addEventListener("mouseover", function(){
		Val.querySelector(".popout").style.width = "30%";
	});
	Val.addEventListener("mouseout", function(){
		Val.querySelector(".popout").style.width = "0";
	});
});

var imgHoverer = document.querySelector("#iMEIndicator");
var imgDisplayer = document.querySelector("#iMETarget");
var imgActive = document.querySelector("#iMEImage");
var imgExit = document.querySelector("#iMEExit");
var displayImgs = document.querySelectorAll(".iMEActivate");
var imgDescribers = ["Gestalt illustration for Granada Cybersecurity, made of simple but hopefully effective shapes.",
		    "Attempt at a meme using a World of Tanks image. Please view it as it is: one of my first ever graphics creations >///<",
		    "Google Doodle entry for the theme \"Kindness\", depicted are chicks (simple, can't do complicated effectively) doing various acts of kindness.",
		    "Mock cereal box smeared full of Granada-themed imagery, created with multiple images slapped together using Adobe's 3D effects.",
		    "",
		    "",
		    "",
		    ""];
var imgDescriber = document.querySelector("#iMEDescription");
var imgPopped = false;
displayImgs.forEach(function(Img, Ind){
	Img.addEventListener("mouseenter", function(){
		if (!imgPopped){
			imgActive.setAttribute("src", Img.getAttribute("src"))
			imgHoverer.classList.remove("hidden");
			imgDescriber.innerText = imgDescribers[Ind];
		}
	});
	Img.addEventListener("mouseout", function(){
		if (!imgPopped){
			imgActive.setAttribute("src", "ARcher_IMGS/blank.png");
			imgHoverer.classList.add("hidden");
			imgDescriber.innerText = "";
		}
	});
	Img.addEventListener("click", function(){
		if (!imgPopped){
			imgHoverer.classList.add("hidden");
			imgPopped = true;
			imgDisplayer.classList.remove("hidden");
		}
	});
});
imgExit.addEventListener("click", function(){
	if(imgPopped){
		imgPopped = false;
		imgDisplayer.classList.add("hidden");
	}
});
//have span follow mouse
window.onload = function(){
        var mouseGetx, mouseGety;
    // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
        window.addEventListener('mousemove', function(event){
        	mouseGetx = event.clientX;
        	mouseGety = event.clientY;                    
        	if ( typeof mouseGetx !== 'undefined' ){
        		imgHoverer.style.left = mouseGetx + "px";
                	imgHoverer.style.top = (mouseGety + 20) + "px";
        	}
        }, false);
}

toggleNav.click(function(){
	$(".fas")[0].classList.toggle('fa-angle-double-left');
	$(".fas")[0].classList.toggle('fa-angle-double-right');
	if (!navState) {
// 		iframe.css('min-width', '120px');
		$( "#navig" ).css('width', '15%');
		toggleNav.css('left', '16%');
	}
	else {
// 		iframe.css('min-width', '0px');
		$( "#navig" ).css('width', '0');
		toggleNav.css('left', '1%');
	} 
	navState = !navState;
});

// COLOR GAME CODE (MADE FROM TUTORIAL, NOT ORIGINAL IM SORRY)


var generateColors = function(num){
	var ar = [];
	for (var i = 0; i < num; i++) {
		ar.push("rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")");
	}
	return ar;
};
var refreshButton = document.querySelector('#refresh');
var colors = generateColors(6);
var colorDisplay = document.querySelector('span');
var squares = document.getElementsByClassName('square');
var CGTitle = document.querySelector('#CGTitle');
var win = false;
var randPick = function(){
	return colors[Math.floor(Math.random() * colors.length)];
};
var goalColor = randPick();
var message = document.querySelector('#display');
var changeColors = function(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = goalColor;
	}
	CGTitle.style.backgroundColor = goalColor.replace(')', ', 0.55)').replace('rgb', 'rgba');
};
var hardButton = document.querySelector('#hard');
var easyButton = document.querySelector('#easy');
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;
var reset = function(){
	colors = generateColors(numSquares);
	goalColor = randPick();
	colorDisplay.textContent = goalColor;
	message.textContent = " ";
	CGTitle.style.backgroundColor = "rgba(0, 0, 0, 0)";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		colors[i] ? squares[i].style.backgroundColor = colors[i] : squares[i].style.display = "none";
	}
	if (win === false) {
		CGScore = Math.floor(CGScore / 10);
		CGScoreDisplays[1].textContent = "Score : " + CGScore;
	}
	else {
		win = false;
	}
};

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', function(){
		hardButton.classList.remove('selected');
		easyButton.classList.remove('selected');
		this.classList.add('selected');
		this === modeButtons[0] ? numSquares = 3 : numSquares = 6;
		reset();
	});
}
refreshButton.addEventListener('click', function(){
	// alert("click");
	reset();
	this.textContent = "New Colors?"
});
colorDisplay.textContent = goalColor;
hardButton.classList.add('selected');
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', function(event){
		var clickedColor = this.style.backgroundColor;
		if (goalColor === clickedColor) {
			message.textContent = "You've found it!";
			if (win === false) {
				numSquares > 3 ? CGScore += 2 : CGScore += 1;	
			}
			changeColors();
			refreshButton.textContent = "Play Again?"
			win = true;
		}
		else {
			this.style.backgroundColor = "rgba(0, 0, 0, 0)";
			message.textContent = "Try Again."
			if (CGScore > 0) {
				CGScore --;
			}
		}
		CGScoreDisplays[1].textContent = "Score : " + CGScore;
	})
}


// CRAPPY RPG CODE (WILL BE A LOT, GAVE UP ALREADY)


//vars
// var chrST = $('#charSelectText')[0];
// var chrSI = $('#charSelectImg');
// var username;
// var SFclass;
// var uHP;
// var uDMG;
// var uSPD;
// var battleText = $('#battleText');
// //set up img and stats
// var setChar = function(char, imgNum, level){
// 	var entClass;
// 	if (typeof level === 'undefined') { 
// 		level = null; 
// 	}
// 	if (char === '#uChar') {
// 		entClass = SFclass;
// 	}
// 	else {
// 		entClass = levels[0][1]
// 	}
// 	if (entClass === 'Greatsword') {
// 		$(char).attr('src', great[imgNum]);
// 	}
// 	else if (entClass === 'Longsword') {
// 		$(char).attr('src', long[imgNum]);
// 	}
// 	else {
// 		$(char).attr('src', scim[imgNum]);
// 	}
// };
// var setStats = function(char){

// }
// //battle
// var attack = function(){
	
// }
// var battle = function(lvl){
// 	var handle;
// 	setChar('#uChar', 0);
// 	setChar('#eChar', 0, lvl);
// 	if (levels[lvl][6][1] === 0) {
// 		battleText.text(levels[lvl][7])
// 	}
// 	else {

// 	}
// 	handle = setInterval(function(){
// 		$('#uChar').css('margin-left', count + 'px'); 
// 		$('#eChar').css('margin-right', count +'px');
// 		if (count > 249) {
// 			setChar('#uChar', 1);
// 			setChar('#eChar', 1, lvl);
// 			clearInterval(handle);
// 			count = 0;
// 		} 
// 		count ++;
// 	}, 16)
// }
// //levels array [name, class, health, attack, speed, stages of dialogue/text + battling, which ones are text(0) or battling(1), dialogue/text (goes on depending on stages)]
// var levels = [
// 	['0-1', 'Longsword', 100, 1, 70, 0, [0, 0, 1, 0, 0, 1, 0, 1], 
// 		'Welcome to the tutorial! This\'ll explain how things work here. Click anywhere in the box to continue.',
// 		'You and your enemy just are running across the screen. The second you meet in the middle and assume the rest position, you may attack.',
// 		'To attack, press either W, A, S, or D. There will be a delay where your attack button is shown in front of you (explained later). Try it now!',
// 		'Attacking or Blocking (explained next) costs stamina. Your stamina is shown on the bottommost bar, and same for your enemy\'s. It regenerates based on your Speed.',
// 		'Your opponent looks ready to attack! To block effectively, hold Shift and either W, A, S, or D, depending on the attack, shown in front of your opponent. Click to continue.',
// 		'Nice work! Now finish him off! Click to continue.']
// ];
// // r = rest, b = block, rt = right, lf = left, -h = hit, -p = prep, p = poke, d = down (slash)
// //character models
// var scim = ["swordfight/scim/run.gif", "swordfight/scim/r.png"];
// var long = ["swordfight/long/run.gif", "swordfight/long/r.png"];
// var great = ["swordfight/great/run.gif", "swordfight/great/r.png"];
// //formatting
// $('#SFToMain').css('border-radius', '40%');
// $('#charSelectText').css('margin-left', '20px');
// $('#charSelectText').css('margin-top', '20px');
// $('#name').css('margin-right', '80px');
// $('#name').css('margin-top', '20px');
// $('#confirm').css('border-radius', '20%');
// chrSI.css('object-fit', 'contain');
// chrSI.css('width', '615px');
// $('#uChar').css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(100, 100, 100, 0.75)')
// $('#eChar').css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(100, 100, 100, 0.75)')
// //screens
// $('#titleSF').css('display', 'block');
// $('#charSF').css('display', 'none');
// $('#battleSF').css('display', 'none');
// $('#SFPlay').click(function(){
// 	screenSwitch($('#titleSF'), $('#charSF'));
// });
// $('#confirm').click(function(){
// 	username = $('#name').val();
// 	if (username.length < 1) {
// 		alert('Please enter a username!');
// 		return
// 	} 
// 	screenSwitch($('#charSF'), $('#battleSF'));
// 	SFclass = $('select').val();
// 	$('#uName').text(username + ":");
// 	battle(0);
// });
// //char select
// $('select').change(function(){
// 	if ($('select').val() === 'Greatsword') {
// 		$('#DamageRelStat').attr('value', '100');
// 		$('#SpeedRelStat').attr('value', '40');
// 		chrST.textContent = 'Wielding a greatsword is hard work, but the times it hits are satisfying.';
// 		chrSI.attr('src', great[0]);
// 	}
// 	if ($('select').val() === 'Longsword') {
// 		$('#DamageRelStat').attr('value', '75');
// 		$('#SpeedRelStat').attr('value', '75');
// 		chrST.textContent = 'Masters of the longsword can handle most situations better that anyone else.';
// 		chrSI.attr('src', long[0]);
// 	}
// 	if ($('select').val() === 'Scimitar') {
// 		$('#DamageRelStat').attr('value', '40');
// 		$('#SpeedRelStat').attr('value', '100');
// 		chrST.textContent = 'Scimitars are fast, overwhelming defenses and annoying enemies.';
// 		chrSI.attr('src', scim[0]);
// 	}
// })
//battle
