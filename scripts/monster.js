$(document).ready(function() {
	goLightning();
	window.onblur = stopLightning;
	window.onfocus = goLightning;
	var int1, int2, int3;
	var w = 367;
	var m = 10;
	$("#btnRandom").click(randomize);
	$("#btnReset").click(reset);
	function getRandom(number) {
		return Math.floor(Math.random() * number);
	}
	function randomize() {
		$(".face").each(function(index) {
			var target_position = getRandom(m);
			var current_position = clicks[index];
			clicks[index] = target_position;
			if (target_position > current_position) {
				var move_to = (target_position - current_position) * w;
				$(this).animate({left: "-=" + move_to +"px"}, 500);
			} else if (target_position < current_position) {
				var move_to = (current_position - target_position) * w;
				$(this).animate({left: "+=" + move_to +"px"}, 500);
			}
		});
	}
	function reset() {
		$(".face").each(function(index) {
			clicks[index] = 0;
			$(this).animate({left: "0px"}, 500);
		});
	}
	function goLightning() {
		int1 = setInterval(function() {
			lighting_one();
		}, 4000);
		int2 = setInterval(function() {
			lighting_two();
		}, 5000);
		int3 = setInterval(function() {
			lighting_three();
		}, 7000);
	}
	function stopLightning() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	}
	var clicks = [0, 0, 0, 0];
	function moveMe(obj, index) {
		if (clicks[index] < 9) {
			$(obj).animate({left: "-=367px"}, 500);
			++clicks[index];
		} else {
			$(obj).animate({left: "0px"}, 500);
			clicks[index] = 0;
		}

	}
	$("#head").click(function() {
		moveMe(this, 0);
	});
	$("#eyes").click(function() {
		moveMe(this, 1);
	});
	$("#nose").click(function() {
		moveMe(this, 2);
	});
	$("#mouth").click(function() {
		moveMe(this, 3);
	});
});
// функции сверкания молний
function lighting_one() {
	$("#lighting1").fadeIn(250).fadeOut(250);
}
function lighting_two() {
	$("#lighting2").fadeIn(250).fadeOut(250);
}
function lighting_three() {
	$("#lighting3").fadeIn(250).fadeOut(250);
}