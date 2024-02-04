$(document).ready(function () {
  $(".mv-slider").slick({
    autoplay: true,
    fade: true,
    arrows: false,
  });
  $('#sp-btn').on('click',function(){
    $('.sp-nav').toggleClass('active');
    $('#sp-btn').toggleClass('btn-close');
  });
});
// autoplay: true    自動的に開始する
// fade: true        スライドではなく、サンプルと同じフワリと現れる感じ
// arrows: false     スライドさせる矢印。左右にはみ出るので消しておく

AOS.init();
