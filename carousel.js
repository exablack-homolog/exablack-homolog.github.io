var scrollAmount = 14.285714
var moving = false;
var slide = 0

function onLoad() {
  var carouselContainer = document.getElementById('carousel-container');
  scrollAmount = (window.innerWidth * 0.67)
  carouselContainer.style.transform = "translate(-39%)";

}

function windowResize() {
  var carouselContainer = document.getElementById('carousel-container');
  scrollAmount = (window.innerWidth * 0.67)
  // switch (slide) {
  //   case 1:
  //     carouselContainer.style.transform = "translate(-24.27%)";
  //     break;

  //   case 2:
  //     carouselContainer.style.transform = "translate(-39%)";

  //   case 3:
  //     carouselContainer.style.transform = "translate(-53.28%)";

  // }
}

function moveSlidesRight() {
  if (!moving) {
    moving = true;

    var carouselContainer = document.getElementById('carousel-container');
    var position = carouselContainer.getBoundingClientRect().x;

    if (slide == 2) {
      slide = 0;
      // moveLeftClones();

      carouselContainer.style.transform = "translate(-" + eval(39 + scrollAmount * slide) + "%)";


    } else {
      slide++
      carouselContainer.style.transform = "translate(-" + eval(39 + scrollAmount * slide) + "%)";

    }

    setTimeout(function () {
      moving = false;

    }, 300);

  }
}

function moveSlidesLeft() {
  if (!moving) {
    moving = true;

    var carouselContainer = document.getElementById('carousel-container');
    var position = carouselContainer.getBoundingClientRect().x;

    if (slide == 0) {
      slide = 2;

      carouselContainer.style.transform = "translate(-" + eval(39 + scrollAmount * 2) + "%)";
    } else {
      slide--
      carouselContainer.style.transform = "translate(-" + eval(39 + scrollAmount * slide) + "%)";

    }
    setTimeout(function () {
      moving = false;

    }, 300);

  }
}

function moveLeftClones() {
  for (i = 1; i > 0; i--) {
    var node = document.getElementById("carousel-container").firstElementChild;
    document.getElementById("carousel-container").appendChild(node);
  }
}