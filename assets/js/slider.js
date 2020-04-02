/*
Вызов функций
ПЕО +*/
$(
  function () {
    lazyload();
    initSlider();
  }
);
/* Поочередный выбор рисунка.
ПЕО +*/
function lazyload() {
  let lazyloadElements = $('[data-lazy-load="1"]');
  for (let i = 0; i < lazyloadElements.length; i++){
    let tempImgSrc =
    $(lazyloadElements[i]).attr('data-lazy-load-img');
    $(lazyloadElements[i])
    .css('background', 'url(' + tempImgSrc + ')')
    .css('background-size', 'cover');
  }
}
/* Присоединение точки к рисунку.
ПЕО + */
function initSlider() {
  let slides = $('.slide');
  for(let i=0; i<slides.length; i++){
    let addClass = '';
    if(i===0){
      addClass = 'dot-active';
    }
    $('.state').append('<i class="fa fa-circle dot '+addClass+'" data-dot-index="'+ (i + 1) +'" aria-hidden="true"></i>');
  }
  $('[data-slider-active="1"]').css('z-index', '2');
  nextSlider(slides)

}
/* Установка таймера: поочередная активация рисунков и точек.
ПЕО -*/
function nextSlider(slides){
  let IntervalId = setInterval(function () {
    let currentSlide = $('[data-slider-active="1"]')
      .attr('data-slider-index');
      currentDot = Number(currentSlide);
      if(currentSlide >= slides.length){
        currentSlide = 0;
      }
      $('[data-dot-index ="'+currentDot+'"]').removeClass('dot-active');
      let nextDot = currentDot + 1;
      if(nextDot >=slides.length + 1){
        nextDot = 1;
      }
      $('[data-dot-index ="'+nextDot+'"]').addClass('dot-active');
      $('[data-slider-active="1"]').css('z-index', '1')
      .attr('data-slider-active', '0');
    $(slides[currentSlide]).css('z-index', '2')
    .attr('data-slider-active', '1');
}, 2000)
}
