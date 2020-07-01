$(document).ready(function(){
    var header = $('.home-picture');
    
    var backgrounds = new Array(
        'url(./img/img1.JPG)'
      , 'url(./img/img2.JPG)'
      , 'url(./img/img3.JPG)'
    );
    
    var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 5000);
    
    header.css('background-image', backgrounds[0]);
    });



window.onscroll = function() {scrollFunction()};

var x = document.getElementsByClassName("nav-link");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("main-logo").style.width = "50px";
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].style.paddingBottom = "10px";
    }
    
    document.querySelector(".navbar-nav").style.marginTop = "10px";
  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("main-logo").style.width = "120px";
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].style.paddingBottom = "30px";
    }
    document.querySelector(".navbar-nav").style.marginTop = "35px";
  }
}