function DesktopSVG() {
  var path = document.querySelector('#text-curve');
  var cat = document.querySelector('#cat');
  var catWidth = 40;
  var catHeight = 40;

  function updateImagePosition(offset) {
    let pt = path.getPointAtLength(offset * path.getTotalLength());
    rsx = pt.x - catWidth / 2;
    rsy = pt.y - catHeight / 2;
    cat.setAttribute("x", rsx);
    cat.setAttribute("data-x", rsx);
    cat.setAttribute("y", rsy);
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

  window.addEventListener('scroll', onScroll);


  $("#moveUp").click(function (event) {
    window.scrollTo(0, window.scrollY - 5)
  })
  $("#moveDown").click(function (event) {
    window.scrollTo(0, window.scrollY + 5)
  })
}
function CharacterMovementLeftRight() {
  var h = $("#cat").attr('href');
  var main = $("#cat");
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

function CharacterMovementRightLeft() {
  var h = $("#cat").attr('href');
  var main = $("#cat");
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

// function DesktopRun() {
//   var deskTopPrevValue;
//   window.addEventListener('wheel', function (e) {
//     e.preventDefault();
//     // function xử lý tốc độ và điều chỉnh object
//     var deskTopvalue = $("#cat").attr("data-x");
//     if (e.deltaY < 0) {
//       // scroll up
//       $("#moveUp").trigger('click');
//       if (deskTopPrevValue > deskTopvalue) {
//         CharacterMovementRightLeft();
//       } else if (deskTopPrevValue < deskTopvalue) {
//         CharacterMovementLeftRight();
//       } else {
//         CharacterMovementRightLeft();
//       }
//     } else if (e.deltaY > 0) {
//       // scroll down
      
//       $("#moveDown").trigger('click');
//       if (deskTopPrevValue > deskTopvalue) {
//         CharacterMovementRightLeft();
//       } else if (deskTopPrevValue < deskTopvalue) {
//         CharacterMovementLeftRight();
//       } else {
//         CharacterMovementRightLeft();
//       }
//     }
//     deskTopPrevValue = deskTopvalue;
//   }, {
//     passive: false
//   });
// }
function DesktopRun() {
  window.addEventListener('wheel', function (e) {
    e.preventDefault();
    var offset = $("#cat").offset();
    var rs = Math.round(offset.top);
    // function xử lý tốc độ và điều chỉnh object
    if (e.deltaY < 0) {
      // scroll up
      //console.log(rs);
      $("#moveUp").trigger('click');
      // var main = $("#cat");
      // switch (true) {
      //   case (rs > 0 && rs < 715):
      //     CharacterMovementRightLeft();
      //     break;
      //   case (rs > 1640 && rs < 1876):
      //     CharacterMovementLeftRight();
      //     break;
      //   case (rs > 2225 && rs < 2566):
      //     CharacterMovementRightLeft();
      //     break;
      //   case (rs > 2845 && rs < 3030):
      //     CharacterMovementRightLeft();
      //     break;
      // }

    } else if (e.deltaY > 0) {
      // scroll d-left-right
      //console.log(rs);
      $("#moveDown").trigger('click');
      // var main = $("#cat");
      // switch (true) {
      //   case (rs > 0 && rs < 1585):
      //     CharacterMovementLeftRight();
      //     break;
      //   case (rs > 1585 && rs < 1902):
      //     CharacterMovementRightLeft();
      //     break;
      //   case (rs > 2279 && rs < 2589):
      //     CharacterMovementLeftRight();
      //     break;
      //   case (rs > 2858):
      //     CharacterMovementLeftRight();
      //     break;
      // }

    }
  }, {
    passive: false
  });
}

function DesktopMoveSVG() {
  var number = 0;
  window.addEventListener('wheel', function (e) {
    var offset = $("#cat").offset();
    var rs = Math.round(offset.top);
    if (e.deltaY < 0) {
      if (rs < 2120) {
        number--;
        $("#text-container").css("transform", "translate(0%,-" + number * 2 + "px)");
      }
    } else if (e.deltaY > 0) {
      if (rs > 1586) {
        number++;
        $("#text-container").css("transform", "translate(0%,-" + number * 2 + "px)");
      }
    }
  });
}


function DesktopCheckDirection() {
  let desktopPrevVal;
  window.onscroll = function () {
    let desktopValue = Math.round($("#cat").attr("data-x"));
    if (desktopPrevVal > desktopValue) {
      CharacterMovementRightLeft();
    } else if (desktopPrevVal < desktopValue) {
      CharacterMovementLeftRight();
    } else {
      CharacterMovementRightLeft();
    }
    desktopPrevVal = desktopValue;
  };
}

$(document).ready(function () {
  $(this).scrollTop(0);
});

//setInterval(CharacterMovementLeftRight,100)