

document.addEventListener('DOMContentLoaded',function(){
	
	let smallImages = document.querySelectorAll('.subimg');
    let bigImages = document.querySelector('.bigSubImg');
    let product = document.querySelector('#sec1');

	
	var CardID = JSON.parse(sessionStorage.getItem("cardID"));
	// console.log(CardID)
	 
	fetch(`https://dummyjson.com/products/${CardID}`)
            .then(res=>res.json())
            .then(json=> {
	
				
			product.innerHTML += 
			`
			<div id="product">
	
		       <div id=img>
		          <div class="small-img">
		            <img class="subimg" src="${json.images[0]}">
		            <img class="subimg" src="${json.images[1]}">
		            <img class="subimg" src="${json.images[2]}">
		            <img class="subimg" src="${json.images[3]}">
		          </div>
		          <div class="big-img" >
				    <img class="bigsubimg" src="${json.thumbnail}">
		          </div>	  
		       </div> 
			   
	           <div id="details">
		         <h2 class="title">${json.title}</h2>
		         <p class="description"><span>Description: </span>${json.description}</p>
		         <p class="stock"><span>stock: </span>${json.stock} Left</p>
		         <p class="category"><span>category: </span>${json.category}</p>
		         <p class="rating"><span>rating: </span>${json.rating}</p>
				 <p class="price"><span>Price: </span>${json.price} EGP</p>
		       </div>
	        
			</div>
			`	
			})
			.then( function(){
				
				let smallImages = document.querySelectorAll('.subimg');
                let bigImage = document.querySelector('.bigsubimg');
                     
                     console.log(smallImages);
                     console.log(bigImage.getAttribute("src"));
                     
                     for (var i =0; i < smallImages.length; i++){
                     	
                     	smallImages[i].addEventListener('click', function(e){
                     		let source = this.getAttribute("src");
							
							console.log(bigImage);
                     		
                     		bigImage.src = source;
                     		
                     	})
                     	
                     }	
			})
			
});			


