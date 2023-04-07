// FIXED MENU

 window.addEventListener('scroll', fixedMenu);
function fixedMenu() {
  const header = document.querySelector('header');
  const Y = window.scrollY;
  const  innerHeight = window.innerHeight;

  if ( Y > innerHeight) {
    header.classList.add('header_fixed');
    }
    if ( Y < innerHeight) {
    header.classList.remove('header_fixed');
    }
};



// ANIM SCROLL

const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for( let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        if(!animItem.classList.contains('_anim-no-hide')){
          animItem.classList.remove('_active');}        
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(()=> {
     animOnScroll();
   },300); 
}



// BURGER-MENU

function burgerMenuOpen(){
  var chbox;
  chbox=document.getElementById('burger');
  const menu = document.querySelector('.menu');
  if (chbox.checked) {
    menu.classList.add('active');     
    bodyLock();
    menu.addEventListener("click",function(){
      menu.classList.remove('active');    
      bodyUnLock();
      chbox.checked = false;
    }); 
  }
  else {
    menu.classList.remove('active');    
    bodyUnLock(); 
  }
}


const body = document.querySelector('html');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 800;



function bodyLock(){
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
  if (lockPadding.length>0) {

  for (let index = 0; index < lockPadding.length; index++){
        const el = lockPadding[index];
        el.style.right = lockPaddingValue;
        }
    }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function(){
          unlock = true;          
        },timeout);
}

function bodyUnLock(){
  setTimeout(function(){
    if(lockPadding.length > 0){
      for(let index = 0; index < lockPadding.length; index++){
          const el = lockPadding[index];
          el.style.right = '0px';
        }
    }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
  },timeout);
  unlock = false;
        setTimeout(function(){
          unlock = true;          
        },timeout);
}





// slider

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});












/*Back to Top button  */

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('up-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('up-show');
    }
  }

  function backToTop() {
    var scrolled = window.pageYOffset;
    if (scrolled > 0) {
      window.scrollBy(0, -scrolled);
    }
  }

  var goTopBtn = document.querySelector('.up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
    


















