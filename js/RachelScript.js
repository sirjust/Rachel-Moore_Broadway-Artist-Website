$(document).ready(function() {
$("body").css("display", "none");
$("body").fadeIn(1000);
$("a.page-transition").click(function(event){
	event.preventDefault();
	linkLocation = this.href;
	$("body").fadeOut(700, redirectPage);
});

function redirectPage() {
	window.location = linkLocation;
	}
});

