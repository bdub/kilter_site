
'use strict';

console.log('\'Allo \'Allo!');

$(document).ready(function()
{

    // a little animated Gif mouseover hack
    $('#kilter-hero').hover(
        function()
        {
            $(this).attr('src', '/images/kilter_giphy_32.gif');
        },
        function()
        {
            $(this).attr('src', '/images/kilter_giphy_still_2.gif');
        }
    );

  // Adding some scrolling to the nav jumps
  // using https://github.com/flesler/jquery.scrollTo
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {duration: 500, interrupt: true});
  });
  $('.nav li a').on('click', function(){
    if($('#nav-burger:visible').length === 1) {
      $('div#navbar-collapse-1').collapse('toggle');
    }
  });
 /*
  $('div#navbar-collapse-1').on('show.bs.collapse', function () {
    // do something…
    alert('showing!');
    //$('nav.navbar').addClass('expandedNav');
  });
  $('div#navbar-collapse-1').on('hide.bs.collapse', function () {
    // do something…
    alert('collapsing!');
    //$('nav.navbar').removeClass('expandedNav');
  });

  */
});

/*
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $('div#navbar-collapse-1').hasClass('navbar-collapse in');
        if (_opened === true ) {
		alert('help');
            $('button.navbar-toggle').click();
        }
    });
});
*/

