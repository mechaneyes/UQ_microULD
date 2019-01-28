$(window).scroll(function () {

  
  



  // <!-- ————————————————————————————————————o————————————————————————————————————o COLOR CHANGE -->
  // <!-- COLOR CHANGE ON SCROLL -->
  // <!-- ————————————————————————————————————o————————————————————————————————————o COLOR CHANGE -->
  var $window = $(window),
    $body = $('body'),
    // $body = $('#coloursScrl'),
    $panel = $('section');

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


    //   $('.gradBack').fadeIn( "fast" );
    // } else {
    //   $('.gradBack').fadeOut("fast");
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
    // element is visible
    // console.log('visible');
    $('.uldVideo').addClass('fadeOut');
    $('.uldVideo').removeClass('fadeIn');
  } else {
    // element is not visible
    // console.log('NOT visible');
    $('.uldVideo').removeClass('fadeOut');
    $('.uldVideo').addClass('fadeIn');
  }

  if (top_of_screen > bottom_of_element) {
    // console.log('top_of_screen: ' + top_of_screen);
    $('.uldVideo').addClass('fadeOut');
    $('.uldVideo').removeClass('fadeIn');
  }







  // var theGradOffset = $('.gradBack').offset().top + 200;
  // var gradDistance = (theGradOffset - top_of_screen);

  // if (gradDistance < bottom_of_screen) {
  //   // $('.gradBack').css('border', '1px solid white')
  //   $('.gradBack').fadeIn( "fast" );
  // }
  // if (gradDistance > 200) {
  //   $('.gradBack').fadeIn( "fast" );
  //   // console.log('top_of_screen: ' + top_of_screen)
  // } else {
  //   $('.gradBack').hide();
  // }

  // console.log('gradDistance: ' + gradDistance)
  // // console.log('theGradOffset: ' + theGradOffset)

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







// <!-- ————————————————————————————————————o————————————————————————————————————o COLORS -->
// <!-- COLORS -->
// <!-- ————————————————————————————————————o————————————————————————————————————o COLORS -->
// const colors = basicScroll.create({
//   elem: document.querySelector('.gradBack'),
//   from: 'top-bottom',
//   to: 'middle-middle',
//   props: {
//     '--opacity': {
//       from: 0,
//       to: 1
//     }
//   }
// })









// <!-- ————————————————————————————————————o————————————————————————————————————o FEATURES -->
// <!-- FEATURES -->
// <!-- ————————————————————————————————————o————————————————————————————————————o FEATURES -->
const lightweight = basicScroll.create({
  elem: document.querySelector('.lightImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--light': {
      from: '500px',
      to: '-430px'
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
      to: '-430px'
    }
  }
})

const repellent = basicScroll.create({
  elem: document.querySelector('.repImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--rep': {
      from: '500px',
      to: '-430px'
    }
  }
})










// <!-- ————————————————————————————————————o————————————————————————————————————o COLLECTIONS -->
// <!-- COLLECTIONS -->
// <!-- ————————————————————————————————————o————————————————————————————————————o COLLECTIONS -->



// <!-- ————————————————————————————————————o SMALL SCREEN -->
// <!-- SMALL SCREEN -->
const collecClassicSmall = basicScroll.create({
  elem: document.querySelector('#classic02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--classicSmall': {
      from: '260px',
      to: '-100px'
    }
  }
})

const collecSeamlessSmall = basicScroll.create({
  elem: document.querySelector('#seamless02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--seamlessSmall': {
      from: '260px',
      to: '-70px'
    }
  }
})

const collecCompactSmall = basicScroll.create({
  elem: document.querySelector('#compact02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--compactSmall': {
      from: '260px',
      to: '20px'
    }
  }
})



// <!-- ————————————————————————————————————o MAX HEIGHT: 1085px -->
// <!-- MAX HEIGHT: 1085px -->
const collecClassic1085 = basicScroll.create({
  elem: document.querySelector('#classic02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--classic1085': {
      from: '260px',
      to: '-300px'
    }
  }
})

const collecSeamless1085 = basicScroll.create({
  elem: document.querySelector('#seamless02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--seamless1085': {
      from: '260px',
      to: '-520px'
    }
  }
})

const collecCompact1085 = basicScroll.create({
  elem: document.querySelector('#compact02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--compact1085': {
      from: '260px',
      to: '-200px'
    }
  }
})



// <!-- ————————————————————————————————————o LARGE SCREEN -->
// <!-- LARGE SCREEN -->
const collecClassicLarge = basicScroll.create({
  elem: document.querySelector('#classic02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--classicLarge': {
      from: '260px',
      to: '-180px'
    }
  }
})

const collecSeamlessLarge = basicScroll.create({
  elem: document.querySelector('#seamless02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--seamlessLarge': {
      from: '260px',
      to: '-340px'
    }
  }
})

const collecCompactLarge = basicScroll.create({
  elem: document.querySelector('#compact02 .mainImage'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--compactLarge': {
      from: '460px',
      to: '-230px'
    }
  }
})









// <!-- ————————————————————————————————————o————————————————————————————————————o SOCIAL GALLERY -->
// <!-- SOCIAL GALLERY -->
// <!-- ————————————————————————————————————o————————————————————————————————————o SOCIAL GALLERY -->
const gall01 = basicScroll.create({
  elem: document.querySelector('.gall01 .floating'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--galOne': {
      from: '80px',
      to: '-120px'
    }
  }
})

const gall02 = basicScroll.create({
  elem: document.querySelector('.gall02 .floating'),
  from: 'top-bottom',
  to: 'middle-top',
  props: {
    '--galTwo': {
      from: '120px',
      to: '-150px'
    }
  }
})

const gall03 = basicScroll.create({
  elem: document.querySelector('.gall03 .floating'),
  from: 'top-bottom',
  to: 'middle-top',
  props: {
    '--galThree': {
      from: '150px',
      to: '-150px'
    }
  }
})










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


