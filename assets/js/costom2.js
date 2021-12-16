//goTop
$(".goTop").click(function(){
  event.preventDefault;
  $("html, body").animate({scrollTop:0},1000);
});

$(document).scroll(function(){
  aa = $(document).scrollTop();
  if(aa > 500) {
    $(".goTop").fadeIn();
  }else {
    $(".goTop").fadeOut();
  }
});


//cardnews swiper
var swiper1 = new Swiper(".mySwiper_card", {
  spaceBetween: 10,
  pagination: {
    el: ".mySwiper_card .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".cardswiper .swiper-button-next",
    prevEl: ".cardswiper .swiper-button-prev",
  },
});


//petmall swiper
var swiper2 = new Swiper(".mySwiper_pm", {
  pagination: {
    el: ".mySwiper_pm .swiper-pagination",
  },
});