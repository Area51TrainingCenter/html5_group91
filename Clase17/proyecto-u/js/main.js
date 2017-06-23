$(function(){

	$("div.iconos a:nth-child(2)").on("click", function(e){
		e.preventDefault()

		// $("nav").css("right", "0px")
		$("nav").toggleClass("aparecer")
	})

})