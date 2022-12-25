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
//e.preventDefault();
//const frameDiv = document.createElement('div');
//.....const quizFrame = document.createElement('Iframe');
//......quizFrame.setAttribute('src', 'http://www.onlinequizcreator.com/booktreasures/quiz-106537');
//quizFrame.setAttribute('id', 'frame');
//////....quizFrame.setAttribute('height', '100%');
/////.....quizFrame.setAttribute('width', '1000');
//quizFrame.setAttribute('class', 'emded-responsive-item');
//quizFrame.setAttribute('className', 'w3-modal');
////.....document.body.appendChild(quizFrame); //For in-page rendering on index.html

//document.body.appendParent(frameDiv);

//frameDiv.appendChild(frameDiv.cloneNode(true));    
//quizFrame.parentNode.replaceChild(frameDiv);



}

//x.addEventListener('click', unicode, false);
//x.addEventListener('click', unicode, false);
//..al = el.id; //global variable for dynamic change of iframe src

//The code below references each image by an element Id; in this case, 'first' for the sneakers image
//Author: note that for each image, you must create an element Id...
//The second line of the code first chooses the event upon which the function would act...
//Then the function is called to set off the desired action


//var $el = $("#first");
//.....................................var el = document.getElementsById('first'); //Picks the element for event action based on element Id
///.............var el = document.getElementsByClassName('pryze');
//var diu = document.getElementById('cacib');

//var elQuiz = document.getElementById('Deframe'); //...
//for (var index = 0; index < el.length; index++;) {
//.............if (el[0].addEventListener) { //That is, if browser is IE newer than IE versions other than 5 to 8, use addEventListener method...
//if (el.addEventListener) { //That is, if browser is IE newer than IE versions other than 5 to 8, use addEventListener method...

//..$el.on('dblclick', quizload);
//..$el.on('dblclick', QuizIframe);
//document.getElementById("cacib").src = 'www.yahoo.com';
//dui.src ="http://www.yahoo.com";
//...............el[0].addEventListener('dblclick', quizLoad, false); //Alert for user
//el.addEventListener('dblclick', quizLoad, false); //Alert for user

//.......el.addEventListener('dblclick', QuizIframe, false); //This is the actual event action aka binding


///.......................el.addEventListener('dblclick', toPage, false); // This moves user to quiz page

//elQuiz.addEventListener('DOMNodeInsertedIntoDocument', quizLoad, false);


//alert(typeof elQuiz);
//alert(typeof $elQuiz.type);

//alert(el[0].getAttribute('class'));
//alert(el[1].getAttribute('class'));



//..........}

//...........else { //Otherwise, use attachEvent method to fire the event for the older versions of IE...

//...........el.attachEvent('ondblclick', QuizIframe);



//...........}


/////...............................................


//var al = document.getElementById('job'); //Picks the element for event action based on element Id

//if (al.addEventListener) { //That is, if browser is IE newer than IE versions other than 5 to 8, use addEventListener method...


//al.addEventListener('dblclick', quizLoad, false); //Alert for user
//.......al.addEventListener('dblclick', QuizIframe, false); //This is the actual event action aka binding


//}

//else { //Otherwise, use attachEvent method to fire the event for the older versions of IE...

//al.attachEvent('ondblclick', QuizIframe);


//}



//Author: el.onclick = QuizIframe; is an alternative code, but it is traditional DOM event handler code
//and has the shortfall of being only able to attach one function to one event handler, unlike the one
//used here which is of Event Listeners which can bind to multiple functions simultaneously

//function to alert user that quiz iframe element has loaded...not working yet...


function quizLoad () {
//const knowi = confirm('Dear user, do you wish to be transferred to the quiz for the contest?');
//
//if (confirm(knowi) == false){
//quiziFrame.preventDefault();

if (!confirm('Dear user, do you wish to be transferred to the quiz for the contest?')) {
    quiziFrame.preventDefault();
}
    

//else {
//quiziFrame();
//}
//end;


//alert(knowi);

//window.open("Quiz_Form.html"); //THIS ALONE WORKS WITHOUT IFRAME

quiziFrame();


}




////....................function toPage () {
///....................var a = document.createElement('a');
///.....................var link = document.createTextNode("Go to quiz");
///.....................a.appendChild(link);
///....................a.href = "http://www.yahoo.com";
//a.setAttribute('href', 'http://www.yahoo.com');
///..................document.body.appendChild(a);

//alert(typeof $quizPage);

