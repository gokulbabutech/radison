(function($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(300);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.sticky-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('now-visible');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('now-visible');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();


	//Slick Slider
	$('.slider-for').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   arrows: false,
	   fade: true,
	   asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	   slidesToShow: 3,
	   slidesToScroll: 1,
	   asNavFor: '.slider-for',
	   dots: true,
	   arrows: true,
	   focusOnSelect: true,
	   responsive: [{

	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        infinite: true
	      }

	    }, {

	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1
	      }

	    }, {

	      breakpoint: 300,
	      settings: "unslick" // destroys slick

	    }]
	});

	$('a[data-slide]').click(function(e) {
	   e.preventDefault();
	   var slideno = $(this).data('slide');
	   $('.slider-nav').slick('slickGoTo', slideno - 1);
	});


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><Span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').click(function() {
			$(this).prev('ul').slideToggle(500);
		});


		//Disable dropdown parent link
		$('.navigation li.dropdown > a').click(function(e) {
			e.preventDefault();
		});
	}


	//Revolution Slider
	if($('.main-slider .tp-banner').length){

		var MainSlider = $('.main-slider');
		var strtHeight = MainSlider.attr('data-start-height');
		var slideOverlay =  "'"+ MainSlider.attr('data-slide-overlay') +"'";

		$('.main-slider .tp-banner').show().revolution({
		dottedOverlay: slideOverlay,
		  delay:100000,
		  startwidth:1200,
		  startheight:strtHeight,
		  hideThumbs:600,

		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,

		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview3",

		  touchenabled:"on",
		  onHoverStop:"off",

		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,

		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

		  keyboardNavigation:"off",

		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:50,

		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,

		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,

		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",

		  spinner:"spinner4",

		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,

		  shuffle:"off",

		  autoHeight:"off",
		  forceFullWidth:"on",

		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,

		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });
	}

	//Search Popup / Hide Show
	if($('#search-popup').length){

		//Show Popup
		$('.search-box-btn').click(function(e) {
			e.preventDefault();
			$('#search-popup').addClass('popup-visible');
		});

		//Hide Popup
		$('.close-search').click(function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}

	// Date picker
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}

	// Date picker
	function datepicker1 () {
	    if ($('#datepicker-1').length) {
	        $('#datepicker-1').datepicker();
	    };
	}

	// Date picker
	function datepicker2 () {
	    if ($('#datepicker-2').length) {
	        $('#datepicker-2').datepicker();
	    };
	}

	// Date picker
	function datepicker3 () {
	    if ($('#datepicker-3').length) {
	        $('#datepicker-3').datepicker();
	    };
	}

	//  Video Fancybox
	function videoFancybox () {
		if ($("video-fancybox").length) {
			$("video-fancybox").click(function() {
			    $.fancybox({
			            'padding'       : 0,
			            'autoScale'     : false,
			            'transitionIn'  : 'none',
			            'transitionOut' : 'none',
			            'title'         : this.title,
			            'width'         : 680,
			            'height'        : 495,
			            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			            'type'          : 'swf',
			            openEffect      : 'elastic',
					    closeEffect     : 'elastic',
					    helpers         : {
					    	media : {}
					    },
			            'swf'           : {
			            	'wmode'             : 'transparent',
			                'allowfullscreen'   : 'true'
			            }
			        });

			    return false;
			});
		};
	}
	videoFancybox();

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			dots:false,
			smartSpeed: 1000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}

	//two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots:true,
			smartSpeed: 1000,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				}
			}
		});
	}



	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>' ],
					dots: false,
					autoplay: false,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:10,
					items: 1,
					nav: false,
					navText:false,
					dots: false,
					center: false,
					autoplay: false,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.click('.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}


	//room dimensions
    if ($('.room-dimensions .bxslider').length) {
		$('.room-dimensions .bxslider').bxSlider({
	        nextSelector: '.room-dimensions #slider-next',
	        prevSelector: '.room-dimensions #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.room-dimensions .slider-pager .thumb-box'
	    });
	};

	//Jquery Tabs Box
	if($('.tabs-box').length){
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').click(function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('href'));
			
			target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
		
	}

	//Tabs Box
	if($('.tabs-box-one').length){
		//Tabs
		$('.tabs-box-one .tab-buttons .tab-btn').click(function(e) {			
			e.preventDefault();
			var target = $($(this).attr('data-tab'));			
			target.parents('.tabs-box-one').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box-one').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.tabs-box-one').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});		
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var target = $(this).parents('.accordion');

			if($(this).hasClass('active')!==true){
				$('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')){
				//$(this).removeClass('active');
				return false;
				//$(this).next('.accord-content').slideUp(300);
			}else{
				$(this).addClass('active');
				$('.accordion').removeClass('active-block');
				$('.accordion .acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	//Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').click(function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').click(function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});	
	}

	// Time picker
	function timepicker () {
	    $('input[name="time"]').ptTimeSelect();
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
	}


	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.masonry-gallery').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-gallery .items-container');
			var $filter=$('.filter-btns');

			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});


			// Isotope Filter
			$filter.find('li').click(function(){
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {

				}
				return false;
			});


			winDow.resize(function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});


			var filterItemA	= $('.filter-btns li');

			filterItemA.click(function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	enableMasonry();


	// Contact Form Validation
	if($('#contact-form').length){
		$("#contact-form").validate({
		    submitHandler: function(form) {
		      var form_btn = $(form).find('button[type="submit"]');
		      var form_result_div = '#form-result';
		      $(form_result_div).remove();
		      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
		      var form_btn_old_msg = form_btn.html();
		      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
		      $(form).ajaxSubmit({
		        dataType:  'json',
		        success: function(data) {
		          if( data.status == 'true' ) {
		            $(form).find('.form-control').val('');
		          }
		          form_btn.prop('disabled', false).html(form_btn_old_msg);
		          $(form_result_div).html(data.message).fadeIn('slow');
		          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
		        }
		      });
		    }
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").click(function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);

		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/*
==========================================
   When document is Scrollig, do
==========================================
*/

	$(window).scroll(function() {
		headerStyle();
	});

/*
==========================================
   When document is loaded, do
==========================================
*/

	$(window).load(function() {
		handlePreloader();
		timepicker();
		datepicker();
		datepicker1();
		datepicker2();
		datepicker3();
		enableMasonry();

	});

/*
=========================================
	When document is Resized, do
=========================================
*/
	$(window).resize(function() {
		enableMasonry();
	});

})(window.jQuery);
