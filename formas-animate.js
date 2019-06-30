var elems;
var windowHeight;

function onLoad() {

    init();
}

function init() {
    elems = document.querySelectorAll('.animate-on-scroll');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
}

function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
}

function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight + 70 <= 0) {
            if (i == 0) {
                elems[i].classList.add("formas-title-animate");

            } else {
                elems[i].classList.add("formas-animate");
            }
        }
    }
}

window.scroll(function () {
    checkPosition()
})
