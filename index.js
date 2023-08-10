$('.counter').counterUp({
    delay: 10,
    time: 3000
});

//    Get the button

mybutton = document.getElementById("myBtn");

// when the user scrolls down from the top of the document, show the button 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        mybutton.style.display = "block";

    }
    else {
        mybutton.style.display = "none";
    }

   
}

// when the user clicks on the button , scroll to the top of the document

const topFunction = () => {
   
    document.documentElement.scrollTop = 0 // for chrome , firefox, IE and opera
    document.topFunction.scrollTop = 0; //For safari
}



function toggle() {
    var a = document.getElementById("style1");
    a.x = 'Css/style2' == a.x ? 'Css/style1' : 'Css/style2';

    a.href = a.x + '.css';
}






