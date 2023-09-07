
let slideIndex;

function showSlid(x){
	
	let slides = document.getElementsByClassName("slides");
	
  
    slideIndex = x;
	
	if (x == slides.length){	
		slides[slideIndex-1].style.display = "none";
		slides[slideIndex-1].className.replace(" active", "");
		slideIndex = 1;
		slides[slideIndex-1].style.display = "block";
		slides[slideIndex-1].className += " active";
	} else if (x < slides.length) { 
	  
	   slides[slideIndex-1].style.display = "none";
	   slides[slideIndex-1].className.replace(" active", "");
	    slideIndex += 1;
		slides[slideIndex-1].style.display = "block";
		slides[slideIndex-1].className += " active";
	}
}


 
 let cardImg = ["images/slider1.jpg","images/slider2.jpg","images/slider3.jpg"];

 var card = document.querySelector("#slide");


 var i =0 ;

 
  setInterval(function(){
	 
	  if(i >= 3){
		  i = 0;
	  }
	 
	  card.src = cardImg[i++];   
	 
  }, 2000);
 
 


