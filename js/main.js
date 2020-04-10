 /*to set header height equal to the window's height */
$(document).ready(function(){
	$('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })