
			
			
document.addEventListener('DOMContentLoaded',function(){
	 
	 let products = document.getElementById('products'); 
	 
	fetch('https://dummyjson.com/products/')
            .then(res=>res.json())
            .then(json=> {
				console.log(json.products)
				for(var i =0; i<json.products.length ;i++){
		            
				   
				   products.innerHTML += 
				             ` <div class="card" id=${json.products[i].id}>
	                             <img src="${json.products[i].thumbnail}">
	                             <div class="details">
	                         	  <h2 class="title">${json.products[i].title}</h2>
	                         	  <p class="price">${json.products[i].price}EGP</p>
	                         	</div>
	                           </div>`
	            }	
			  })
			.then(function(){
				
			
				 let prod = document.querySelectorAll('.card');
                    // console.log(prod);
					
                    for (var i=0; i<prod.length; i++){
						
	                    prod[i].addEventListener('click', function(){
						//Get ID of clicked product	
	               	    let cardID = this.getAttribute("id");
						//store parameter of the clicked product in session storage
						window.sessionStorage.cardID = (cardID);
						
                       window.location.href="prod.html";
     
	          
	                    })
                   }
				  
			})
			
});			


 