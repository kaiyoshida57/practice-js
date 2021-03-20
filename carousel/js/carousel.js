let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;
const nextButton = document.getElementById('carousel__button--next');
const prevButton = document.getElementById('carousel__button--prev');

nextButton.addEventListener("click", function () {
    moveToNextSlide();
});
prevButton.addEventListener("click", function () {
    moveToPrevSlide();
});

// スライドを、slidePosition[x番]のli要素を表示させる。
function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    // ↓slidePositionが2(最大要素数と同じ数)になった時だけ、要素数超えるので、incrementさせず、0番目（最初の要素）に戻す。
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}
function moveToPrevSlide() {
    // ↓slidePositionが0(最小要素数と同じ数)になった時だけ、マイナスになるので、decrementさせず、2番目（最後の要素）に戻す。
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}

