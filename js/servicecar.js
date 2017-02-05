 (function ($) {
	"use strict";

	function navMobileCollapse() {
		// avoid having both mobile navs opened at the same time
		$('#collapsingMobileUser').on('show.bs.collapse', function () {
			$('#collapsingNavbar').removeClass('in');
			$('[data-target="#collapsingNavbar"]').attr('aria-expanded', 'false');
		});
		$('#collapsingNavbar').on('show.bs.collapse', function () {
			$('#collapsingMobileUser').removeClass('in');
			$('[data-target="#collapsingMobileUser"]').attr('aria-expanded', 'false');
		});
		// dark navbar
		$('#collapsingMobileUserInverse').on('show.bs.collapse', function () {
			$('#collapsingNavbarInverse').removeClass('in');
			$('[data-target="#collapsingNavbarInverse"]').attr('aria-expanded', 'false');
		});
		$('#collapsingNavbarInverse').on('show.bs.collapse', function () {
			$('#collapsingMobileUserInverse').removeClass('in');
			$('[data-target="#collapsingMobileUserInverse"]').attr('aria-expanded', 'false');
		});
	}

	function init() {
		navMobileCollapse();
	}
	 
	init();

	/***************** Smooth Scrolling ******************/

	$('a[href*=#]:not([href=#collapsingNavbar])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});
	 
	   /***************** Waypoints ******************/

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});	 
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
	 
	 
})(jQuery);