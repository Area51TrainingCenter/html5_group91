$(function(){

	$("header a").on("click", function(e){
		e.preventDefault()
		$("article.menu").toggleClass("mostrar")
	})

})