$(document).ready(function(event){

    $('.nav__toggle').on('click', function(event){
		$('.nav__menu').toggleClass('js-show-menu');
		$('.nav__toggle > span').toggleClass('js-burger-open');
    });

	$('.nav__link').on('click', function(event){
		$('.nav__menu').removeClass('js-show-menu');
		$('.nav__toggle > span').removeClass('js-burger-open');
	});

	/*const navLink = $('.nav__link');
	navLink.click(function(event){
		event.preventDefault();
		navLink.removeClass('active-link');
		$(this).addClass('active-link');
	});*/
});