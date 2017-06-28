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

	$("div.sliders").owlCarousel({
		loop: true,
/*		items: 4,
		margin:10,
*/		autoplay: true,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		nav:true,
		navText: [ '<span class="mioIzquierda"><<</span>', '<span class="mioDerecha">>></span>' ],
		responsive: {
			0:{
				dots:false,
				items:1,
				margin:0
			},
			600: {
				items:2,
				margin:10,
				nav:false
			},
			980: {
				items:2
			}
		}







	})


})