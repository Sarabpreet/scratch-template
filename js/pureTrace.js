

$('html').mousemove(function( event ) {
  // var msg = "Handler for .mousemove() called at ";
  // msg += event.pageX + ", " + event.pageY;

  

   // <h1 style="color:blue;margin-left:30px;">This is a heading.</h1>



  // console.log('X '+event.pageX);
  // console.log('Y '+event.pageY);
  var color=getRandomColor();
  var size=generateRandomNumber(2,50);
  var opacity=generateRandomFloat(0,1);
  add(color,event.pageX,event.pageY,size,opacity);


});






function add(color,X,Y,size,opacity){


  $(".wrap").append("<div class='round' style=postion:absolute;left:"+X+'px'+";top:"+Y+'px;background-color:'+color+";width:"+size+"px;height:"+size+"px;opacity:"+opacity+";</div>");
  console.log(size);
 console.log(opacity);
// $(".wrap").append("<div class='round'></div>").css({

// "postion":"absolute",
// "left":X+'px',
// "right":Y+'px',

// });
// $("p").css({"background-color": "yellow", "font-size": "200%"}); 


}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
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

