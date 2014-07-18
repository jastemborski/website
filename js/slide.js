// function scrollToElement(selector, time, verticalOffset) {
//     time = typeof(time) != 'undefined' ? time : 1000;
//     verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
//     element = $(selector);
//     offset = element.offset();
//     offsetTop = offset.top + verticalOffset;
//     $('body').animate({
//         scrollTop: offsetTop
//     }, time);
// }

// $('li#one').click(function () {
//     scrollToElement('#home');
// });
// $('li#two').click(function () {
//     scrollToElement('#page2');
// });
// $('li#three').click(function () {
//     scrollToElement('#page3');
// });

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
          window.location.hash = target;
      });
  });
});