


$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $body = $('body'),
    // $body = $('#coloursScrl'),
    $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });






  // Check to see if second panel (after intro) is visible
  // If that panel is visible, fade out the video
  // 
  var top_of_element = $('.repellent').offset().top + 300;
  var bottom_of_element = $('.repellent').offset().top + $('.repellent').outerHeight() - 300;
  var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
  var top_of_screen = $(window).scrollTop();

  // console.log('bottom_of_element: ' + bottom_of_element)

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
    // The element is visible, do something
    // console.log('visible');
    $('.uldVideo').addClass('fadeOut');
    $('.uldVideo').removeClass('fadeIn');
  } else {
    // The element is not visible, do something else
    // console.log('NOT visible');
    $('.uldVideo').removeClass('fadeOut');
    $('.uldVideo').addClass('fadeIn');
  }

  if (top_of_screen > bottom_of_element) {
    // console.log('top_of_screen: ' + top_of_screen);
    $('.uldVideo').addClass('fadeOut');
    $('.uldVideo').removeClass('fadeIn');
  }






  // Static, Scroll-Over Background Images
  // 
  var top_of_bg = $('.paraBack02').offset().top + 100;
  var bottom_of_bg = $('.paraBack02').offset().top + $('.paraBack02').outerHeight() - 50;

  // console.log('top_of_element: ' + top_of_element)

  if ((bottom_of_screen > top_of_bg) && (top_of_screen < bottom_of_bg)) {
    // console.log('visible');
    $('.paraBack02 p').addClass('fadeIn');
    $('.paraBack02 p').removeClass('fadeOut');
  } else {
    // console.log('NOT visible');
    $('.paraBack02 p').removeClass('fadeIn');
    $('.paraBack02 p').addClass('fadeOut');
  }

  if (top_of_screen > bottom_of_bg) {
    // console.log('top_of_screen: ' + top_of_screen);
    $('.paraBack02 p').addClass('fadeIn');
    $('.paraBack02 p').removeClass('fadeOut');
  }





  // Method Air video
  // 
  $('.gimbalGod').trigger('pause');

  var top_of_gimbal = $('.gimbalGod').offset().top;
  var bottom_of_gimbal = $('.gimbalGod').offset().top + $('.gimbalGod').outerHeight();

  if ((bottom_of_screen > top_of_gimbal) && (top_of_screen < bottom_of_gimbal)) {

    // console.log('visible');
    $('.gimbalGod').trigger('play');

  } else {

    // console.log('NOT visible');
    $('.gimbalGod').trigger('pause');
  }

  if (top_of_screen > bottom_of_gimbal) {
    // console.log('top_of_screen: ' + top_of_screen);
  }

}).scroll();








const repellent = basicScroll.create({
  elem: document.querySelector('.repImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--rep': {
      from: '400px',
      to: '-300px'
    }
  }
})
// repellent.start()



const fieldTesting = basicScroll.create({
  elem: document.querySelector('.paraJacket'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--field': {
      from: '400px',
      to: '-370px'
    }
  }
})
// fieldTesting.start()



const heatRetention = basicScroll.create({
  elem: document.querySelector('.heatImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--heat': {
      from: '400px',
      to: '-300px'
    }
  }
})
// heatRetention.start()



const lightweight = basicScroll.create({
  elem: document.querySelector('.lightImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--light': {
      from: '400px',
      to: '-380px'
    }
  }
})
// lightweight.start()



const recap = basicScroll.create({
  elem: document.querySelector('.recapMainImage'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--recap': {
      from: '360px',
      to: '-120px'
    }
  }
})
// recap.start()




const rainy = basicScroll.create({
  elem: document.querySelector('.rainy'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--rainy': {
      from: '210px',
      to: '-120px'
    }
  }
})
// rainy.start()




const iceCave = basicScroll.create({
  elem: document.querySelector('.chinatown'),
  from: 'top-bottom',
  to: 'middle-middle',
  props: {
    '--chinatown': {
      from: '160px',
      to: '0px'
    }
  }
})
// iceCave.start()




const sohoStreet = basicScroll.create({
  elem: document.querySelector('.sohoStreet'),
  from: 'top-bottom',
  to: 'middle-middle',
  props: {
    '--sohoStreet': {
      from: '160px',
      to: '0px'
    }
  }
})
// iceCave.start()




const method = basicScroll.create({
  elem: document.querySelector('.gimbalGod'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--method': {
      from: '450px',
      to: '-30px'
    }
  }
})
// method.start()




const stairs = basicScroll.create({
  elem: document.querySelector('.stairs'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--stairs': {
      from: '450px',
      to: '-80px'
    }
  }
})
// method.start()






