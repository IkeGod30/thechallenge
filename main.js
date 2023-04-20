////####Hamburger menu for responsive primary nav ###

//function unicode() {
//    let x = document.getElementById('unicodeClick');
//    
//    if (x.className === "topNav") { 
//        
//        x.className += " mobileResponsive";
//    } 
//    
//    else {
//        
//    x.className === "topNav";}
//    
//
//}
//
//let x = document.getElementById('unicodeClick');
//x.addEventListener('click', unicode, false);

/////#### Click event for each image ##### ///

const wini = document.getElementsByClassName('pryze');

//confirm('Would you like to proceed to play the challenge?');

for(let y=0; y<wini.length; y++){
    wini[y].addEventListener('click', quizLoad, false);    
}

function quiziFrame(){
window.open("Quiz_Form.html", "_self"); //Load page for actual quiz
}

function quizLoad () {

// User to confirm that he/she wants to proceed

if (!confirm('Dear user, do you wish to be transferred to the quiz for the contest?')) {
    quiziFrame.preventDefault();
}
    

// The quiz iframe function is called
quiziFrame();
}
