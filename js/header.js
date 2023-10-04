$(document).ready(function () {
  // 초기에는 fa-chevron-down 아이콘만 보이도록 설정
  $(".fa-chevron-up").hide();
  $(".header-catemenu").hide();
  // gnb-cate를 클릭했을 때 header-catemenu를 토글하여 보이고 사라지게 함
  $(".gnb-cate").click(function (e) {
    e.preventDefault();
    // 다른 gnb-cate의 밑줄을 제거하고 현재 클릭한 gnb-cate에 밑줄을 추가
    $(".gnb-cate").removeClass("active");
    $(this).toggleClass("active");
    $(".header-catemenu").slideToggle(300);

    // fa-chevron-down 및 fa-chevron-up 아이콘의 표시 여부를 제어
    $(this).find(".fa-chevron-down, .fa-chevron-up").toggle();
  });     
  // catemenu-close를 클릭했을 때 header-catemenu를 숨김
  $(document).on("click", function (e) {
    const headerCatemenu = $(".header-catemenu");
    const gnbCate = $(".gnb-cate");
    if (!headerCatemenu.is(e.target) && headerCatemenu.has(e.target).length === 0
      && !gnbCate.is(e.target) && gnbCate.has(e.target).length === 0) {
      headerCatemenu.slideUp(300);
      gnbCate.removeClass("active"); // 모든 밑줄 제거
      $(".gnb-cate .fa-chevron-down").show(); // fa-chevron-down 아이콘 보이기
      $(".gnb-cate .fa-chevron-up").hide(); // fa-chevron-up 아이콘 숨기기
    }
  });
  $('#mobile-menu').hide();
  // 헤더 스크롤 이벤트
  let lastScrollTop = 0;
  
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 480) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let header = document.querySelector('.header');
      let headerTop = document.querySelector('.header-top');
      let headerBottom = document.querySelector('.header-bottom');
      let headerCatemenu = document.querySelector('.header-catemenu');
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide header-top and set header height to 50px
        headerTop.style.display = 'none';
        header.style.height = '50px';
        headerCatemenu.style.top = '50px';
      } else {
        // Scrolling up, show header-top and set header height back to 110px
        headerTop.style.display = 'flex'; // Adjust the height accordingly
        header.style.height = '100px';
        headerCatemenu.style.position = 'absolute';
        headerCatemenu.style.top = '100px'; // Adjust the top position accordingly
      }
      lastScrollTop = scrollTop;
    }
  });
  // 모바일 메뉴 열기
  $('#toggle-menu').click(function() {
    $('#mobile-menu').slideToggle();
    $('body').toggleClass('menu-open');  // Toggle the class
  });

  // 모바일 메뉴 닫기
  $('#close-menu').click(function() {
    $('#mobile-menu').slideUp();
    $('body').removeClass('menu-open');  // Remove the class
  });

  $(".mb-cate-depth").slideUp(); // 처음에 숨겨두기
  
  $(".mb-cate-click").click(function(){
    $(".mb-cate-depth").slideToggle();
    isOpen = !isOpen;  // Toggle the state
  });
  
  // 모바일 검색창
  let isMobileSearchboxVisible = false;

  $('.fa-magnifying-glass').click(function () {
    $('.mobile-searchbox').show();
    isMobileSearchboxVisible = true;
  });
  $('.mb-searchbox-close').click(function () {
    $('.mobile-searchbox').hide();
    isMobileSearchboxVisible = false;
  });
  if (!isMobileSearchboxVisible) {
    $('.mobile-searchbox').hide();
  }
});