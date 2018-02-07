var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.fillStyle = "#ff0000";

var stopButton = document.getElementById("stop");
var x = 0; 

var clear = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}



var animate = function(e){
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

canvas.addEventListener("click", animate); 

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}
stopButton.addEventListener("click", stopit); 


