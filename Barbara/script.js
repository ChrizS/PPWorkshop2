console.log("Hey there!");

startTime();
$("#reset").hide();
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);

$("#clock").html(h+": "+m+": "+s);
setTimeout(startTime, 500);
};

function checkTime(number) {
	if (number < 10) { number = "0" + number;
	}
	return number
}

/*function changeColor() {
console.log("I clicked!");
$("body").css("background-color", "DarkGrey");
};*/

function startBomb() {
	var bombSeconds = 10;
	tick(bombSeconds)
};

/*function tick(bombSeconds) {
if (bombSeconds > 0) {
	setTimeout(function(){
bombSeconds = bombSeconds - 1;
		tick(bombSeconds);
$("#bomb").html(bombSeconds)
console.log(bombSeconds);},
 1000)}
else {
	console.log("BOOM");
	$("#bomb").html("BOOM !!") }
	;
};*/

function tick(bombSeconds) {
bombSeconds = bombSeconds - 1;
setTimeout(function(){
	if (bombSeconds === 0) {
		$("#bomb").html("BOOM !!");
		$("body").css("background-color", "red")
		$("#bomb").css("color", "black")
		console.log("BOOM");
		$("#reset").show();
	}
	else {
		tick(bombSeconds);
		$("#bomb").html(bombSeconds);
		console.log(bombSeconds);
	}
	}, 1000)
}
$("#reset").click(function() {
	location.reload(true)});