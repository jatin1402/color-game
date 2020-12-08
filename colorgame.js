var numsquares=6;
var colors= generateRandomColors(numsquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var colorDisplay=document.querySelector("#colorDisplay");
var resetButton=document.querySelector("#reset")
var easyButton=document.querySelector("#easyBtn")
var hardButton=document.querySelector("#hardBtn")


resetButton.addEventListener("click",function(){
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messagedisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="#232323";
})

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numsquares=3;
	colors=generateRandomColors();
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="#232323";

})


hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numsquares=6;
	colors=generateRandomColors();
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="#232323";
})

colorDisplay.textContent= pickedColor;

for(var i=0;i<squares.length;i++){

	squares[i].style.backgroud= colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor= this.style.background;

		if(clickedColor===pickedColor){
			messagedisplay.textContent="Correct!";
			resetButton.textContent="Play Again?"
			changeColors(clickedColor);
			h1.style.background= clickedColor;
		}
		else{
			messagedisplay.textContent="Try Again!";
			this.style.background= "#232323";
		}
	})
}

function pickColor(){
	var random=Math.floor(Math.random() * 6);
	return colors[random];
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background= color;
	}
}


function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return ans="rgb(" +r+", "+g+", "+b+")"; 
}