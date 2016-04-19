

var ok=true;
$('html').on('click',function(){
if(ok==true){
$('html').mousemove(function( event ) {
  // var msg = "Handler for .mousemove() called at ";
  // msg += event.pageX + ", " + event.pageY;
   // <h1 style="color:blue;margin-left:30px;">This is a heading.</h1>
  // console.log('X '+event.pageX);
  // console.log('Y '+event.pageY);
  var color=getRandomColor();
  var size=generateRandomNumber(2,100);
  var opacity=generateRandomFloat(0,1);
  var radius=generateRandomNumber(70,100);
  add(color,event.pageX,event.pageY,size,opacity,radius);
  ok=false;

});


}
if(ok==false) {

	ok=true;
	$('html').unbind('mousemove');
	$('html').mousemove(function( event ) {
			console.log("i do nothing");
	});
}

});

var dataXY=[{}];

function add(color,X,Y,size,opacity,radius){
dataXY.push({"X":X,"Y":Y,"d":"Halwa"} );
  $(".wrap").append("<div class='round' style=postion:absolute;left:"+X+'px'+";top:"+Y+'px;background-color:'+color+";width:"+size+"px;height:"+size+"px;opacity:"+opacity+";border-radius:"+radius+"px;</div>");
 //  console.log(size);
 // console.log(opacity);
// $(".wrap").append("<div class='round'></div>").css({

// "postion":"absolute",
// "left":X+'px',
// "right":Y+'px',

// });
// $("p").css({"background-color": "yellow", "font-size": "200%"}); 


}
// #ffcc00

function getRandomColor() {
    // var letters = '0123456789ABCDEF'.split('');
    var letters = '01234567'.split('');
    var color = '#ff';
    for (var i = 0; i < 4; i++ ) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
}

function generateRandomNumber(min,max) {
    // var min = 0.0200,
    //     max = 0.120,

    var b=Math.random()*(max-min)+min;
    	return parseInt(b);
};


function generateRandomFloat(min,max) {
    // var min = 0.0200,
    //     max = 0.120,

    return Math.random()*(max-min)+min;
    	
};

// var position=0;
// $(document).bind('scroll',function(){
// // console.log("hi there.."+window.screenY);
// position=$(document).scrollTop();
// // console.log($(document).scrollTop());

// });




function drawPixel(dataXY){
for (var i =0; i < dataXY.length; i++) {
            
            
       



           
           
           

}





}














var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () { 


  var color=getRandomColor();
  var size=generateRandomNumber(3,25);
  var opacity=generateRandomFloat(0,1);
    $(".wrap").append("<div class='round' style=postion:absolute;left:"+dataXY[i].X+'px'+";top:"+dataXY[i].Y+'px;background-color:'+color+";width:"+size+"px;height:"+size+"px;opacity:"+opacity+";</div>");


  // console.log("X: "+);         //  your code here
  // console.log("Y: "+dataXY[i].Y);



      i++;                     //  increment the counter
      if (i < dataXY.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   },0)
}





