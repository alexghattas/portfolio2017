$(window).scroll(function() {
		$('.introductionText').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeInTwo");
			}
		});
	});

$(window).scroll(function () {
        $('.mainNavigation__logo').toggleClass("mainNavigation__logo--background ", ($(window).scrollTop() > 200));
     });


