
var myIndex = 0;
repeat();

function repeat() {

    var x = document.getElementsByClassName("mySlides");

        for ( var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    myIndex++;
    if (myIndex > x.length) {

    myIndex = 1
    } 

    x[myIndex-1].style.display = "block";  
    setTimeout(repeat, 2000); // Change image every 2 seconds
}

/* ----------------------------------------------*/

var myIndex2 = 0;
repeat2();

function repeat2() {

    var x = document.getElementsByClassName("smallSlide");

        for ( var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    myIndex2++;
    if (myIndex2 > x.length) {

    myIndex2 = 1
    } 

    x[myIndex2-1].style.display = "block";  
    setTimeout(repeat2, 3000); // Change image every 2 seconds
}




var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        
        slideIndex = 1
    }
    if (n < 1) {
        
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}