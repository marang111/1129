$(function () {
	var $td = $("td"),
  originalHTML = {
  date: $(".date").html(),
  days: $(".days").html(),
  weather: $(".weather").html(),
  };

 var screenWidth = $(window).width();
            var screenHeight = $(window).height();

            // 결과를 출력합니다.
            console.log("화면 너비: " + screenWidth);
            console.log("화면 높이: " + screenHeight);

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


// *****************************************표 겹치게***************************************** 


  // 특정 요소의 위치를 알아냅니다.
  $(document).ready(function() {
      // 특정 요소의 위치를 알아냅니다.
      var box1Position = $("#contents").position();

      // 다른 요소에 위치 정보를 적용하여 겹치게 만듭니다.
      $("#pixel").css({
          top: box1Position.top + "px",
          left: box1Position.left + "px"
      });

  });

  //  window.addEventListener("scroll", function() {
  //     // 스크롤 위치를 감지하여 #pixel을 동적으로 위치시킵니다.
  //     var scrollPosition = window.scrollY;
  //     var pixel = document.getElementById("pixel");

  //     // #pixel의 위치를 조절
  //     pixel.style.top = scrollPosition + "px";
  // });


// *****************************************pixel html 삭제********************************************

  // window.addEventListener("load", function() {
  //     // #pixel ID를 가진 td 요소의 내용 삭제
  //     var pixelCell = document.getElementById("#pixel");

  //     if (pixelCell) {
  //         pixelCell.innerHTML = "";
  //     }
  // });
  // window.addEventListener("load", function() {
  //     // #pixel ID를 가진 요소의 HTML 내용 삭제
  //     var pixelElement = document.getElementById("pixel");
  //     if (pixelElement) {
  //         pixelElement.innerHTML = "";
  //     }
  // });




// *****************************************픽셀 인물 그림*******************************************





// $(window).scroll(function() {
//                 // 스크롤 위치를 가져옵니다.
//                 var scrollPosition = $(window).scrollTop();


//                 // 스크롤 위치에 따라 배경색을 변경합니다. 
//                 if (scrollPosition < 500) {
//                     $('#pixel_img').hide();
//                 } else if (scrollPosition > 5000 && scrollPosition < 10000) {
//                     $('#pixel_img').show();
//                 } else {
//                     $('#pixel_img').hide();
//                 }
//             });


// *****************************************스크롤속도 ******************************************


         var prevScrollPosition = 0;
            var prevTimestamp = null;

            $(window).scroll(function() {
                var scrollPosition = $(window).scrollTop();
                var timestamp = new Date().getTime();

                if (prevTimestamp) {
                    var scrollDistance = Math.abs(scrollPosition - prevScrollPosition);
                    var timeElapsed = timestamp - prevTimestamp;
                    var scrollSpeed = scrollDistance / timeElapsed;

                    $("#scrollSpeed").text(scrollSpeed.toFixed(2));

                    // 특정 스피드 이상인 경우 작업 수행
                    if (scrollSpeed > 7) { // 예: 0.5 px/ms 이상
                        // 스피드가 특정 값 이상일 때 원하는 작업 수행
                        $('#pixel_img').css("opacity","1");
                        // $("#contents").css("opacity","0")
                        
                    }
                    else if (scrollSpeed < 1){
                      $('#pixel_img').css("opacity","0");
                      // $("#contents").css("opacity","1")
                    }
                }

                prevScrollPosition = scrollPosition;
                prevTimestamp = timestamp;
            });












});