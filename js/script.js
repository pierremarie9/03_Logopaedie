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