var footerMenuMobileView = $('.footer-menu').not(':first');
var isMobile = false;

$(window).on('resize', function() {
  init();
})

function init() {
  if( $(window).width() < 570) {
    isMobile = true;
      footerMenuMobileView.addClass('footer-menu--mobile');
  } else {
    isMobile = false;
    footerMenuMobileView.removeClass('footer-menu--mobile');
  }

  if( isMobile ) {
    footerMenuMobileView.find('.footer-menu__item a:first').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.footer-menu').toggleClass('footer-menu--mobile');
    })
  }
}
init(); 