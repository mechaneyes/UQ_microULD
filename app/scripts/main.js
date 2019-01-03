$(window).scroll(function () {

  
  



  // <!-- ————————————————————————————————————o————————————————————————————————————o COLOR CHANGE -->
  // <!-- COLOR CHANGE ON SCROLL -->
  // <!-- ————————————————————————————————————o————————————————————————————————————o COLOR CHANGE -->
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
  var top_of_element = $('.whatIs').offset().top + 300;
  var bottom_of_element = $('.whatIs').offset().top + $('.whatIs').outerHeight() - 300;
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






}).scroll();








const whatIs = basicScroll.create({
  elem: document.querySelector('.whatIsImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--whatIs': {
      from: '400px',
      to: '-380px'
    }
  }
})





// const anchors = basicScroll.create({
//   elem: document.querySelector('.anchors'),
//   from: 'top-bottom',
//   to: 'top-top',
//   props: {
//     '--anchors': {
//       from: '300px',
//       to: '0px'
//     }
//   }
// })







const colors = basicScroll.create({
  elem: document.querySelector('.gradBack'),
  from: 'top-bottom',
  to: 'top-middle',
  props: {
    '--opacity': {
      from: 0,
      to: 1
    }
  }
})







// <!-- ————————————————————————————————————o————————————————————————————————————o FEATURES -->
// <!-- FEATURES -->
// <!-- ————————————————————————————————————o————————————————————————————————————o FEATURES -->
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

const heatRetention = basicScroll.create({
  elem: document.querySelector('.heatImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--heat': {
      from: '500px',
      to: '-330px'
    }
  }
})

const repellent = basicScroll.create({
  elem: document.querySelector('.repImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--rep': {
      from: '400px',
      to: '-330px'
    }
  }
})










// <!-- ————————————————————————————————————o————————————————————————————————————o COLLECTIONS -->
// <!-- COLLECTIONS -->
// <!-- ————————————————————————————————————o————————————————————————————————————o COLLECTIONS -->
const collecClassic = basicScroll.create({
  elem: document.querySelector('#classic .mainImage'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--classic': {
      from: '260px',
      to: '-120px'
    }
  }
})

const collecSeamless = basicScroll.create({
  elem: document.querySelector('#seamless .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--seamless': {
      from: '280px',
      to: '-220px'
    }
  }
})

const collecCompact = basicScroll.create({
  elem: document.querySelector('#compact .mainImage'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--compact': {
      from: '400px',
      to: '-10px'
    }
  }
})










// <!-- ————————————————————————————————————o————————————————————————————————————o GALLERY SEAMLESS -->
// <!-- GALLERY SEAMLESS -->
// <!-- ————————————————————————————————————o————————————————————————————————————o GALLERY SEAMLESS -->
// const rainy = basicScroll.create({
//   elem: document.querySelector('.rainy'),
//   from: 'top-bottom',
//   to: 'bottom-top',
//   props: {
//     '--rainy': {
//       from: '210px',
//       to: '-120px'
//     }
//   }
// })

// const stairs = basicScroll.create({
//   elem: document.querySelector('img.stairs'),
//   from: 'top-bottom',
//   to: 'middle-top',
//   props: {
//     '--stairs': {
//       from: '250px',
//       to: '-150px'
//     }
//   }
// })










// <!-- ————————————————————————————————————o————————————————————————————————————o GALLERY COMPACT -->
// <!-- GALLERY COMPACT -->
// <!-- ————————————————————————————————————o————————————————————————————————————o GALLERY COMPACT -->
const violin = basicScroll.create({
  elem: document.querySelector('img.violin'),
  from: 'top-bottom',
  to: 'top-top',
  props: {
    '--violin': {
      from: '160px',
      to: '0px'
    }
  }
})

const gotham = basicScroll.create({
  elem: document.querySelector('.gotham'),
  from: 'top-bottom',
  to: 'middle-top',
  props: {
    '--gotham': {
      from: '160px',
      to: '-50px'
    }
  }
})










// <!-- ————————————————————————————————————o————————————————————————————————————o GALLERY CLASSIC -->
// <!-- GALLERY CLASSIC -->
// <!-- ————————————————————————————————————o————————————————————————————————————o GALLERY CLASSIC -->
// const oculus = basicScroll.create({
//   elem: document.querySelector('img.oculus'),
//   from: 'top-bottom',
//   to: 'middle-top',
//   props: {
//     '--oculus': {
//       from: '220px',
//       to: '0px'
//     }
//   }
// })

// const chinatown = basicScroll.create({
//   elem: document.querySelector('.chinatown'),
//   from: 'top-bottom',
//   to: 'middle-top',
//   props: {
//     '--chinatown': {
//       from: '200px',
//       to: '-150px'
//     }
//   }
// })










// <!-- ————————————————————————————————————o————————————————————————————————————o ULD FAMILY -->
// <!-- ULD for the Whole Family -->
// <!-- ————————————————————————————————————o————————————————————————————————————o ULD FAMILY -->
const field = basicScroll.create({
  elem: document.querySelector('.paraJacket'),
  from: 'top-bottom',
  to: 'middle-top',
  props: {
    '--field': {
      from: '400px',
      to: '-220px'
    }
  }
})


