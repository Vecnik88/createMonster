$(document).ready(function() {
	lighting_one(4000);
	lighting_two(5000);
	lighting_three(7000);
	
	var headClix = 0, eyeClix = 0, noseClix = 0, mouthClix = 0;
	$("#head").click(function() {
		$("#lighting1").fadeIn(250).fadeOut(250);
		console.log("head");
		if (headClix < 9) {
			headClix += 1;
		} else {
			headClix = 0;
		}
	});
	$("#eyes").click(function() {
		console.log("eyes");
		if (eyeClix < 9) {
			eyeClix += 1;
		} else {
			eyeClix = 0;
		}
	});
	$("#nose").click(function() {
		console.log("nose");
		if (noseClix < 9) {
			noseClix += 1;
		} else {
			noseClix = 0;
		}
	});
	$("#mouth").click(function() {
		console.log("mouth");
		if (mouthClix < 9) {
			mouthClix += 1;
		} else {
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