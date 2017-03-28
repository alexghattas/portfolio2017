(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(window).scroll(function () {
	$('.introductionText, .portfolioItems__one--content, .portfolioItems__two--content, .portfolioItems__three--content, .portfolioItems__four--content').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("fadeInTwo");
		}
	});
});

$(window).scroll(function () {
	$('.portfolioItems__one--image, .portfolioItems__three--image').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("slideRight");
		}
	});
});

$(window).scroll(function () {
	$('.portfolioItems__two--image, .portfolioItems__four--image').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("slideLeft");
		}
	});
});

$(window).scroll(function () {
	$('.mainNavigation__logo--text, .fa-bars').toggleClass("mainNavigation__logo--background ", $(window).scrollTop() > 200);
});

$(".hamburgerMenuIcon").click(function () {
	$(".hamburgerMenu__list").toggleClass("disBtn");
	$(".hamburgerMenu__list").toggleClass("fadeInTwo");
});

$(".menuItemA").click(function () {
	$(".hamburgerMenu__list").toggleClass("disBtn");
	$(".hamburgerMenu__list").toggleClass("fadeInTwo");
});

// Add floating on hover of menu item
$(".menuItem").hover(function () {
	$(this).toggleClass("floating");
});

// Smooth Scroll
var $root = $('html, body');
$('a').click(function () {
	$root.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	return false;
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixHQUFFLGtKQUFGLEVBQXNKLElBQXRKLENBQTJKLFlBQVU7QUFDckssTUFBSSxXQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBaEM7O0FBRUEsTUFBSSxjQUFjLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBbEI7QUFDQyxNQUFJLFdBQVcsY0FBWSxHQUEzQixFQUFnQztBQUMvQixLQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFdBQWpCO0FBQ0E7QUFDRCxFQVBEO0FBUUEsQ0FURjs7QUFZQSxFQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDMUIsR0FBRSw0REFBRixFQUFnRSxJQUFoRSxDQUFxRSxZQUFVO0FBQy9FLE1BQUksV0FBVyxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWhDOztBQUVBLE1BQUksY0FBYyxFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQWxCO0FBQ0MsTUFBSSxXQUFXLGNBQVksR0FBM0IsRUFBZ0M7QUFDL0IsS0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixZQUFqQjtBQUNBO0FBQ0QsRUFQRDtBQVFBLENBVEY7O0FBWUEsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzFCLEdBQUUsMkRBQUYsRUFBK0QsSUFBL0QsQ0FBb0UsWUFBVTtBQUM5RSxNQUFJLFdBQVcsRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFoQzs7QUFFQSxNQUFJLGNBQWMsRUFBRSxNQUFGLEVBQVUsU0FBVixFQUFsQjtBQUNDLE1BQUksV0FBVyxjQUFZLEdBQTNCLEVBQWdDO0FBQy9CLEtBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsV0FBakI7QUFDQTtBQUNELEVBUEQ7QUFRQSxDQVRGOztBQVlBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUM1QixHQUFFLHVDQUFGLEVBQTJDLFdBQTNDLENBQXVELG1DQUF2RCxFQUE2RixFQUFFLE1BQUYsRUFBVSxTQUFWLEtBQXdCLEdBQXJIO0FBQ0EsQ0FGRDs7QUFPQSxFQUFFLG9CQUFGLEVBQXdCLEtBQXhCLENBQ0UsWUFBVztBQUNULEdBQUUsc0JBQUYsRUFBMEIsV0FBMUIsQ0FBc0MsUUFBdEM7QUFDQSxHQUFFLHNCQUFGLEVBQTBCLFdBQTFCLENBQXNDLFdBQXRDO0FBQ0QsQ0FKSDs7QUFPQSxFQUFFLFlBQUYsRUFBZ0IsS0FBaEIsQ0FBdUIsWUFBVztBQUNqQyxHQUFFLHNCQUFGLEVBQTBCLFdBQTFCLENBQXNDLFFBQXRDO0FBQ0EsR0FBRSxzQkFBRixFQUEwQixXQUExQixDQUFzQyxXQUF0QztBQUNBLENBSEQ7O0FBS0E7QUFDQSxFQUFFLFdBQUYsRUFBZSxLQUFmLENBQXFCLFlBQVk7QUFDN0IsR0FBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixVQUFwQjtBQUNGLENBRkY7O0FBSUE7QUFDQSxJQUFJLFFBQVEsRUFBRSxZQUFGLENBQVo7QUFDQSxFQUFFLEdBQUYsRUFBTyxLQUFQLENBQWEsWUFBVztBQUNwQixPQUFNLE9BQU4sQ0FBYztBQUNWLGFBQVcsRUFBRyxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQWEsTUFBYixDQUFILEVBQTBCLE1BQTFCLEdBQW1DO0FBRHBDLEVBQWQsRUFFRyxHQUZIO0FBR0EsUUFBTyxLQUFQO0FBQ0gsQ0FMRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5pbnRyb2R1Y3Rpb25UZXh0LCAucG9ydGZvbGlvSXRlbXNfX29uZS0tY29udGVudCwgLnBvcnRmb2xpb0l0ZW1zX190d28tLWNvbnRlbnQsIC5wb3J0Zm9saW9JdGVtc19fdGhyZWUtLWNvbnRlbnQsIC5wb3J0Zm9saW9JdGVtc19fZm91ci0tY29udGVudCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcblxuXHRcdHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluVHdvXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5wb3J0Zm9saW9JdGVtc19fb25lLS1pbWFnZSwgLnBvcnRmb2xpb0l0ZW1zX190aHJlZS0taW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cblx0XHR2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHRpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys2NTApIHtcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcInNsaWRlUmlnaHRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnBvcnRmb2xpb0l0ZW1zX190d28tLWltYWdlLCAucG9ydGZvbGlvSXRlbXNfX2ZvdXItLWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuXG5cdFx0dmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdFx0aWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3crNjUwKSB7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJzbGlkZUxlZnRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXHQkKCcubWFpbk5hdmlnYXRpb25fX2xvZ28tLXRleHQsIC5mYS1iYXJzJykudG9nZ2xlQ2xhc3MoXCJtYWluTmF2aWdhdGlvbl9fbG9nby0tYmFja2dyb3VuZCBcIiwgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDIwMCkpO1xufSk7XG5cblxuXG5cbiQoXCIuaGFtYnVyZ2VyTWVudUljb25cIikuY2xpY2soXG4gIGZ1bmN0aW9uKCkge1xuICAgICQoXCIuaGFtYnVyZ2VyTWVudV9fbGlzdFwiKS50b2dnbGVDbGFzcyhcImRpc0J0blwiKTtcbiAgICAkKFwiLmhhbWJ1cmdlck1lbnVfX2xpc3RcIikudG9nZ2xlQ2xhc3MoXCJmYWRlSW5Ud29cIik7XG4gIH1cbik7XG5cbiQoXCIubWVudUl0ZW1BXCIpLmNsaWNrKCBmdW5jdGlvbigpIHtcblx0JChcIi5oYW1idXJnZXJNZW51X19saXN0XCIpLnRvZ2dsZUNsYXNzKFwiZGlzQnRuXCIpO1xuXHQkKFwiLmhhbWJ1cmdlck1lbnVfX2xpc3RcIikudG9nZ2xlQ2xhc3MoXCJmYWRlSW5Ud29cIik7XG59KVxuXG4vLyBBZGQgZmxvYXRpbmcgb24gaG92ZXIgb2YgbWVudSBpdGVtXG4kKFwiLm1lbnVJdGVtXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiZmxvYXRpbmdcIik7XG4gfSk7XG5cbi8vIFNtb290aCBTY3JvbGxcbnZhciAkcm9vdCA9ICQoJ2h0bWwsIGJvZHknKTtcbiQoJ2EnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkcm9vdC5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKCAkLmF0dHIodGhpcywgJ2hyZWYnKSApLm9mZnNldCgpLnRvcFxuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7Il19
