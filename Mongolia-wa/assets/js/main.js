// AOS.init();


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// $(document).ready(function () {
    // $(".nav-button").click(function () {
    //     $(".my_nav").toggle();
    // });
    // $(".nav-button").click(function () {
    //     $(".my_nav").toggle();
    // });

    // $(".navbar-toggler").click(function () {
    //     $(".my_nav").toggleClass("close");
    // });


    // $(".nav-button").click(function () {
    // $(".nav-button,.primary-nav").toggleClass("open");
    // });  
    // 
    // $(".nav-item").click(function () {
    // $(".collapse").toggleClass("close");
    // });
    // $(".navbar-toggler").click(function () {
    //     // $('.collapse').collapse('hide');
    //     $(".collapse").toggleClass("close");
    // });
// });







// var  window;




