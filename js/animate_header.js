$(function() {
  $('ul').on('mouseenter', function() {
    $(this).animate({
      paddingBottom: '+=5px',
      paddingTop: '+=5px',
       // opacity:'1'
    }, 300)
  });
});

$(function() {
  $('ul').on('mouseleave', function() {
    $(this).animate({
      paddingBottom: '-=5px',
      paddingTop: '-=5px',
      // opacity:'0.5'
    }, 300)
  });
});

