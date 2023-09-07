let firstName = document.getElementById('fnamesub')
let lastName = document.getElementById('lnamesub')
let email = document.getElementById('emailsub')
let pass = document.getElementById('passwordsub')
let Button = document.getElementById('submit')


let arr = [];


Button.addEventListener('click',function(e){
	
	e.preventDefault(); // to stop submit from refreshing the page  
	   
	  if(firstName.validity.valid && lastName.validity.valid && email.validity.valid && pass.validity.valid){
	 
	      arr.push(firstName.value);
	      arr.push(lastName.value);
	      arr.push(email.value);
	      arr.push(pass.value);
	       
	      window.sessionStorage.stored = (JSON.stringify(arr));
	  }

      GotoLogin();  
});


document.addEventListener('DOMContentLoaded',function(){
	
	if(sessionStorage.getItem("stored") !== null){
          
		  var storedArray = JSON.parse(sessionStorage.getItem("stored"));
		 
		  firstName.value = storedArray[0];
	      lastName.value = storedArray[1];
	      email.value = storedArray[2];
	      pass.value = storedArray[3];
	}
});	


function GotoLogin() {
        window.location.href="login.html";
      }