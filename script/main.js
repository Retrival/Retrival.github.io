//omload apply jquery
document.addEventListener('DOMContentLoaded', () => {

var $ = jQuery;
//validate form on contact page
$('#contactForm').on('click', function() {
    $("#submitBtn").valid();
});

//go to home page
$(".logo").on('click', function(){
    window.location = "index.html";    
});

});
   