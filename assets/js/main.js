$(function(){
	$(".menu__item").eq(2).click(
		function(){
			$(this).toggleClass("show_sub-item");
		});
})