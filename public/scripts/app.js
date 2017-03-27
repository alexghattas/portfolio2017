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
	$('.mainNavigation__logo--text, .fa-bars').toggleClass("mainNavigation__logo--background ", $(window).scrollTop() > 200);
});

$(".hamburgerMenu").click(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixHQUFFLGtIQUFGLEVBQXNILElBQXRILENBQTJILFlBQVU7QUFDckksTUFBSSxXQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBaEM7O0FBRUEsTUFBSSxjQUFjLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBbEI7QUFDQyxNQUFJLFdBQVcsY0FBWSxHQUEzQixFQUFnQztBQUMvQixLQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFdBQWpCO0FBQ0E7QUFDRCxFQVBEO0FBUUEsQ0FURjs7QUFZQSxFQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDMUIsR0FBRSw0REFBRixFQUFnRSxJQUFoRSxDQUFxRSxZQUFVO0FBQy9FLE1BQUksV0FBVyxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWhDOztBQUVBLE1BQUksY0FBYyxFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQWxCO0FBQ0MsTUFBSSxXQUFXLGNBQVksR0FBM0IsRUFBZ0M7QUFDL0IsS0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixZQUFqQjtBQUNBO0FBQ0QsRUFQRDtBQVFBLENBVEY7O0FBWUEsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzFCLEdBQUUsNkJBQUYsRUFBaUMsSUFBakMsQ0FBc0MsWUFBVTtBQUNoRCxNQUFJLFdBQVcsRUFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixHQUFoQzs7QUFFQSxNQUFJLGNBQWMsRUFBRSxNQUFGLEVBQVUsU0FBVixFQUFsQjtBQUNDLE1BQUksV0FBVyxjQUFZLEdBQTNCLEVBQWdDO0FBQy9CLEtBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsV0FBakI7QUFDQTtBQUNELEVBUEQ7QUFRQSxDQVRGOztBQVlBLEVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUM1QixHQUFFLHVDQUFGLEVBQTJDLFdBQTNDLENBQXVELG1DQUF2RCxFQUE2RixFQUFFLE1BQUYsRUFBVSxTQUFWLEtBQXdCLEdBQXJIO0FBQ0EsQ0FGRDs7QUFPQSxFQUFFLGdCQUFGLEVBQW9CLEtBQXBCLENBQ0UsWUFBVztBQUNULEdBQUUsc0JBQUYsRUFBMEIsV0FBMUIsQ0FBc0MsUUFBdEM7QUFDQSxHQUFFLHNCQUFGLEVBQTBCLFdBQTFCLENBQXNDLFdBQXRDO0FBQ0QsQ0FKSDs7QUFPQTtBQUNBLEVBQUUsV0FBRixFQUFlLEtBQWYsQ0FBcUIsWUFBWTtBQUM3QixHQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFVBQXBCO0FBQ0YsQ0FGRjs7QUFLQTtBQUNBLElBQUksUUFBUSxFQUFFLFlBQUYsQ0FBWjtBQUNBLEVBQUUsR0FBRixFQUFPLEtBQVAsQ0FBYSxZQUFXO0FBQ3BCLE9BQU0sT0FBTixDQUFjO0FBQ1YsYUFBVyxFQUFHLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBYSxNQUFiLENBQUgsRUFBMEIsTUFBMUIsR0FBbUM7QUFEcEMsRUFBZCxFQUVHLEdBRkg7QUFHQSxRQUFPLEtBQVA7QUFDSCxDQUxEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmludHJvZHVjdGlvblRleHQsIC5wb3J0Zm9saW9JdGVtc19fb25lLS1jb250ZW50LCAucG9ydGZvbGlvSXRlbXNfX3R3by0tY29udGVudCwgLnBvcnRmb2xpb0l0ZW1zX190aHJlZS0tY29udGVudCcpLmVhY2goZnVuY3Rpb24oKXtcblx0XHR2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcblxuXHRcdHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzQwMCkge1xuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiZmFkZUluVHdvXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5wb3J0Zm9saW9JdGVtc19fb25lLS1pbWFnZSwgLnBvcnRmb2xpb0l0ZW1zX190aHJlZS0taW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cblx0XHR2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHRpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys0MDApIHtcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcInNsaWRlUmlnaHRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnBvcnRmb2xpb0l0ZW1zX190d28tLWltYWdlJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuXG5cdFx0dmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdFx0aWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3crNDAwKSB7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJzbGlkZUxlZnRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXHQkKCcubWFpbk5hdmlnYXRpb25fX2xvZ28tLXRleHQsIC5mYS1iYXJzJykudG9nZ2xlQ2xhc3MoXCJtYWluTmF2aWdhdGlvbl9fbG9nby0tYmFja2dyb3VuZCBcIiwgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDIwMCkpO1xufSk7XG5cblxuXG5cbiQoXCIuaGFtYnVyZ2VyTWVudVwiKS5jbGljayhcbiAgZnVuY3Rpb24oKSB7XG4gICAgJChcIi5oYW1idXJnZXJNZW51X19saXN0XCIpLnRvZ2dsZUNsYXNzKFwiZGlzQnRuXCIpO1xuICAgICQoXCIuaGFtYnVyZ2VyTWVudV9fbGlzdFwiKS50b2dnbGVDbGFzcyhcImZhZGVJblR3b1wiKTtcbiAgfVxuKTtcblxuLy8gQWRkIGZsb2F0aW5nIG9uIGhvdmVyIG9mIG1lbnUgaXRlbVxuJChcIi5tZW51SXRlbVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nXCIpO1xuIH0pO1xuXG5cbi8vIFNtb290aCBTY3JvbGxcbnZhciAkcm9vdCA9ICQoJ2h0bWwsIGJvZHknKTtcbiQoJ2EnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkcm9vdC5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKCAkLmF0dHIodGhpcywgJ2hyZWYnKSApLm9mZnNldCgpLnRvcFxuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7Il19
