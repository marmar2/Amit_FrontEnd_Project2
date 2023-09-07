
let btn = document.getElementById("subm");
let name = document.getElementById("namesub");
let fed = document.getElementById("fedb");
let show = document.querySelector(".sec2");

let reviewArr = [];


btn.addEventListener('click',function(e){
	
	e.preventDefault(); // to stop submit from refreshing the page  
	   
	   // let review = [];
	    
	   // review.push(name.value);
	   // review.push(name.value);
	   
	   // reviewArr.push(review);
	   // console.log(reviewArr);
	       
	    // window.sessionStorage.stored = (JSON.stringify(reviewArr));
		
		console.log(fed.value);
		
		if(fed.value !== null && name.value !== null){
		
		 show.innerHTML += 
		 `<div class="show">
		
		 <h5 class="showname">${name.value}</h5>
		 <h5 class="shownfedback">${fed.value}</h5>
		
	 </div>`
	
	  name.value = "";
	  fed.value = "";
	  
		}
 
});