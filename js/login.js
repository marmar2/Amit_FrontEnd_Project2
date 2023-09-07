let email = document.getElementById('emailsub')
let passWord = document.getElementById('passwordsub')
let Button = document.getElementById('submit')

let em
let pass
	   
Button.addEventListener('click',function(e){
	
	e.preventDefault(); // to stop submit from refreshing the page  
	   
	
	   console.log(pass);
       console.log(passWord.value);
	   
	   if(sessionStorage.getItem("stored") !== null){
          
		  var storedArray = JSON.parse(sessionStorage.getItem("stored"));
		 
	      em = storedArray[2];
	      pass = storedArray[3];
		  
		  if(email.value == em && passWord.value == pass){
			 GotoHome(); 
		  }  else {
			  window.alert("Invalid Email or Password");
		  }
	} else { window.alert("Invalid Email or Password"); }
	     
    window.sessionStorage.isLogged = ("true");
 
});


 function GotoHome() {
        window.location.href="index.html";
      }
