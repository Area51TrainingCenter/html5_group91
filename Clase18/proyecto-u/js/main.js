$(function(){

	$("div.iconos a:nth-child(2)").on("click", function(e){
		e.preventDefault()

		// $("nav").css("right", "0px")
		$("nav").toggleClass("aparecer")
	})

	$("div.iconos a:nth-child(1)").on("click", function(e){
		e.preventDefault()

		$("div.iconos a:nth-child(1) i").toggleClass("fa-search")
		$("div.iconos a:nth-child(1) i").toggleClass("fa-times")

		// $("div.buscador").show()
		// $("div.buscador").hide()
		$("div.buscador").toggleClass("mostrarBuscador")
	})


})