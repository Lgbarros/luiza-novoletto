// // SCROLL TO TOP //
// window.addEventListener('scroll', function() {
//     var returnToTop = document.getElementById('return-to-top');
//     if (window.pageYOffset >= 50) {
//         returnToTop.style.display = 'block';
//     } else {
//         returnToTop.style.display = 'none';
//     }
// });

// var returnToTopBtn = document.getElementById('return-to-top');
// returnToTopBtn.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // SCROLL TO TOP WHEN CLICK ON LOGO //
// var logoClick = document.getElementById('logo-click');

// logoClick.addEventListener('click', function(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // FIXED MENU WHEN SCROLL //

// document.addEventListener("DOMContentLoaded", function(){
		
//     window.addEventListener('scroll', function() {

//         if (window.scrollY > 200) {
//             document.getElementById('navbar_top').classList.add('fixed-top');
//             document.getElementById('navbar_top').classList.remove('bg-dark');
//             document.getElementById('navbar_top').classList.remove('position-absolute');
//             document.getElementById('navbar_top').classList.remove('bg-transparent');
//             // add padding top to show content behind navbar
//             navbar_height = document.querySelector('.navbar').offsetHeight;
//             document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//             document.getElementById('navbar_top').classList.remove('fixed-top');
//             document.getElementById("navbar_top").classList.add("bg-dark");
//             document.getElementById('navbar_top').classList.add('position-absolute');
//             document.getElementById('navbar_top').classList.add('bg-transparent');
//              // remove padding top from body
//             document.body.style.paddingTop = '0';
//         } 
//     });


//     // muda o SRC do iframe onclick

//     var iframe = document.querySelector('#map-iframe');

//     //aplica o src do primeiro elemento no iframe
//     iframe.src = document.querySelector('.callout-info').getAttribute('data-src');

//     document.querySelectorAll('.callout-info').forEach(function(element) {
//         element.addEventListener('click', function() {
           

//             //se o tamanho da tela for maior que 991

//             if(window.innerWidth > 991){

//                 var src = this.getAttribute('data-src');
        
//                 // Log
//                 console.log('Mudando src do iframe para: ' + src);
        
//                 iframe.src = src;

//                 return true;

//             }

//             //adiciona window.open para mobile

//             if(window.innerWidth <= 991){
//                 var href = this.getAttribute('data-href');

//                 window.open(href, '_blank');
//             }
//         });
//     });
// }); 
window.addEventListener("scroll",(function(){var t=document.getElementById("return-to-top");window.pageYOffset>=50?t.style.display="block":t.style.display="none"}));var returnToTopBtn=document.getElementById("return-to-top");returnToTopBtn.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var logoClick=document.getElementById("logo-click");logoClick.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",(function(){window.scrollY>200?(document.getElementById("navbar_top").classList.add("fixed-top"),document.getElementById("navbar_top").classList.remove("bg-dark"),document.getElementById("navbar_top").classList.remove("position-absolute"),document.getElementById("navbar_top").classList.remove("bg-transparent"),navbar_height=document.querySelector(".navbar").offsetHeight,document.body.style.paddingTop=navbar_height+"px"):(document.getElementById("navbar_top").classList.remove("fixed-top"),document.getElementById("navbar_top").classList.add("bg-dark"),document.getElementById("navbar_top").classList.add("position-absolute"),document.getElementById("navbar_top").classList.add("bg-transparent"),document.body.style.paddingTop="0")}));var t=document.querySelector("#map-iframe");t.src=document.querySelector(".callout-info").getAttribute("data-src"),document.querySelectorAll(".callout-info").forEach((function(e){e.addEventListener("click",(function(){if(window.innerWidth>991){var e=this.getAttribute("data-src");return console.log("Mudando src do iframe para: "+e),t.src=e,!0}if(window.innerWidth<=991){var o=this.getAttribute("data-href");window.open(o,"_blank")}}))}))}));