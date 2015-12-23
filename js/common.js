$(document).ready(function() {

	function widthDetect() {
		var win_w = $(window).width();
		var chenge = 500;
		
		if(win_w < chenge){
			$('header').removeClass('header-standart');
			$('header').addClass('header-mobile');

			$('.brgr').addClass('brgr-color');
		} else {
			$('header').addClass('header-standart');
			$('header').removeClass('header-mobile');

			$('.brgr').removeClass('brgr-color');
		}
	};
	widthDetect();



	function openMenu(){
		$('.burger-button').click(function(){
			$('.brgr-1').toggleClass('brgr-active-1');
			$('.brgr-2').toggleClass('brgr-active-2');
			$('.brgr-3').toggleClass('brgr-active-3');

			if($('header').hasClass('header-mobile-vissible')){
				$('.brgr').addClass('brgr-color');
				$('.brgr').removeClass('brgr-color-shrink');
			} else {
				$('.brgr').addClass('brgr-color-shrink');
				$('.brgr').removeClass('brgr-color');
			}

			$('.header-mobile').toggleClass('header-mobile-vissible');
			$('.bottom-line').toggleClass('bottom-line-vissible');

		});
	};
	openMenu();



	function openTabs(){
		$('.about-btn-2').click(function(){
			$('.chapter-1').addClass('chapter-remove');
			$('.chapter-2').addClass('chapter-add');

			$(this).addClass('active');
			$(this).removeClass('n-active');
			$('.about-btn-1').addClass('n-active');

		});

		$('.about-btn-1').click(function(){
			$('.chapter-1').removeClass('chapter-remove');
			$('.chapter-2').removeClass('chapter-add');

			$(this).removeClass('n-active');
			$('.about-btn-2').addClass('n-active');
		});	
	};
	openTabs();
});



$('.bxslider').bxSlider({
  infiniteLoop: false,
  controls: false,
  adaptiveHeight: true,
  hideControlOnEnd: true
});



var map;
function initialize() {
 var Options = {
  center: new google.maps.LatLng(42.359552, -71.058292),
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 map = new google.maps.Map(document.getElementById("map_canvas"), Options);
}
google.maps.event.addDomListener(window, 'load', initialize);