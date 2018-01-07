$(document).ready(function() {
	lighting_one(4000);
	lighting_two(5000);
	lighting_three(7000);

	var headClix = 0, eyeClix = 0, noseClix = 0, mouthClix = 0;
	$("#head").click(function() {
		console.log("head");
		if (headClix < 9) {
			$(this).animate({left: "-=367"}, 500);
			headClix += 1;
		} else {
			$(this).animate({left: "0px"}, 500);
			headClix = 0;
		}
	});
	$("#eyes").click(function() {
		if (eyeClix < 9) {
			$(this).animate({left: "-=367"}, 500);
			eyeClix += 1;
		} else {
			$(this).animate({left: "0px"}, 500);
			eyeClix = 0;
		}
	});
	$("#nose").click(function() {
		if (noseClix < 9) {
			$(this).animate({left: "-=367"}, 500);
			noseClix += 1;
		} else {
			$(this).animate({left: "0px"}, 500);
			noseClix = 0;
		}
	});
	$("#mouth").click(function() {
		if (mouthClix < 9) {
			$(this).animate({left: "-=367"}, 500);
			mouthClix += 1;
		} else {
			$(this).animate({left: "0px"}, 500);
			mouthClix = 0;
		}
	});
});
// функции сверкания молний
function lighting_one(t) {
	$("#lighting1").fadeIn(250).fadeOut(250);
	setTimeout("lighting_one()", t);
}
function lighting_two(t) {
	$("#lighting2").fadeIn(250).fadeOut(250);
	setTimeout("lighting_two()", t);
}
function lighting_three(t) {
	$("#lighting3").fadeIn(250).fadeOut(250);
	setTimeout("lighting_three()", t);
}