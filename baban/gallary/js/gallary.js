$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$('#closeSidebar').click(function() {
    $('#sidebar').fadeOut();
    document.getElementById("gallarySection").style.left="0";
    document.getElementById("gallarySection").style.width="100%";
    document.getElementById("brand").style.display="block";
    $('#menu').fadeIn();    
});
/*$('#brandClick').click(function() {
    document.getElementById("gallarySection").style.left="33.33%";
    document.getElementById("brand").style.display="none";
    $('#sideBar').fadeIn();    
});*/
$('#close').click(function() {
    $('#smallDvcMenu').fadeIn();
});
$('#smallMenuClose').click(function() {
    $('#smallDvcMenu').fadeOut();
    document.getElementById("close").style.display="block";
});
$('#smallNavOpen').click(function() {   
    $('#smallNavMenu').fadeIn();
});
$('#smallNavClose').click(function() {
    $('#smallNavMenu').fadeOut();
});
$('#closeSmallNavSidebar').click(function() {
    $('#smallNav').fadeOut();
});
$('#openSmallNavSidebar').click(function() {
    $('#smallNav').fadeIn();
});
var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
        var fullscreen = function() {

		if ( !isMobile.any() ) {
			$('.fullscreen').css('height', $(window).height());
			$(window).resize(function(){
				$('.caption').css('height', $(window).height());
			});
		}

	};
