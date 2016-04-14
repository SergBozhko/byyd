// Controls

// Checking elemen in viewport
$.fn.onViewPort = function(){
   var viewport = {};
   viewport.top = $(window).scrollTop();
   viewport.bottom = viewport.top + $(window).height();
   var bounds = {};
   bounds.top = this.offset().top;
   bounds.bottom = bounds.top + this.outerHeight();
   return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};

// DOM ready
$(function() {
    console.log('dom ready ...');

    /**  
    **   Byyd initialization 
    **   BYYD.init();
    **/

    //On Viewport
    var $vTarget = 'Some element';
    $(window).scroll(function() {
      if($vTarget.onViewPort()) {
         console.log('Element in viewport');
      }
    });


    // Anchor funct
    var $aLink = $('.anchor-link');
    $aLink.click(function(e) {
      e.preventDefault();

      var aLinkVal = $(this).attr('href'),
          aTarget = $(aLinkVal).offset().top;
      $('body, html').animate({
         scrollTop: aTarget
      }, 700);
    });


    // Google analitics options
    // Example ga send
    $('.ga-element').click(function() {
      ga('send', 'event', 'category', 'click');
    });
    // Ga main script example
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-75622019-1', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');

});