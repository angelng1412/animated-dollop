var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.fillStyle = "#ff0000";

//buttons
var circleButton = document.getElementById("circle");
var saverButton = document.getElementById("screensaver");
var stopButton = document.getElementById("stop");


var clear = function(e){
    context.beginPath(); 
    context.clearRect(0, 0, canvas.width, canvas.height);
}


//growing and shrinking circle
var circle = function(e){
    var radius = 0;
    var growing = true; 
    
    var animateCircle = function(){
	clear();
	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
	context.stroke();
	context.fill();
	
	if (growing){
	    radius++;
	    if (radius >= canvas.width/2){
		growing = false;
	    }
	}
	else if (!growing){
	    radius--;
	    if (radius <= 0){
		growing = true
	    }
	}
	
	requestID = window.requestAnimationFrame(animateCircle);
	console.log(requestID); 
    }
    animateCircle(); 
}
circleButton.addEventListener("click", circle); 


//DVD player screensaver
var DVD = function(e){
    clear(); 
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var xchange = 1;
    var ychange = 1; 

    var animateDVD = function(){
	clear(); 
	context.beginPath(); 
	context.arc(x, y, 50, 0, 2*Math.PI);
	context.fill();

	if (x <= 0){
	    xchange = 1;
	}
	else if (x >= canvas.width){
	    xchange = -1;
	}
	if (y <= 0){
	    ychange = 1;
	}
	else if (y >= canvas.height){
	    ychange = -1;
	}
	x += xchange;
	y += ychange; 
	requestID = window.requestAnimationFrame(animateDVD);
	console.log(requestID); 
    }
    animateDVD(); 
}
saverButton.addEventListener("click", DVD); 


//stop 
var stopit = function(e){
    window.cancelAnimationFrame(requestID);
}
stopButton.addEventListener("click", stopit); 


