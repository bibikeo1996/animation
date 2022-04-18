function MobileSVG() {
  var path = document.querySelector('#text-curve-mobile');
  var cat = document.querySelector('#cat-mobile');
  var catWidth = 40;
  var catHeight = 40;

  function updateImagePosition(offset) {
    let pt = path.getPointAtLength(offset * path.getTotalLength());
    cat.setAttribute("x", pt.x - catWidth / 2);
    cat.setAttribute("data-x", pt.x - catWidth / 2);
    cat.setAttribute("y", pt.y - catHeight / 2);
  }

  function getScrollFraction() {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
  }

  function onScroll() {
    updateImagePosition(getScrollFraction());
  }

  updateImagePosition(0);

  window.addEventListener('scroll', onScroll);


  $("#moveUp").click(function (event) {
    window.scrollTo(0, window.scrollY - 1)
  })
  $("#moveDown").click(function (event) {
    window.scrollTo(0, window.scrollY + 1)
  })
}

function MobileCharacterMovementLeftRight() {
  var h = $("#cat-mobile").attr('href');
  var main = $("#cat-mobile");
  console.log(h);
  switch (true) {
    case (h.indexOf("d-right") > -1):
      main.attr('href', 'img/d-left-right-1.png')
      break;
    case (h.indexOf('img/d-left-right-1.png') > -1):
      main.attr('href', 'img/d-left-right-2.png')
      break;
    case (h.indexOf('img/d-left-right-2.png') > -1):
      main.attr('href', 'img/d-left-right-3.png')
      break;
    case (h.indexOf('img/d-left-right-3.png') > -1):
      main.attr('href', 'img/d-left-right-4.png')
      break;
    case (h.indexOf('img/d-left-right-4.png') > -1):
      main.attr('href', 'img/d-left-right-5.png')
      break;
    case (h.indexOf('img/d-left-right-5.png') > -1):
      main.attr('href', 'img/d-left-right-6.png')
      break;
    case (h.indexOf('img/d-left-right-6.png') > -1):
      main.attr('href', 'img/d-left-right-7.png')
      break;
    case (h.indexOf('img/d-left-right-7.png') > -1):
      main.attr('href', 'img/d-left-right-8.png')
      break;
    case (h.indexOf('img/d-left-right-8.png') > -1):
      main.attr('href', 'img/d-left-right-1.png')
      break;
  }
}

function MobileCharacterMovementRightLeft() {
  var h = $("#cat-mobile").attr('href');
  console.log(h);
  var main = $("#cat-mobile");
  switch (true) {
    case (h.indexOf("d-left") > -1):
      main.attr('href', 'img/d-right-left-1.png')
      break;
    case (h.indexOf('img/d-right-left-1.png') > -1):
      main.attr('href', 'img/d-right-left-2.png')
      break;
    case (h.indexOf('img/d-right-left-2.png') > -1):
      main.attr('href', 'img/d-right-left-3.png')
      break;
    case (h.indexOf('img/d-right-left-3.png') > -1):
      main.attr('href', 'img/d-right-left-4.png')
      break;
    case (h.indexOf('img/d-right-left-4.png') > -1):
      main.attr('href', 'img/d-right-left-5.png')
      break;
    case (h.indexOf('img/d-right-left-5.png') > -1):
      main.attr('href', 'img/d-right-left-6.png')
      break;
    case (h.indexOf('img/d-right-left-6.png') > -1):
      main.attr('href', 'img/d-right-left-7.png')
      break;
    case (h.indexOf('img/d-right-left-7.png') > -1):
      main.attr('href', 'img/d-right-left-8.png')
      break;
    case (h.indexOf('img/d-right-left-8.png') > -1):
      main.attr('href', 'img/d-right-left-1.png')
      break;
  }
}


$(document).ready(function () {
  $(this).scrollTop(0);
});



// function MobileMove() {
//   var lastScrollTop = 0;
//   var number = 0;
//   window.onscroll = function () {
//     var rs = window.pageYOffset || document.documentElement.scrollTop;
    
//     // if (rs > lastScrollTop) {
//     //   if(rs > 1595){
//     //     number++;
//     //     $("#text-container-mobile").css("transform", "translate(0%,-" + number * 2 + "px)");
//     //   }
//     // } else {
//     //   // upscroll code
//     //   if(rs < 1595){
//     //     number--;
//     //     $("#text-container-mobile").css("transform", "translate(0%,-" + number * 2 + "px)");
//     //   }
//     // }
//     lastScrollTop = rs <= 0 ? 0 : rs; // For Mobile or negative scrolling
//   };
// }

//setInterval(MobileCharacterMovementLeftRight,100)

function MobilecheckDirect() {
  let mobilePrevVal;
  window.onscroll = function () {
    let mobileValue = $("#cat-mobile").attr("data-x");
    //console.log(mobilePrevVal + " - " + mobileValue);
    if (mobilePrevVal > mobileValue) {
      MobileCharacterMovementRightLeft();
    } else if (mobilePrevVal < mobileValue) {
      MobileCharacterMovementLeftRight();
    } else{
      MobileCharacterMovementRightLeft();
    }
    mobilePrevVal = mobileValue;
  };
}