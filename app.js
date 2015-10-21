$(document).ready(function(){


$("#container").on("click", ".generate", function(){

	$("#container").append("<div class='pairedButtons'></div>");
	var $el= $("#container").children().last();

	$el.append("<button class='delete'>Delete</button>");
	$el.append("<button class='change'>Change</button>");

});

$("#container").on("click", ".delete", function(){
	$(this).parent().remove();

});

$("#container").on("click", ".change", function(){
	var $target= $(this).parent();
	$target.toggleClass('active');
	if($target.hasClass('active')){
		$target.css("background-color", "red");
	}else{
		$target.css("background-color", "yellow");
	}
	
});


});

