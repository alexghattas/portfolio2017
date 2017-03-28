$(window).scroll(function() {
		$('.introductionText, .portfolioItems__one--content, .portfolioItems__two--content, .portfolioItems__three--content, .portfolioItems__four--content').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInTwo");
			}
		});
	});


$(window).scroll(function() {
		$('.portfolioItems__one--image, .portfolioItems__three--image').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("slideRight");
			}
		});
	});


$(window).scroll(function() {
		$('.portfolioItems__two--image, .portfolioItems__four--image').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("slideLeft");
			}
		});
	});


$(window).scroll(function () {
	$('.mainNavigation__logo--text, .fa-bars').toggleClass("mainNavigation__logo--background ", ($(window).scrollTop() > 200));
});




$(".hamburgerMenuIcon").click(
  function() {
    $(".hamburgerMenu__list").toggleClass("disBtn");
    $(".hamburgerMenu__list").toggleClass("fadeInTwo");
  }
);

$(".menuItemA").click( function() {
	$(".hamburgerMenu__list").toggleClass("disBtn");
	$(".hamburgerMenu__list").toggleClass("fadeInTwo");
})

// Add floating on hover of menu item
$(".menuItem").hover(function () {
    $(this).toggleClass("floating");
 });

// Smooth Scroll
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});