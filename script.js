$(function () {
	var $td = $("td"),
  originalHTML = {
  date: $(".date").html(),
  days: $(".days").html(),
  weather: $(".weather").html(),
  };




  $('.hover-element').mouseover(function(){
     var imagePath = $(this).data('image');
    $(this).css({"z-index":"10"});
    $('#hover-image').attr('src', imagePath);
    $('#hover-image-container').fadeIn(50);
    $("#header").css({"z-index":"4"})
    $("#header div:nth-child(2)").css({"color":"blue","font-size":"50px"})
    $("#category").hide();
  });

  $('.hover-element').mouseout(function(){
    $(this).css({"z-index":""});
    $('#hover-image-container').fadeOut(50);
    $("#header div:nth-child(2)").css({"color":"black","font-size":""})
    $("#category").show();
  });

$(window).scroll(function() {
    // 현재 스크롤 위치 계산
    var scrollTop = $(window).scrollTop();

    // 마스크 영역 계산 (스크롤 위치에 따라 변경됨)
    var maskHeight = Math.min(scrollTop, 200) + "%";
    
    // 마스크 속성 설정
     $(".mask").attr("height", maskHeight);
  });





// 지도 스크롤 내리면 보이게 
  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();
    var elementPosition = $('#contents').offset().top;

    if (scrollPosition >= elementPosition) {
      // $("#map2").show();
    } else{
      // $("#map2").hide();
    }
  });

// 지도 화면 밑에 보이는 순간 변하기
  $(window).on('scroll', function() {
  var contentsTop = $('#contents').offset().top;
  var windowHeight = $(window).height();
  var scrollTop = $(this).scrollTop();

  // #contents 요소가 화면에 보이기 시작할 때 실행될 함수
  if (scrollTop + windowHeight > contentsTop) {
    // 실행될 함수를 여기에 작성합니다.
    $("#header").css({"top":"0"});
    
  } else{
    $("#header").css({"top":"40%","transform":"translate(-50%,0,0,0)"});
    

  }
});

// 마우스 오버하면 날짜 바뀌게

  $td.mouseover(function () {
    var $this = $(this),
    value = $this.attr("data-value"),
    value2 = $this.attr("data-value2"),
    value3 = $this.attr("data-value3");

    $(".date").html(value);
    $(".days").html(value2);
    $(".weather").html(value3);
  });

  $td.mouseleave(function () {
    $(".date").html(originalHTML.date);
    $(".days").html(originalHTML.days);
    $(".weather").html(originalHTML.weather);
  });

// 스크롤 내리면 네비 내려오게

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    var elementPosition = $('#contents').offset().top;

    if (scrollPosition >= elementPosition) {
      $("#category").show();
      $("#header").animate({ "margin-top": "2%" }, 0);
    } else {
      $("#category").hide();
      $("#header").animate({ "margin-top": 0 }, 0);
    };
  });

});