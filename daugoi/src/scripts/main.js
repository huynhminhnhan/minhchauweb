// Main

$("#slider").owlCarousel({
		center: true,
		margin:20,
		loop: true,
		items: 3,
		autoplay: true,
		// nav: true,
		
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			768:{
				items:3
			}
		},
	//	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
	});



	// Phần Clients
	
	
$(document).ready(function(){
	$('#pull').click(function(){
		$(this).toggleClass('open');
	});

	$('#pull').click(function(){
		$('ul').toggleClass('active');
	});
});






$(function(){
	$('.bxslider').bxSlider({
		mode:'horizontal',
		auto: true,
		speed: 500,
		easing: 'linear'
		
		
	});
	
  });
  
