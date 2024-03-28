//  SCROLL TO TOP //
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 100);
});

// SCROLL TO TOP WHEN CLICK ON LOGO //
var btn = $('#logo-click');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// FIXED MENU WHEN SCROLL //

document.addEventListener("DOMContentLoaded", function(){
		
    window.addEventListener('scroll', function() {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').classList.remove('bg-dark');
            document.getElementById('navbar_top').classList.remove('position-absolute');
            document.getElementById('navbar_top').classList.remove('bg-transparent');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById("navbar_top").classList.add("bg-dark");
            document.getElementById('navbar_top').classList.add('position-absolute');
            document.getElementById('navbar_top').classList.add('bg-transparent');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });


    // muda o SRC do iframe onclick

    var iframe = document.querySelector('#map-iframe');

    //aplica o src do primeiro elemento no iframe
    iframe.src = document.querySelector('.callout-info').getAttribute('data-src');

    document.querySelectorAll('.callout-info').forEach(function(element) {
        element.addEventListener('click', function() {
           
            var src = this.getAttribute('data-src');
    
            // Log
            console.log('Mudando src do iframe para: ' + src);
    
            iframe.src = src;
        });
    });
    











}); 