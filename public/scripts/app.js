(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(window).scroll(function () {
	$('.introductionText').each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 400) {
			$(this).addClass("fadeInTwo");
		}
	});
});

$(window).scroll(function () {
	$('.mainNavigation__logo').toggleClass("mainNavigation__logo--background ", $(window).scrollTop() > 200);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixHQUFFLG1CQUFGLEVBQXVCLElBQXZCLENBQTRCLFlBQVU7QUFDdEMsTUFBSSxXQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBaEM7O0FBRUEsTUFBSSxjQUFjLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBbEI7QUFDQyxNQUFJLFdBQVcsY0FBWSxHQUEzQixFQUFnQztBQUMvQixLQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFdBQWpCO0FBQ0E7QUFDRCxFQVBEO0FBUUEsQ0FURjs7QUFXQSxFQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVk7QUFDckIsR0FBRSx1QkFBRixFQUEyQixXQUEzQixDQUF1QyxtQ0FBdkMsRUFBNkUsRUFBRSxNQUFGLEVBQVUsU0FBVixLQUF3QixHQUFyRztBQUNGLENBRk4iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcblx0XHQkKCcuaW50cm9kdWN0aW9uVGV4dCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcblxuXHRcdHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzQwMCkge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluVHdvXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5tYWluTmF2aWdhdGlvbl9fbG9nbycpLnRvZ2dsZUNsYXNzKFwibWFpbk5hdmlnYXRpb25fX2xvZ28tLWJhY2tncm91bmQgXCIsICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAyMDApKTtcbiAgICAgfSk7XG5cblxuIl19
