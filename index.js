$('.counter').counterUp({
    delay: 10,
    time: 3000
});

//    Get the button

mybutton = document.getElementById("myBtn");

// when the user scrolls down from the top of the document, show the button 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";

    }
    else {
        mybutton.style.display = "none";
    }
}

// when the user clicks on the button , scroll to the top of the document

function topFunction() {
    document.topFunction = 0; //For safari
    document.documentElement.scrollTop = 0 // for chrome , firefox, IE and opera
}



// function dark(){
//     var element = document.body;
//     element.classList.toggle("dark-modeee");


//  }

function toggle() {
    var a = document.getElementById("style1");
    a.x = 'Css/style2' == a.x ? 'Css/style1' : 'Css/style2';

    a.href = a.x + '.css';
}






