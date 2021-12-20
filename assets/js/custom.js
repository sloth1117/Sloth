$(document).ready(function(){

  //뒤로가기
  $("#pf_info .back").click(function(){
    history.back();
  });


  //포트폴리오 작업물 마우스오버
  $(".work > li").mouseover(function(){
    $(this).addClass("on");
  });

  $(".work > li").mouseout(function(){
    $(this).removeClass("on");
  });


  //스킬 숫자카운트
  $(".cl90").animateNumber( 
    {number: 90,},
    {easing: "swing", duration: 6000}
  );
  
  $(".cl80").animateNumber( 
    {number: 80,},
    {easing: "swing", duration: 5000}
    );


  //goTop
  $(".goTop").click(function(){
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

  

});