///.......................}


//window.addEventListener('DOMNodeInsertedIntoDocument', quizLoad, false);


//function PrizeDetails(prize, specs, extra) {
//    this.PrizeName = prize;
//    this.specsName = specs;
//    this.extraInfo = extra;
//}

//
//function prizeDetails1() {
////Author: Using jquery for .each method, u would have to write this function once instead of duplicating for each instance...
//
////.....var prod = document.getElementById('product');
////.....var spe = document.getElementById('specs');
////....var ext = document.getElementById('extra');
//
////jqyerry....
//
////refu = $whole.id;
//var $whole = $('.entry1'); //Meant to be connected to the if statement below for alternatitve to repeated functions...
//
//var prod = $('#product');
//var spe = $('#specs');
//var ext = $('#extra');

//Attempt to use css positioning; not working properly...

//...var loci = document.getElementById('bySideH'); //Position of prize details div...
//...loci.id = 'bySideH1';


//

//....prod.innerText = "Apple Iphone 11";

//....spe.innerText = "32GB Ram, 128GB Storage";

//....ext.innerText = "100 Pixel Capture";

//jquerry...

//.....prod.text("Apple Iphone 11");
//.....spe.text("32GB Ram, 128GB Storage");
//......ext.text("100 Pixel Capture");

//if ($whole[0].id = "phone") {
//
////alert("First prize"); }
//
//prod.text("Apple Iphone 11");
//spe.text("32GB Ram, 128GB Storage");
//ext.text("100 Pixel Capture");
//
//}

/*else if ($whole[1].id = "job") {

prod.text("Job Interview");
spe.text("Position: Customer Service Rep.");
ext.text("Company: Airtel");

//refu = $whole.id;
//var refu = $('#job');


}*/


//}
//
//refu = $('#phone'); //jquery...
//refu.on('mouseover', prizeDetails1); //jquerry...



//......var refu = document.getElementById('phone');

//.....refu.addEventListener('mouseover', prizeDetails1, false);


////#####Second image event...######

//function prizeDetails2() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Job Interview";
//
//spe.innerText = "Position: Customer Service Rep";
//
//ext.innerText = "Company: MTN";
//}
//
//
//var refu = document.getElementById('job');
//
//refu.addEventListener('mouseover', prizeDetails2, false);







////####Third image event#####...
//
//function prizeDetails3() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "HP Laptop";
//
//spe.innerText = "48GB RAM, 500GB HDD";
//
//ext.innerText = "17-inch Screen";
//}
//
//var refu = document.getElementById('laptop');
//
//refu.addEventListener('mouseover', prizeDetails3, false);






//#########Fourth image event...
//
//function prizeDetails4() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Money";
//
//spe.innerText = "50, 000 (Fifty thousand naira";
//
//ext.innerText = "Cash";
//}
//
//var refu = document.getElementById('cash');
//
//refu.addEventListener('mouseover', prizeDetails4, false);
//
//
////Fifth image event...
//
//function prizeDetails5() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Vacation Expenses";
//
//spe.innerText = "Destination: Dubai";
//
//ext.innerText = "Duration: Two weeks";
//}
//
//var refu = document.getElementById('vacation');
//
//refu.addEventListener('mouseover', prizeDetails5, false);
//
//
////Sixth image event...
//
//function prizeDetails6() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "SUV";
//
//spe.innerText = "Brand: Innoson";
//
//ext.innerText = "Model: IVM-300";
//}
//
//var refu = document.getElementById('innoson');
//
//refu.addEventListener('mouseover', prizeDetails6, false);
//
//
////Seventh image event...
//
//function prizeDetails7() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Hand Bag";
//
//spe.innerText = "Brand: Victoria Secret";
//
//ext.innerText = "Design: Empress";
//}
//
//var refu = document.getElementById('bag');
//
//refu.addEventListener('mouseover', prizeDetails7, false);
//
//
////Eigth image event...
//
//function prizeDetails8() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Fifty Liters";
//
//spe.innerText = "Type: Petrol, or Diesel, or Kerozine";
//
//ext.innerText = "Source: NNPC Station Onitsha Road, Owerri";
//}
//
//var refu = document.getElementById('fuel');
//
//refu.addEventListener('mouseover', prizeDetails8, false);
//
//
////Ninth image event...
//
//function prizeDetails9() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Ladies Shoes";
//
//spe.innerText = "Brand: Louis Vouitton Heel";
//
//ext.innerText = "Design: Classy";
//}
//
//var refu = document.getElementById('heel');
//
//refu.addEventListener('mouseover', prizeDetails9, false);
//
//
////Tenth image event...
//
//function prizeDetails10() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Rent";
//
//spe.innerText = "Duration: One Year";
//
//ext.innerText = "Location: Owerri, Lagos, Abuja";
//}
//
//var refu = document.getElementById('rent');
//
//refu.addEventListener('mouseover', prizeDetails10, false);
//
//
////Eleventh image event...
//
//function prizeDetails11() {
//
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
//prod.innerText = "Tuition fees";
//
//spe.innerText = "Duration: One year";
//
//ext.innerText = "Institution: FUTO, IMSU, UNN, ABSU";
//}
//
//var refu = document.getElementById('scholarship');
//
//refu.addEventListener('mouseover', prizeDetails11, false);
//
//
////Twelfth image event...
//
//function prizeDetails12() {
//
//var prod = document.getElementById('product');
//var spe = document.getElementById('specs');
//var ext = document.getElementById('extra');
//
////
//
////...var loci = document.getElementById('bySideH'); //Position of prize details div...
////...loci.id = 'bySideH12';
//
////
//
//
//prod.innerText = "Pair of snikers";
//
//spe.innerText = "Brand: Michael Jordan";
//
//ext.innerText = "Design: Urban";
//
//}
//
//
//
//var refu = document.getElementById('snikers');
//
//refu.addEventListener('mouseover', prizeDetails12, false);
//

