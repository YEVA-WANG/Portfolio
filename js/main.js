var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
});

$(".contactMe").click(function(){
    $('html, body').animate({
        scrollTop: $(document).height()
    },1500);
});

$(".home").click(function(){
    $('html, body').animate({
        scrollTop: 0
    },1500);
});

$("#project_1").click(function(){
    $('html, body').animate({
        scrollTop: $(".cd-color-1").position().top
    },1500);
    //$(document).scrollTop($(".cd-bg-2").y);
});

$("#project_2").click(function(){
    $('html, body').animate({
        scrollTop: $(".cd-color-2").position().top
    },1500);
    //$(document).scrollTop($(".cd-bg-2").y);
});

$("#project_3").click(function(){
    $('html, body').animate({
        scrollTop: $(".cd-color-3").position().top
    },1500);
    //$(document).scrollTop($(".cd-bg-2").y);
});

$("#project_4").click(function(){
    $('html, body').animate({
        scrollTop: $(".cd-color-4").position().top
    },1500);
    //$(document).scrollTop($(".cd-bg-2").y);
});


$(".about").click(function(){
    $('html, body').animate({
        scrollTop: $(".cd-bg-2").position().top
    },1500);
    
    //$(document).scrollTop($(".cd-fixed-bg").height());
});

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('cd-header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('cd-header');
        }
    }
    
    lastScrollTop = st;
}

$(document).ready(function() {
  $(".fancybox")
  .fancybox({
    openEffect  : 'none',
  });
});



$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows' ).hide(),
    $shadow = $( '#shadow' ).hide(),
    slicebox = $( '#sb-slider' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});

$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows1' ).hide(),
    $shadow = $( '#shadow1' ).hide(),
    slicebox = $( '#sb-slider1' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});


$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows2' ).hide(),
    $shadow = $( '#shadow2' ).hide(),
    slicebox = $( '#sb-slider2' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});


$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows3' ).hide(),
    $shadow = $( '#shadow3' ).hide(),
    slicebox = $( '#sb-slider3' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});



$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});


$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element-detail');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
    animation_elements.x -= 100;
      check_if_in_view();
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});


$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element-img');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
    animation_elements.x -= 100;
      check_if_in_view();
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});
