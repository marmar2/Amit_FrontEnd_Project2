let firstName = document.getElementById('fnamesub')
let lastName = document.getElementById('lnamesub')
let email = document.getElementById('emailsub')
let pass = document.getElementById('passwordsub')
let edit = document.getElementById('edit')
//let Button = document.getElementById('submit')


	   
document.addEventListener('DOMContentLoaded',function(){
	
	
	if(sessionStorage.getItem("stored") !== null){
          
		  var storedArray = JSON.parse(sessionStorage.getItem("stored"));
		 
		  firstName.value = storedArray[0];
	      lastName.value = storedArray[1];
	      email.value = storedArray[2];
	      pass.value = storedArray[3];
	}
});	



edit.addEventListener('click',function(e){
	  
	  e.preventDefault();
	  
	  firstName.removeAttribute("readonly")
	  lastName.removeAttribute("readonly")
	  email.removeAttribute("readonly")
	  pass.removeAttribute("readonly")
	  firstName.style.border = "solid black 1px";
	  lastName.style.border = "solid black 1px";
	  email.style.border = "solid black 1px";
	  pass.style.border = "solid black 1px";
	  
});


save.addEventListener('click',function(e){
	
	e.preventDefault();
	
	let arr = [];
	
	sessionStorage.removeItem("stored");
	
	 if(firstName.validity.valid && lastName.validity.valid && email.validity.valid && pass.validity.valid){
	 
	      arr.push(firstName.value);
	      arr.push(lastName.value);
	      arr.push(email.value);
	      arr.push(pass.value);
	       
	      window.sessionStorage.stored = (JSON.stringify(arr));
	  }
	
	
});
