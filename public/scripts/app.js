(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(window).scroll(function () {
	$('.introductionText, .portfolioItems__one--content, .portfolioItems__two--content, .portfolioItems__three--content').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 400) {
			$(this).addClass("fadeInTwo");
		}
	});
});

$(window).scroll(function () {
	$('.portfolioItems__one--image, .portfolioItems__three--image').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 400) {
			$(this).addClass("slideRight");
		}
	});
});

$(window).scroll(function () {
	$('.portfolioItems__two--image').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 400) {
			$(this).addClass("slideLeft");
		}
	});
});

$(window).scroll(function () {
	$('.mainNavigation__logo').toggleClass("mainNavigation__logo--background ", $(window).scrollTop() > 200);
});

$(".hamburgerMenu").click(function () {
	$(".hamburgerMenu__list").toggleClass("disBtn");
	$(".hamburgerMenu__list").toggleClass("fadeInTwo");
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixHQUFFLGtIQUFGLEVBQXNILElBQXRILENBQTJILFlBQVU7QUFDckksTUFBSSxXQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBaEM7O0FBRUEsTUFBSSxjQUFjLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBbEI7QUFDQyxNQUFJLFdBQVcsY0FBWSxHQUEzQixFQUFnQztBQUMvQixLQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFdBQWpCO0FBQ0E7QUFDRCxFQVBEO0FBUUEsQ0FURjs7QUFXQSxFQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDMUIsR0FBRSw0REFBRixFQUFnRSxJQUFoRSxDQUFxRSxZQUFVO0FBQy9FLE1BQUksV0FBVyxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWhDOztBQUVBLE1BQUksY0FBYyxFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQWxCO0FBQ0MsTUFBSSxXQUFXLGNBQVksR0FBM0IsRUFBZ0M7QUFDL0IsS0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixZQUFqQjtBQUNBO0FBQ0QsRUFQRDtBQVFBLENBVEY7O0FBWUEsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzFCLEdBQUUsNkJBQUYsRUFBaUMsSUFBakMsQ0FBc0MsWUFBVTtBQUNoRCxNQUFJLFdBQVcsRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFoQzs7QUFFQSxNQUFJLGNBQWMsRUFBRSxNQUFGLEVBQVUsU0FBVixFQUFsQjtBQUNDLE1BQUksV0FBVyxjQUFZLEdBQTNCLEVBQWdDO0FBQy9CLEtBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsV0FBakI7QUFDQTtBQUNELEVBUEQ7QUFRQSxDQVRGOztBQVdBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUM1QixHQUFFLHVCQUFGLEVBQTJCLFdBQTNCLENBQXVDLG1DQUF2QyxFQUE2RSxFQUFFLE1BQUYsRUFBVSxTQUFWLEtBQXdCLEdBQXJHO0FBQ0EsQ0FGRDs7QUFPQSxFQUFFLGdCQUFGLEVBQW9CLEtBQXBCLENBQ0UsWUFBVztBQUNULEdBQUUsc0JBQUYsRUFBMEIsV0FBMUIsQ0FBc0MsUUFBdEM7QUFDQSxHQUFFLHNCQUFGLEVBQTBCLFdBQTFCLENBQXNDLFdBQXRDO0FBQ0QsQ0FKSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5pbnRyb2R1Y3Rpb25UZXh0LCAucG9ydGZvbGlvSXRlbXNfX29uZS0tY29udGVudCwgLnBvcnRmb2xpb0l0ZW1zX190d28tLWNvbnRlbnQsIC5wb3J0Zm9saW9JdGVtc19fdGhyZWUtLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cblx0XHR2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHRpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys0MDApIHtcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcImZhZGVJblR3b1wiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnBvcnRmb2xpb0l0ZW1zX19vbmUtLWltYWdlLCAucG9ydGZvbGlvSXRlbXNfX3RocmVlLS1pbWFnZScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcblxuXHRcdHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzQwMCkge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwic2xpZGVSaWdodFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcblx0XHQkKCcucG9ydGZvbGlvSXRlbXNfX3R3by0taW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cblx0XHR2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHRpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys0MDApIHtcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcInNsaWRlTGVmdFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXHQkKCcubWFpbk5hdmlnYXRpb25fX2xvZ28nKS50b2dnbGVDbGFzcyhcIm1haW5OYXZpZ2F0aW9uX19sb2dvLS1iYWNrZ3JvdW5kIFwiLCAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMjAwKSk7XG59KTtcblxuXG5cblxuJChcIi5oYW1idXJnZXJNZW51XCIpLmNsaWNrKFxuICBmdW5jdGlvbigpIHtcbiAgICAkKFwiLmhhbWJ1cmdlck1lbnVfX2xpc3RcIikudG9nZ2xlQ2xhc3MoXCJkaXNCdG5cIik7XG4gICAgJChcIi5oYW1idXJnZXJNZW51X19saXN0XCIpLnRvZ2dsZUNsYXNzKFwiZmFkZUluVHdvXCIpO1xuICB9XG4pO1xuIl19