//Author: Try and implement the switch method instead of using multiple functions above...

/*function usOgo () {

var prod = document.getElementById('product');
var spe = document.getElementById('specs');
var ext = document.getElementById('extra');



}

var deFig = document.getElementsByTagName('figure').getAttribute('id');
switch (deFig.id)
var refu = document.getElementById('job');
{
case "job": 
    prod.innerText = "Job Interview";

    spe.innerText = "Position: Customer Service Rep";

    ext.innerText = "Company: MTN";

}


refu.addEventListener('mouseover', usOgo, false);*/




//End of first js group


//Second js group for animation

//function Mile() {
//
////var cap = document.getElementById('subhead');
////cap.fadeOut(800);
//
//
//
//$('#subhead').hide(800).show(700);
//
//for (i = 0; i < 10; i++) {
//$('#subhead').animate({paddingLeft: '+=300'});
//$('#subhead').animate({paddingLeft: '-=300'});
//
//
//}
//$('#subhead').animate({paddingLeft: '+=300'});
////$('#subhead').flash(500);
////$('p').fadeOut(600);
//
//}



//Mile();

//function ShowingText() {

/// ##### Mouseover functionality for How_to_win page ###
    
const theText = document.getElementsByClassName('selectedText');

//......const theText = document.getElementById('selectedText1');
//......const theText2 = document.getElementById('selectedText2'); //for test
//....const theText3 = document.getElementById('selectedText3'); //for test
const toShow = document.getElementById('textToShow');

//    
//for(let y=0; y<theText.length; y++){
//    
//    theText[y].addEventListener('click', displayText, false);
    
//.....theText.addEventListener('click', displayText, false);

//.....theText2.addEventListener('click', displayText, false);

//.....theText3.addEventListener('click', displayText, false);


    
function displayText() {
    
    if(theText.addEventListener) {
        toShow.innerHTML = selPrize.innerHTML;
    
    } else if(theText2.addEventListener) {
    toShow.innerHTML = "Working again";
    } else {
        toShow.innerHTML = "Final";
    }
    
    
    

    
    
//const toShow = document.getElementById('textToShow');
//toShow[0].visibility = false;
//toShow.style.fontSize = 40px;
    //..........///toShow.innerHTML = selPrize.innerHTML;
    //...toShow.innerHTML = '<p>Each prize is displayed and described in the home page. You can move the mouse over the name of each prize to zoom in details or prize specifications</p><br>' + '<p>Since the quiz questions are generated wholly from featured books, see below each prize\'s details for details of the book from which each set of questions was generated</p><br>' + '<p>Then once you decide on the prize you wish to win, click on the desired prize from the gallery to be routed to the quiz page</p><br>' + '<p>Respond to the prompt by clicking <b><em>OK</em></b>, and this will take you to the quiz page</p>';
}

//function displayText2() { //for test
//    
//    toShow.innerHTML = '<p>The Second One</p>'
//}

/////.....}


