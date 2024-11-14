(function($,window){

  var starBucks = {
      init: function(){
        this.header();
        this.section1();
        this.section2Notice();
        this.section2Slide();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.goTop();
        this.quickMenu();
      },
      header: function(){
        $('.find-btn').on({
          click: function(){
            $('.find-box').toggleClass('addInput');
          }
        });

        // 내비게이션
        $('.main-btn').on({
          mouseenter:function(){
            $('.main-btn').removeClass('addCurrent');
            $(this).addClass('addCurrent');
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(500,'easeOutExpo');
          }
        });

        $('#nav').on({
          mouseleave:function(){
            $('.main-btn').removeClass('addCurrent');
            $('.sub').stop().slideUp(500,'easeOutExpo');
          }
        });
      },
      section1: function(){
        // 애니메이션 fade in
        function ani(){
          $('.img').eq(0).stop().animate({opacity:1},600, function(){
            $('.img').eq(1).stop().animate({opacity:1},600, function(){
              $('.img').eq(2).stop().animate({opacity:1},600, function(){
                $('.img').eq(3).stop().animate({opacity:1},600, function(){
                  $('.img').eq(4).stop().animate({opacity:1},600);
                });
              });
            });
          });
        }
        setTimeout(ani, 500);
      },
      section2Notice: function(){
        var cnt = 0;

        // 1.메인슬라이드함수
          function mainSlide(){
            $('.notice').css({zIndex:1}).stop().animate({top:24},0);
            $('.notice').eq(cnt==0?4:cnt-1).css({zIndex:2}).stop().animate({top:0},0);
            $('.notice').eq(cnt).css({zIndex:3}).stop().animate({top:24},0).animate({top:0},1000);
          }

        // 2.다음카운트함수
          function nextCount(){
            cnt++;
            if(cnt>4){cnt=0}
            mainSlide();
          }

        // 3.타이머함수
          function autoTimer(){
            setInterval(nextCount,3000);
          }
          setTimeout(autoTimer, 100);
        
      },
      section2Slide: function(){
        var cnt = 0;
        var setId = null;

        // 1.메인슬라이드 함수
          function mainSlide(){
            $('.slide-wrap').stop().animate({left:-819*cnt},600, function(){
              if(cnt>2){cnt=0}
              if(cnt<0){cnt=2}
              $('.slide-wrap').stop().animate({left:-819*cnt},0);
              $('.slide').removeClass('addCurrent');
              $('.slide').eq(cnt+1).addClass('addCurrent');
            });
            pageEvent();
          }

        // 2-1. 다음카운트 함수
          function nextCount(){
            cnt++;
            mainSlide();
          }

        // 2-2. 이전카운트 함수
        function prevCount(){
          cnt--;
          mainSlide();
        }

        // 3. 타이머 함수
          function autoTimer(){
            setId = setInterval(nextCount,3000);
          }
          // setTimeout(autoTimer, 100);

        // 4. 페이지이벤트 함수
          function pageEvent(){
            $('.page-btn').children().attr('src','./images/main_prom_off.png');
            $('.page-btn').eq(cnt>2?0:cnt).children().attr('src','./images/main_prom_on.png');
          }

        // 5. 페이지버튼 클릭 이벤트
          $('.page-btn').eq(0).on({
            click: function(e){
              e.preventDefault();
              cnt = 0;
              mainSlide();
              stopFn();
            }
          });

          $('.page-btn').eq(1).on({
            click: function(e){
              e.preventDefault();
              cnt = 1;
              mainSlide();
              stopFn();
            }
          });

          $('.page-btn').eq(2).on({
            click: function(e){
              e.preventDefault();
              cnt = 2;
              mainSlide();
              stopFn();
            }
          });

        // 6. 일시정지 & 플레이
          function stopFn(){
            $('.play-btn').children().attr('src','./images/main_prom_play.png');
            $('.play-btn').removeClass('on');
            $('.play-btn').addClass('off');
            clearInterval(setId);
          }
          function playFn(){
            $('.play-btn').children().attr('src','./images/main_prom_stop.png');
            $('.play-btn').removeClass('off');
            $('.play-btn').addClass('on');
            autoTimer();
          }


          $('.play-btn').on({
            click: function(e){
              e.preventDefault();
              if($(this).hasClass('on') === true){
                stopFn();
              }
              else{
                playFn();
              }
            }
          });

        // 7-1. 다음화살버튼 클릭 이벤트
          $('.next-btn').on({
            click:function(e){
              e.preventDefault();
              nextCount();
              stopFn();
            }
          });

        // 7-2. 이전화살버튼 클릭 이벤트
          $('.prev-btn').on({
            click:function(e){
              e.preventDefault();
              prevCount();
              stopFn();
            }
          });

        // 8. 프로모션 버튼 클릭 이벤트
          $('.promotion-btn').on({
            click:function(e){
              e.preventDefault();
              if($(this).hasClass('close')){
                $('#slide').stop().slideDown(600);
                $(this).removeClass('close');
                playFn();
              }
              else{
                $('#slide').stop().slideUp(600);
                $(this).addClass('close');
                stopFn();
                cnt=0;
                mainSlide();
              }
            }
          });

        // 슬라이드 컨테이너 박스 위에 마우스 올라가면 슬라이드 정지
          $('.slide-wrap').on({
            mouseenter:function(e){
              e.preventDefault();
              stopFn();
            },
        // 슬라이드 컨테이너 박스 에서 마우스 떠나면 슬라이드 재실행
            mouseleave:function(e){
              e.preventDefault();
              playFn();
            }
          });

        


      },
      section3: function(){
      },
      section4: function(){
        $(window).scroll(function(){
          if($(window).scrollTop() > 500){
            $('#section4').addClass('addAni');
          }
          if($(window).scrollTop() == 0){
            $('#section4').removeClass('addAni');
          }
        });
      },
      section5: function(){

        var sec3Top = $('#section3').offset().top-300;

          $(window).scroll(function(){
            if($(window).scrollTop() == 0){
              $('#section5').removeClass('addFadein');
            }
            if($(window).scrollTop() >= sec3Top){
              $('#section5').addClass('addFadein');
            }
          });
      },
      section6: function(){
        var sec4Top = $('#section4').offset().top-200;

          $(window).scroll(function(){
            if($(window).scrollTop() >= 0){
              $('#section6').removeClass('addAni')
            }
            if($(window).scrollTop() >= sec4Top){
              $('#section6').addClass('addAni')
            }
          });
      },
      section7: function(){
        var sec6Top = $('#section6').offset().top-200;

          $(window).scroll(function(){
            if($(window).scrollTop() == 0){
              $('#section7').removeClass('addFade');
            }
            if($(window).scrollTop() >= sec6Top){
              $('#section7').addClass('addFade');
            }
          });
      },
      section8: function(){
        var sec7Top = $('#section7').offset().top-200;

        $(window).scroll(function(){
          if($(window).scrollTop() == 0){
            $('#section8').removeClass('addAni');
          }
          if($(window).scrollTop() >= sec7Top){
            $('#section8').addClass('addAni');
          }
        });
      },
      goTop: function(){
        

        
        $('.go-top').stop().fadeOut(1000);

        $(window).scroll(function(){
          if($(window).scrollTop() >=100){
            $('.go-top').stop().fadeIn(1000);
          }
          else{
            $('.go-top').stop().fadeOut(1000);
          }
        });
      },
      quickMenu: function(){

        var quickTop1 = ($(window).height() - 96)/2;
        var quickTop2 = 150;

        function quickMenuFn(){
          $('.quick-menu').stop().animate({top: $(window).scrollTop()+quickTop2},600,"easeOutExpo");
        }
        quickMenuFn();

        $(window).scroll(function(){
          quickMenuFn();
        });
      }
  }

  starBucks.init();

})(jQuery,window);